(window.webpackJsonp=window.webpackJsonp||[]).push([[736],{"0KpD":function(n,o,e){"use strict";e.r(o),o.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiInputCardGroupedComponent} from '@taiga-ui/addon-commerce';\n\n@Component({\n    selector: `tui-input-card-grouped-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n})\nexport class TuiInputCardGroupedExample2 {\n    readonly items = [\n        {card: `4321***1234`, expire: `12/21`, name: `Salary`, bank: `Tinkoff`},\n        {\n            card: `8765***5678`,\n            expire: `03/42`,\n            cvc: `***`,\n            name: `Tips`,\n            bank: `Bank of America`,\n        },\n        {card: `4200***9000`, name: `Dogecoins`, bank: `Crypto`},\n    ];\n\n    readonly card = new FormGroup({meta: new FormControl(this.items[0])});\n\n    onClick(component: TuiInputCardGroupedComponent): void {\n        this.card.get(`meta`)?.setValue(null);\n        this.onEsc(component);\n    }\n\n    onEsc(component: TuiInputCardGroupedComponent): void {\n        component.nativeFocusableElement?.focus();\n        component.open = false;\n    }\n}\n"}}]);