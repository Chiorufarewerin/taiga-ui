(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[41888],{41888:e=>{e.exports="```ts\nimport {Component, inject, TemplateRef, ViewChild} from '@angular/core';\nimport {TuiPreviewDialogService} from '@taiga-ui/addon-preview';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\nimport {TuiDialogContext} from '@taiga-ui/core';\n\n@Component({\n  // ...\n})\nexport class SomeComponent {\n  private readonly previewDialogService = inject(TuiPreviewDialogService);\n\n  @ViewChild(`preview`)\n  readonly preview: TemplateRef<TuiDialogContext<void>>;\n\n  show() {\n    this.previewDialogService.open(this.preview).subscribe();\n  }\n}\n```\n"}}]);