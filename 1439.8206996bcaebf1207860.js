(window.webpackJsonp=window.webpackJsonp||[]).push([[1439],{qHBn:function(n,i,o){"use strict";o.r(i),i.default="```ts\nimport {ToggleOptions, TUI_TOGGLE_DEFAULT_OPTIONS, TUI_TOGGLE_OPTIONS} from '@taiga-ui/kit';\n\n// ...\nconst options: Partial<ToggleOptions> = {\n  icons: {\n    toggleOff: ({$implicit}) => ($implicit === 'm' ? 'tuiIconChevronRight' : 'tuiIconChevronRightLarge'),\n    toggleOn: ({$implicit}) => ($implicit === 'm' ? 'tuiIconChevronLeft' : 'tuiIconChevronLeftLarge'),\n  },\n};\n\n@NgModule({\n  providers: [\n    {\n      provide: TUI_TOGGLE_OPTIONS,\n      useValue: {\n        ...TUI_TOGGLE_DEFAULT_OPTIONS,\n        ...options,\n      },\n    },\n  ],\n})\nexport class MyModule {}\n```\n"}}]);