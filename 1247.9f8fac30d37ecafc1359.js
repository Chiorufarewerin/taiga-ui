(window.webpackJsonp=window.webpackJsonp||[]).push([[1247],{IXTe:function(n,e,t){"use strict";t.r(e),e.default='<tui-range\n    id="range-with-segments"\n    new\n    size="m"\n    class="range"\n    [min]="min"\n    [max]="max"\n    [quantum]="quantum"\n    [segments]="segments"\n    [(ngModel)]="value"\n></tui-range>\n\n<div class="ticks-labels">\n    <div *ngFor="let label of labels">\n        <ng-container *ngIf="label !== 750; else labelWithIcon">\n            {{ label | i18nPlural: pluralMap }}\n        </ng-container>\n    </div>\n\n    <ng-template #labelWithIcon>\n        <tui-svg src="tuiIconArrowUp"></tui-svg>\n        <div>3/4</div>\n    </ng-template>\n</div>\n\n<p class="tui-space_top-12 tui-space_bottom-0">\n    Control value:\n    <output for="range-with-segments">\n        <code>{{ value | json }}</code>\n    </output>\n</p>\n'}}]);