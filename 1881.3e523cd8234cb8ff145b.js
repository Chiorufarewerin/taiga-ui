(window.webpackJsonp=window.webpackJsonp||[]).push([[1881],{geZ0:function(n,e,t){"use strict";t.r(e),e.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {USER_AGENT} from '@ng-web-apis/common';\nimport {isEdge, isEdgeOlderThan, isFirefox, isIE} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-browser-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiBrowserExample1 {\n    constructor(@Inject(USER_AGENT) private readonly userAgent: string) {}\n\n    get aboutMyBrowser(): string {\n        if (isEdge(this.userAgent)) {\n            if (isEdgeOlderThan(13, this.userAgent)) {\n                return `Edge older than 13`;\n            }\n\n            return `Edge until 13`;\n        }\n\n        if (isIE(this.userAgent)) {\n            return `Unfortunately, you have IE11`;\n        }\n\n        if (isFirefox(this.userAgent)) {\n            return `Okay, you have Firefox!`;\n        }\n\n        return `You have Chromium based browser, cool!`;\n    }\n}\n"}}]);