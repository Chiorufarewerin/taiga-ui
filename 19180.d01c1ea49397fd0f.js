(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[19180],{19180:e=>{e.exports="import {AsyncPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiButton} from '@taiga-ui/core';\nimport {TuiFilterComponent} from '@taiga-ui/kit';\nimport {BehaviorSubject, map} from 'rxjs';\n\nconst Department = {\n    IT: 'IT',\n    HR: 'HR',\n    HeadOffice: 'Heads',\n    Delivery: 'Delivery',\n    Admin: 'Administrative',\n    Business: 'Business lines',\n    MB: 'Business technologies',\n    Finance: 'Corporate Finance',\n    Payment: 'Payment Systems',\n    Operating: 'Operating service lines',\n    Marketing: 'Media-marketing',\n    Security: 'Security Service',\n} as const;\n\n@Component({\n    standalone: true,\n    exportAs: \"Example4\",\n    imports: [TuiButton, AsyncPipe, TuiFilterComponent, FormsModule],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly items = Object.values(Department);\n    protected readonly filters$ = new BehaviorSubject<readonly string[]>([]);\n\n    protected readonly checked$ = this.filters$.pipe(\n        map(({length}) => (length === this.items.length ? 'checked' : '')),\n    );\n\n    protected readonly model$ = this.filters$.pipe(\n        map((value) => (value.length === this.items.length ? [] : value)),\n    );\n\n    protected onModelChange(model: readonly string[]): void {\n        this.filters$.next(model);\n    }\n\n    protected toggleAll(): void {\n        this.filters$.next(\n            this.items.length === this.filters$.value.length ? [] : [...this.items],\n        );\n    }\n}\n"}}]);