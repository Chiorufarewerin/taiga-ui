(window.webpackJsonp=window.webpackJsonp||[]).push([[826],{EPWG:function(e,n,i){"use strict";i.r(n),n.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-input-inline-example-2`,\n    templateUrl: `./template.html`,\n    changeDetection,\n    encapsulation,\n    styleUrls: [`./style.less`],\n})\nexport class TuiInputInlineExample2 {\n    heading = `Page heading`;\n    editing = false;\n\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly alertService: TuiAlertService,\n    ) {}\n\n    toggle(): void {\n        this.editing = !this.editing;\n    }\n\n    onFocusedChange(focused: boolean): void {\n        if (!focused) {\n            this.editing = false;\n            this.saveHeading(this.heading);\n        }\n    }\n\n    private saveHeading(newHeading: string): void {\n        this.alertService.open(newHeading, {label: `New heading`}).subscribe();\n    }\n}\n"}}]);