(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[58794],{58794:n=>{n.exports="import {Component, inject} from '@angular/core';\nimport {Router} from '@angular/router';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiPopover} from '@taiga-ui/cdk';\nimport {\n    type TuiAlertOptions,\n    TuiAlertService,\n    TuiButtonDirective,\n    TuiIconComponent,\n} from '@taiga-ui/core';\nimport {\n    POLYMORPHEUS_CONTEXT,\n    PolymorpheusComponent,\n    PolymorpheusModule,\n} from '@tinkoff/ng-polymorpheus';\nimport {takeUntil} from 'rxjs';\n\n@Component({\n    standalone: true,\n    imports: [TuiIconComponent],\n    template: `\n        <label style=\"display: flex; align-items: center\">\n            <em>From custom label component with</em>\n            <tui-icon icon=\"tuiIconHeart\" />\n        </label>\n    `,\n    changeDetection,\n})\nclass CustomLabelComponent {}\n\n@Component({\n    standalone: true,\n    imports: [PolymorpheusModule],\n    template: `\n        <h4>Start content</h4>\n        <ng-container *polymorpheusOutlet=\"context.label as text; context: context\">\n            {{ text }}\n        </ng-container>\n        <h4>End content</h4>\n    `,\n    changeDetection,\n})\nclass AlertExampleWithCustomLabelComponent {\n    protected readonly context =\n        inject<TuiPopover<TuiAlertOptions<unknown>, boolean>>(POLYMORPHEUS_CONTEXT);\n}\n\n@Component({\n    standalone: true,\n    selector: 'tui-alerts-example-5',\n    imports: [TuiButtonDirective],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    private readonly router = inject(Router);\n    private readonly alerts = inject(TuiAlertService);\n\n    private readonly notification = this.alerts\n        .open(new PolymorpheusComponent(AlertExampleWithCustomLabelComponent), {\n            label: ({status}) =>\n                status === 'error'\n                    ? 'Error label from function'\n                    : 'Info label from function',\n            status: 'error',\n            autoClose: 0,\n        })\n        .pipe(takeUntil(this.router.events));\n\n    private readonly notificationWithCustomLabel = this.alerts\n        .open(new PolymorpheusComponent(AlertExampleWithCustomLabelComponent), {\n            label: new PolymorpheusComponent(CustomLabelComponent),\n            status: 'warning',\n            autoClose: 0,\n        })\n        .pipe(takeUntil(this.router.events));\n\n    protected showNotification(): void {\n        this.notification.subscribe();\n    }\n\n    protected showNotificationWithCustomLabel(): void {\n        this.notificationWithCustomLabel.subscribe();\n    }\n}\n"}}]);