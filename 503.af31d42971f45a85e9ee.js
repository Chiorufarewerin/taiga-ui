(window.webpackJsonp=window.webpackJsonp||[]).push([[503],{"10V6":function(n,e,a){"use strict";a.r(e),e.default='<div class="wrapper">\n    <tui-calendar\n        [value]="value"\n        [showAdjacent]="false"\n        [markerHandler]="markerHandler"\n        [maxViewedMonth]="firstMonth"\n        [month]="firstMonth"\n        [(hoveredItem)]="hoveredItem"\n        (monthChange)="onMonthChangeFirst($event)"\n        (dayClick)="onDayClick($event)"\n    ></tui-calendar>\n    <tui-calendar\n        [value]="value"\n        [showAdjacent]="false"\n        [markerHandler]="markerHandler"\n        [month]="middleMonth"\n        [minViewedMonth]="middleMonth"\n        [maxViewedMonth]="middleMonth"\n        [(hoveredItem)]="hoveredItem"\n        (monthChange)="onMonthChangeMiddle($event)"\n        (dayClick)="onDayClick($event)"\n    ></tui-calendar>\n    <tui-calendar\n        [value]="value"\n        [showAdjacent]="false"\n        [markerHandler]="markerHandler"\n        [minViewedMonth]="lastMonth"\n        [month]="lastMonth"\n        [(hoveredItem)]="hoveredItem"\n        (monthChange)="onMonthChangeLast($event)"\n        (dayClick)="onDayClick($event)"\n    ></tui-calendar>\n</div>\n<div\n    *ngIf="value"\n    i18n\n>\n    Chosen dates: {{ value }}\n</div>\n'}}]);