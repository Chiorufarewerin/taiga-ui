(window.webpackJsonp=window.webpackJsonp||[]).push([[1795],{ElNS:function(e,n,t){"use strict";t.r(n),n.default="import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertContext} from '@taiga-ui/cdk';\nimport {TuiAlertOptions, TuiAlertService, TuiNotification} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-alerts-example-2`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiAlertsExampleComponent2 {\n    @ViewChild(`withdrawTemplate`)\n    withdrawTemplate?: TemplateRef<TuiAlertContext<TuiAlertOptions<unknown>>>;\n\n    @ViewChild(`depositTemplate`)\n    depositTemplate?: TemplateRef<TuiAlertContext<TuiAlertOptions<unknown>>>;\n\n    money = 1000;\n\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly alertService: TuiAlertService,\n    ) {}\n\n    showWithdrawAlert(): void {\n        this.alertService\n            .open(this.withdrawTemplate || ``, {\n                label: `A template sample`,\n                status: TuiNotification.Warning,\n                autoClose: false,\n            })\n            .subscribe();\n    }\n\n    showDepositAlert(): void {\n        this.alertService\n            .open(this.depositTemplate || ``, {\n                label: `A template sample`,\n                status: TuiNotification.Success,\n                autoClose: false,\n            })\n            .subscribe();\n    }\n\n    withdraw(): void {\n        this.money -= 100;\n    }\n\n    deposit(): void {\n        this.money += 100;\n    }\n}\n"}}]);