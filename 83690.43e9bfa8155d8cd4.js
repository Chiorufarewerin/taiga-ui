(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[83690],{83690:n=>{n.exports="import {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDialogService} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-dropdown-context-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiDropdownContextExample2 {\n    private readonly dialogs = inject(TuiDialogService);\n\n    readonly menuItems = [\n        {title: 'View', iconName: 'tuiIconEye'},\n        {title: 'Copy', iconName: 'tuiIconCopy'},\n        {title: 'Delete', iconName: 'tuiIconTrash'},\n        {title: 'Move', iconName: 'tuiIconFolder'},\n    ] as const;\n\n    readonly tableData = [\n        {character: 'Ross Geller', actor: 'David Schwimmer'},\n        {character: 'Chandler Bing', actor: 'Matthew Perry'},\n        {character: 'Joey Tribbiani', actor: 'Matt LeBlanc'},\n        {character: 'Phoebe Buffay', actor: 'Lisa Kudrow'},\n        {character: 'Monica Geller', actor: 'Courteney Cox'},\n        {character: 'Rachel Green', actor: 'Jennifer Aniston'},\n    ] as const;\n\n    readonly tableColumns = Object.keys(this.tableData[0]);\n\n    readonly moreOptions = ['Option 1', 'Option 2', 'Option 3'];\n\n    getObjectValues = (obj: Record<string, unknown>): unknown[] => Object.values(obj);\n\n    printToConsole(action: string, contextInfo: unknown): void {\n        this.dialogs.open(`[${action}]: ${JSON.stringify(contextInfo)}`).subscribe();\n    }\n}\n"}}]);