(window.webpackJsonp=window.webpackJsonp||[]).push([[766],{ojGF:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay, TuiDayRange} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-input-date-range-example-2`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputDateRangeExample2 {\n    readonly control = new FormControl(\n        new TuiDayRange(new TuiDay(2018, 2, 10), new TuiDay(2018, 3, 20)),\n    );\n}\n"}}]);