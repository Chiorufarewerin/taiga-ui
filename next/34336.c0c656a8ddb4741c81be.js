"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[34336],{34336:n=>{n.exports='```html\n<ng-template #preview>\n  <tui-preview>\n    <tui-preview-title>{{title}}</tui-preview-title>\n    <tui-preview-pagination\n      [length]="2"\n      [(index)]="index"\n    ></tui-preview-pagination>\n\n    <button\n      tuiIconButton\n      tuiPreviewAction\n      icon="tuiIconTrash"\n      title="Delete"\n      (click)="delete()"\n    ></button>\n    <button\n      tuiIconButton\n      tuiPreviewAction\n      icon="tuiIconDownload"\n      title="Download"\n      (click)="download()"\n    ></button>\n\n    <img\n      *polymorpheusOutlet="previewContent as src"\n      alt=""\n      [src]="src"\n    />\n  </tui-preview>\n</ng-template>\n```\n'}}]);