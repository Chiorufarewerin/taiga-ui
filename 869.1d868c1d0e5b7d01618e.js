(window.webpackJsonp=window.webpackJsonp||[]).push([[869],{Oj3W:function(n,o,e){"use strict";e.r(o),o.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_PASSWORD_TEXTS, tuiInputPasswordOptionsProvider} from '@taiga-ui/kit';\nimport {of} from 'rxjs';\n\n@Component({\n    selector: `tui-input-password-example-2`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [\n        tuiInputPasswordOptionsProvider({\n            icons: {\n                hide: `tuiIconLockLarge`,\n                show: `tuiIconLockOpenLarge`,\n            },\n        }),\n        {\n            provide: TUI_PASSWORD_TEXTS,\n            useValue: of([``]),\n        },\n    ],\n})\nexport class TuiInputPasswordExample2 {\n    testForm = new FormGroup({\n        testValue: new FormControl(`password`, Validators.required),\n    });\n}\n"}}]);