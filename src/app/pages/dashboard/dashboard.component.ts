import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  ViewChild,
  DoCheck,
} from '@angular/core';
import COUNTRY_CODES from "../../shared/utils/countries"
import { combineLatest } from 'rxjs';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

import {
  GetdataService
} from "./../../core/services/getdata.service";
import * as Fuse from 'fuse.js'
import {
  PerfectScrollbarComponent
} from 'ngx-perfect-scrollbar';
import {
  isUndefined
} from 'util';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { trigger, transition, animate, style, state } from '@angular/animations'
import { TranslateService } from '@ngx-translate/core';
//am4core.useTheme(am4themes_dataviz);
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('fadeInOutAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit, OnDestroy, DoCheck {
  @ViewChild(PerfectScrollbarComponent) public directiveScroll: PerfectScrollbarComponent;
  @ViewChild('autoShownModal', { static: false }) autoShownModal: ModalDirective;
  isModalShown = false;
  public modalStep = 1;
  public translations: any = {};
  public fuse: any;
  public fuseResults: any[];

  public timeLine: any;

  public caseData = [];
  public recoveriesData = [];
  public deathData = [];

  private pieChart: am4charts.PieChart;
  private mapChart: am4maps.MapChart;
  private lineChart: am4charts.XYChart;
  private radarChart: am4charts.RadarChart;
  public isLoading: boolean = true;
  public isLoadingMap: boolean = true;
  public isLoadingCountries: boolean = true;

  public totalCases;
  public totalDeaths;
  public totalRecoveries;
  public totalCritical;
  public todayCases;
  public todayDeaths;
  public activeCases;
  public casesPer1M;
  public finishedCases;
  
  public sortType = "todayCases";
  
  public countryCodes = COUNTRY_CODES;
  
  public countries: any = [];
  constructor(private zone: NgZone, private _getDataService: GetdataService, public translate: TranslateService) {
  }
  async ngDoCheck() {
    this.translate.get(['Shared.Other.14', 'Shared.Other.15', 'Shared.Other.16', 'Shared.Other.17', 'Shared.TopCards.1', 'Shared.TopCards.3', 'Shared.TopCards.4'])
    .subscribe(translations => {
        this.setTranslations(translations);
        return 0;
    });
  }
  calculateSum(index, array = this.countries) {
    var total = 0
    for (var i = 0, _len = array.length; i < _len; i++) {
      total += array[i][index]
    }
    return total
  }


  sortData(data, sortBy) {
    try {
      const sortProp = sortBy;
      data.sort((a, b) => {
        if (a[sortProp] < b[sortProp]) {
          return -1;
        } else if (a[sortProp] > b[sortProp]) {
          return 1;
        }
        return 0;
      })
    } catch (e) {
      console.error("ERROR while sorting", e);
      return data;
    }
    return data
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.pieChart) {
        this.pieChart.dispose();
      }
      if (this.mapChart) {
        this.mapChart.dispose();
      }
      if (this.lineChart) {
        this.lineChart.dispose();
      }
      if(this.radarChart){
        this.radarChart.dispose();
      }
    });
  }

  
  async ngOnInit() {
    await this.ngDoCheck();
    if(!localStorage.getItem("dontShow")){
      this.showModal();
    }
    this.zone.runOutsideAngular(async () => {
      combineLatest(
        this._getDataService.getAll(this.sortType),
        this._getDataService.getTimelineGlobal()
     )
     .subscribe(([getAllData, getTimelineData]) => {
       this.isLoading = false;
      this.isLoadingCountries = false;
      this.isLoadingMap = false;
      this.countries = getAllData;
      this.totalCases = this.calculateSum("cases");
      this.totalDeaths = this.calculateSum("deaths");
      this.totalRecoveries = this.calculateSum("recovered");
      this.totalCritical = this.calculateSum("critical");
      this.todayCases = this.calculateSum("todayCases");
      this.todayDeaths = this.calculateSum("todayDeaths");
      this.activeCases = this.calculateSum("active");
      this.casesPer1M = this.calculateSum("casesPerOneMillion");
      this.finishedCases = this.totalDeaths + this.totalRecoveries;
      this.fuse = new Fuse(this.countries, {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        minMatchCharLength: 1,
        keys: [
          "country"
        ]
      });
      this.timeLine = getTimelineData;
      this.loadLineChart(false);
      this.loadRadar();
      this.loadPieChart();

      
     });
    });
  }

  searchCountries(key) {
    if (key) {
      this.countries = this.fuse.search(key);
      if (isUndefined(this.directiveScroll)) return;
      this.directiveScroll.directiveRef.scrollToTop()
      return
    }
    this.countries = this.fuse.list;
  }
  
  sortCountries(key, skey) {
    this.isLoadingCountries = true;
    this.sortType = key;
    this.loadSorted();
  }
  
  loadSorted(){
    this._getDataService.getAll(this.sortType).subscribe((data: {}) => {
      this.countries = data;
      this.isLoadingCountries = false;
    });
  }

  loadPieChart() {
    let tempData = this.fuse.list.slice();
    this.sortData(tempData, "cases");
    tempData = tempData.reverse();
    let chart = am4core.create("pieChart", am4charts.PieChart);
    chart.data = tempData.slice(0, 10);
    let otherCases = tempData.slice(10, tempData.length);
    chart.data.push({
      country: 'Other',
      cases: this.calculateSum("cases", otherCases)
    });
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "cases";
    pieSeries.dataFields.category = "country";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    pieSeries.slices.template.stroke = am4core.color("#313a46");
    pieSeries.slices.template.strokeWidth = 1;
    pieSeries.slices.template.strokeOpacity = 1;
    this.pieChart = chart;

    this.loadMap("cases");
  }
  
  loadLineChart(chartType) {
    this.caseData = [];
    if (this.lineChart) {
      this.lineChart.dispose();
    }
    Object.keys(this.timeLine).forEach(key => {
      this.caseData.push({
        date: new Date(key),
        cases: this.timeLine[key].cases,
        recoveries: this.timeLine[key].recovered,
        deaths: this.timeLine[key].deaths
      });
    });
    this.caseData.push({
      date: new Date().getTime(),
      cases: this.totalCases,
      recoveries: this.totalRecoveries,
      deaths: this.totalDeaths
    });

    let chart = am4core.create("lineChart", am4charts.XYChart);
    chart.numberFormatter.numberFormat = "#a";
    chart.numberFormatter.bigNumberPrefixes = [
      { "number": 1e+3, "suffix": "K" },
      { "number": 1e+6, "suffix": "M" },
      { "number": 1e+9, "suffix": "B" }
    ];
    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.logarithmic = chartType;
    valueAxis.renderer.labels.template.fill = am4core.color("#adb5bd");
    dateAxis.renderer.labels.template.fill = am4core.color("#adb5bd");

    chart = this.createSeriesLine(chart, "#21AFDD", "cases");
    chart = this.createSeriesLine(chart, "#10c469", "recoveries");
    chart = this.createSeriesLine(chart, "#ff5b5b", "deaths");

    chart.data = this.caseData;

    chart.legend = new am4charts.Legend();
    chart.legend.labels.template.fill = am4core.color("#adb5bd");

    chart.cursor = new am4charts.XYCursor();
    this.lineChart = chart;
  }
  loadMap(option) {
    this.isLoadingMap=true;
    if (this.mapChart) {
      this.mapChart.dispose();
    }
    let color = "#21AFDD";
    if (option == "recovered") {
      color = "#10c469";
    } else if (option == "critical") {
      color = "#f9c851";
    } else if (option == "deaths") {
      color = "#ff5b5b";
    }
    let mapData = [];
    this.fuse.list.forEach(element => {
      if(element[option]!=0){
        mapData.push({
          id: this.countryCodes[element.country],
          name: element.country,
          value: element[option],
          color: am4core.color(color)
        });
      }
    });

    let chartMap = am4core.create("worldChart", am4maps.MapChart);
    // Set map definition
    chartMap.geodata = am4geodata_worldLow;
    
    // Set projection
    chartMap.projection = new am4maps.projections.Miller();

    // Create map polygon series
    let polygonSeries = chartMap.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.exclude = ["AQ"];
    polygonSeries.useGeodata = true;
    polygonSeries.nonScalingStroke = true;
    polygonSeries.strokeWidth = 0.5;
    polygonSeries.calculateVisualCenter = true;
    
    let imageSeries = chartMap.series.push(new am4maps.MapImageSeries());
    imageSeries.data = mapData;
    imageSeries.dataFields.value = "value";
    
    let imageTemplate = imageSeries.mapImages.template;
    imageTemplate.nonScaling = true
    
    let circle = imageTemplate.createChild(am4core.Circle);
    circle.fillOpacity = 0.7;
    circle.propertyFields.fill = "color";
    circle.tooltipText = "{name}: [bold]{value}[/]";

    chartMap.events.on("ready",()=>{
      this.isLoadingMap = false;
    })

    imageSeries.heatRules.push({
      "target": circle,
      "property": "radius",
      "min": 4,
      "max": 30,
      "dataField": "value"
    })
    
    imageTemplate.adapter.add("latitude", function (latitude, target) {
      let polygon = polygonSeries.getPolygonById(target.dataItem.dataContext["id"]);
      if (polygon) {
        return polygon.visualLatitude;
      }
      return latitude;
    })
    
    imageTemplate.adapter.add("longitude", function (longitude, target) {
      let polygon = polygonSeries.getPolygonById(target.dataItem.dataContext["id"]);
      if (polygon) {
        return polygon.visualLongitude;
      }
      return longitude;
    })
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#282d37");
    polygonTemplate.stroke = am4core.color("#313a46")
    this.mapChart = chartMap;
  }

  loadRadar() {
    let chart = am4core.create("radarChart", am4charts.RadarChart);
    
    // Add data
    chart.data = [{
      "category": this.translations.critical,
      "value": this.totalCritical / this.activeCases * 100,
      "full": 100
    }, {
      "category": this.translations.deaths,
      "value": this.totalDeaths / this.finishedCases * 100,
      "full": 100
    }, {
      "category": this.translations.recovered,
      "value": this.totalRecoveries / this.finishedCases * 100,
      "full": 100
    }, {
      "category": this.translations.active,
      "value": 100-(this.totalCritical / this.activeCases * 100),
      "full": 100
    }];

    // Make chart not full circle
    chart.startAngle = -90;
    chart.endAngle = 180;
    chart.innerRadius = am4core.percent(20);

    // Set number format
    chart.numberFormatter.numberFormat = "#.#'%'";
    
    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis<am4charts.AxisRendererRadial>());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.adapter.add("fill", function (fill, target) {
      if(target.dataItem.index==0){
        return am4core.color("#f9c851");
      }
      if(target.dataItem.index==1){
        return am4core.color("#ff5b5b");
      }
      if(target.dataItem.index==2){
        return am4core.color("#10c469");
      }
      return am4core.color("#21AFDD");
    });
    categoryAxis.renderer.minGridDistance = 10;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;
    
    valueAxis.renderer.labels.template.fill = am4core.color("#adb5bd");

    // Create series
    let series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = "full";
    series1.dataFields.categoryY = "category";
    series1.clustered = false;
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    series1.columns.template.fillOpacity = 0.08;
    series1.columns.template["cornerRadiusTopLeft"] = 20;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 20;

    let series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = "value";
    series2.dataFields.categoryY = "category";
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series2.columns.template.radarColumn.cornerRadius = 20;
    
    series2.columns.template.adapter.add("fill", function (fill, target) {
      //return chart.colors.getIndex(target.dataItem.index);
      if(target.dataItem.index==0){
        return am4core.color("#f9c851");
      }
      if(target.dataItem.index==1){
        return am4core.color("#ff5b5b");
      }
      if(target.dataItem.index==2){
        return am4core.color("#10c469");
      }
      return am4core.color("#21AFDD");
    });
    
    // Add cursor
    chart.cursor = new am4charts.RadarCursor();
    chart.cursor.fill = am4core.color("#282e38");
    chart.tooltip.label.fill = am4core.color("#282e38");
    
    this.radarChart = chart;
  }
  createSeriesLine(chart, color, type) {
    let name = type.charAt(0).toUpperCase() + type.slice(1);
    if(type=="cases"){
      name = this.translations.cases;
    } else if(type=="recoveries"){
      name = this.translations.recovered;
    } else if(type=="deaths"){
      name = this.translations.deaths;
    }
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = type;
    series.fill = am4core.color(color);
    series.dataFields.dateX = "date";
    series.strokeWidth = 2;
    series.minBulletDistance = 10;
    series.tooltipText = "{valueY} " + name;
    series.tooltip.pointerOrientation = "vertical";

    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.fillOpacity = 0.5;

    series.stroke = am4core.color(color);
    series.legendSettings.labelText = name;
    series.tooltip.autoTextColor = false;
    series.tooltip.label.fill = am4core.color("#282e38");
    return chart
  }
      showModal(): void {
        this.modalStep = 1;
        this.isModalShown = true;
      }
     
      hideModal(): void {
        this.autoShownModal.hide();
      }
     
      onHidden(): void {
        this.isModalShown = false;
      }
      nextStep(){
        this.modalStep+=1;
      }
      close(dontShow){
        if(dontShow){
          localStorage.setItem("dontShow","true");
        }
        this.hideModal();
      }
  async setTranslations(translations){
    this.translations.active = translations['Shared.Other.14'];
    this.translations.recovered = translations['Shared.Other.15'];
    this.translations.deaths = translations['Shared.Other.16'];
    this.translations.critical = translations['Shared.Other.17'];
    this.translations.cases = translations['Shared.Other.14'];
  }
}