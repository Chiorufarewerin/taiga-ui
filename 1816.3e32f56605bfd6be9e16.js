(window.webpackJsonp=window.webpackJsonp||[]).push([[1816],{lBL7:function(n,o,i){"use strict";i.r(o),o.default="```ts\nimport {TuiNotification, TUI_NOTIFICATION_DEFAULT_OPTIONS, TUI_NOTIFICATION_OPTIONS} from '@taiga-ui/core';\n\n// ...\n\n@NgModule({\n  providers: [\n    {\n      provide: TUI_NOTIFICATION_OPTIONS,\n      useValue: {\n        ...TUI_NOTIFICATION_DEFAULT_OPTIONS,\n        autocloseTimeout: 7000,\n        label: ({$implicit}: any) => ($implicit === TuiNotification.Error ? 'Error' : 'Info'),\n        status: TuiNotification.Error,\n        hasIcon: false,\n        hasCloseButton: false,\n      },\n    },\n  ],\n  //  ...\n})\nexport class MyModule {}\n```\n"}}]);