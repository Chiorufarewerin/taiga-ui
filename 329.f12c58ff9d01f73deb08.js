(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{JWQg:function(n,e,a){"use strict";a.r(e),e.default='<tui-axes\n    axisY="none"\n    class="axes"\n    [axisXLabels]="axisXLabels"\n    [axisYSecondaryLabels]="axisYSecondaryLabels"\n    [horizontalLines]="2"\n    [verticalLines]="4"\n    [horizontalLinesHandler]="horizontalLinesHandler"\n    [verticalLinesHandler]="verticalLinesHandler"\n>\n    <tui-bar-chart\n        class="chart"\n        [value]="value"\n        [hintContent]="hint"\n    ></tui-bar-chart>\n</tui-axes>\n\n<ng-template\n    #hint\n    let-setIndex\n>\n    <p\n        *ngFor="let item of value; let index = index"\n        class="hint"\n    >\n        <span\n            class="dot"\n            [style.background]="getBackground(index)"\n        ></span>\n        <span class="name">{{ getSetName(index) }}</span>\n        <tui-money\n            [singleColor]="true"\n            [value]="item[setIndex] * 1000"\n        ></tui-money>\n    </p>\n</ng-template>\n'}}]);