(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[38942],{38942:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiIcon, TuiTitle} from '@taiga-ui/core';\nimport {TuiBlock, TuiCheckbox, TuiRadio, TuiTooltip} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [\n        ReactiveFormsModule,\n        TuiBlock,\n        TuiCheckbox,\n        TuiRadio,\n        TuiIcon,\n        TuiTooltip,\n        TuiTitle,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly testForm = new FormGroup({\n        testValue1: new FormControl(true),\n        testValue2: new FormControl({value: false, disabled: true}),\n        testValue3: new FormControl({value: true, disabled: true}),\n        testValue4: new FormControl(false),\n        testValue5: new FormControl(),\n    });\n}\n"}}]);