(window.webpackJsonp=window.webpackJsonp||[]).push([[1005],{"8/Bk":function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-line-clamp-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLineClampExample2 {\n    linesLimit = 2;\n\n    toggle(): void {\n        this.linesLimit = this.collpased ? 10 : 2;\n    }\n\n    private get collpased(): boolean {\n        return this.linesLimit === 2;\n    }\n}\n"}}]);