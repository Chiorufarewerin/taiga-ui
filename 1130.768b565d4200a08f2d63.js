(window.webpackJsonp=window.webpackJsonp||[]).push([[1130],{"a/UK":function(e,n,i){"use strict";i.r(n),n.default="import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {PreviewDialogService} from '@taiga-ui/addon-preview';\nimport {TuiDialogContext} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-preview-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPreviewExample2 {\n    @ViewChild(`preview`)\n    readonly preview?: TemplateRef<TuiDialogContext<void>>;\n\n    constructor(\n        @Inject(PreviewDialogService)\n        private readonly previewDialogService: PreviewDialogService,\n    ) {}\n\n    show(): void {\n        this.previewDialogService.open(this.preview || ``).subscribe();\n    }\n}\n"}}]);