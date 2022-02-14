(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{Fq1L:function(n,e,i){"use strict";i.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiStringHandler} from '@taiga-ui/cdk';\nimport {tuiItemsHandlersProvider} from '@taiga-ui/kit';\n\ninterface Employee {\n    readonly id: number;\n    readonly name: string;\n    readonly dept: {\n        readonly id: number;\n        readonly title: string;\n    };\n}\n\nconst STRINGIFY_EMPLOYEE: TuiStringHandler<Employee> = (item: Employee) =>\n    `${item.name} (${item.dept.title})`;\n\n@Component({\n    selector: 'tui-combo-box-example-6',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [tuiItemsHandlersProvider({stringify: STRINGIFY_EMPLOYEE})],\n})\nexport class TuiComboBoxExample6 {\n    readonly testValue = new FormControl(null);\n\n    readonly items: ReadonlyArray<Employee> = [\n        {id: 42, name: 'John Cleese', dept: {id: 566, title: 'Financial'}},\n        {id: 237, name: 'Eric Idle', dept: {id: 560, title: 'Staffing'}},\n        {id: 666, name: 'Michael Palin', dept: {id: 566, title: 'Financial'}},\n        {id: 123, name: 'Terry Gilliam', dept: {id: 500, title: 'Administrative'}},\n        {id: 777, name: 'Terry Jones', dept: {id: 566, title: 'Financial'}},\n        {id: 999, name: 'Graham Chapman', dept: {id: 560, title: 'Staffing'}},\n    ];\n}\n"}}]);