(window.webpackJsonp=window.webpackJsonp||[]).push([[805],{zstx:function(e,n,i){"use strict";i.r(n),n.default="import {ChangeDetectorRef, Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDestroyService, watch} from '@taiga-ui/cdk';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {TuiFileLike} from '@taiga-ui/kit';\nimport {combineLatest, Observable, Subject, timer} from 'rxjs';\nimport {mapTo, startWith, switchMap, takeUntil} from 'rxjs/operators';\n\nclass RejectedFile {\n    constructor(readonly file: TuiFileLike, readonly reason: string) {}\n}\n\nfunction isRejectedFile(file: unknown): file is RejectedFile {\n    return file instanceof RejectedFile;\n}\n\nfunction getRemoved<T>(oldArray: readonly T[], newArray: readonly T[]): T | null {\n    const filtered = oldArray.filter(item => !newArray.includes(item));\n\n    return filtered.length === 1 ? filtered[0] : null;\n}\n\nfunction isNarrowed<T>(oldArray: readonly T[], newArray: readonly T[]): boolean {\n    return newArray.every(item => oldArray.includes(item));\n}\n\nfunction convertRejected({file, reason}: RejectedFile): TuiFileLike {\n    return {\n        name: file.name,\n        size: file.size,\n        type: file.type,\n        content: reason,\n    };\n}\n\n@Component({\n    selector: `tui-input-file-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    providers: [TuiDestroyService],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputFileExample3 {\n    private readonly files$ = new Subject<readonly TuiFileLike[]>();\n\n    files: readonly TuiFileLike[] = [\n        {\n            name: `Loading file.txt`,\n        },\n        {\n            name: `A file with a very very long title to check that it can be cut correctly.txt`,\n            src: `https://tools.ietf.org/html/rfc675`,\n        },\n    ];\n\n    loadingFiles: readonly TuiFileLike[] = [this.files[0]];\n    rejectedFiles: readonly TuiFileLike[] = [\n        {\n            name: `File with an error.txt`,\n            content: `Something went wrong this time`,\n        },\n    ];\n\n    constructor(\n        @Inject(TuiDestroyService) destroy$: TuiDestroyService,\n        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,\n        @Inject(TuiAlertService)\n        private readonly alertService: TuiAlertService,\n    ) {\n        this.files$\n            .pipe(\n                switchMap(files =>\n                    combineLatest(\n                        files.map(file => this.serverRequest(file).pipe(startWith(file))),\n                    ),\n                ),\n                watch(changeDetectorRef),\n                takeUntil(destroy$),\n            )\n            .subscribe(response => {\n                this.processResponse(response);\n            });\n    }\n\n    onModelChange(files: readonly TuiFileLike[]): void {\n        this.processNotification(files);\n\n        if (isNarrowed(this.files, files)) {\n            this.files = files;\n            this.loadingFiles = this.loadingFiles.filter(file => files.includes(file));\n\n            return;\n        }\n\n        this.files = files;\n        this.loadingFiles = this.files;\n        this.files$.next(this.files);\n    }\n\n    private processNotification(files: readonly TuiFileLike[]): void {\n        const removed = getRemoved(this.files, files);\n\n        if (removed) {\n            this.alertService.open(`\"${removed.name}\" was removed`).subscribe();\n        }\n    }\n\n    private processResponse(\n        files: ReadonlyArray<RejectedFile | TuiFileLike | null>,\n    ): void {\n        this.loadingFiles = this.loadingFiles.filter(file => files.includes(file));\n\n        const newRejectedFiles = files\n            .filter(isRejectedFile)\n            .filter(({file}) => this.files.includes(file));\n\n        if (newRejectedFiles.length === 0) {\n            return;\n        }\n\n        this.rejectedFiles = [\n            ...this.rejectedFiles,\n            ...newRejectedFiles.map(convertRejected),\n        ];\n        this.files = this.files.filter(file =>\n            newRejectedFiles.every(rejectedFile => rejectedFile.file !== file),\n        );\n    }\n\n    private serverRequest(file: TuiFileLike): Observable<RejectedFile | File | null> {\n        const delay = Math.round(Math.random() * 5000 + 500);\n        const result =\n            delay % 2\n                ? null\n                : new RejectedFile(file, `Server responded for odd number of time`);\n\n        return timer(delay).pipe(mapTo(result));\n    }\n}\n"}}]);