(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[99877],{99877:n=>{n.exports="import {CommonModule} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiHint, TuiIconComponent, TuiNotificationComponent} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    imports: [CommonModule, TuiNotificationComponent, TuiIconComponent, TuiHint],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly statuses = [\n        'neutral',\n        'info',\n        'success',\n        'warning',\n        'error',\n    ] as const;\n\n    protected readonly sizes = ['s', 'm', 'l'] as const;\n}\n"}}]);