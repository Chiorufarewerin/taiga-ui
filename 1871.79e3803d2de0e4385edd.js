(window.webpackJsonp=window.webpackJsonp||[]).push([[1871],{xqwW:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {defaultSort, TuiComparator} from '@taiga-ui/addon-table';\nimport {\n    isPresent,\n    toInt,\n    TUI_DEFAULT_MATCHER,\n    TuiDay,\n    tuiReplayedValueChangesFrom,\n} from '@taiga-ui/cdk';\nimport {TUI_ARROW} from '@taiga-ui/kit';\nimport {BehaviorSubject, combineLatest, Observable, timer} from 'rxjs';\nimport {\n    debounceTime,\n    filter,\n    map,\n    mapTo,\n    share,\n    startWith,\n    switchMap,\n} from 'rxjs/operators';\n\ninterface User {\n    readonly name: string;\n    readonly dob: TuiDay;\n}\n\nconst TODAY = TuiDay.currentLocal();\nconst FIRST = [\n    `John`,\n    `Jane`,\n    `Jack`,\n    `Jill`,\n    `James`,\n    `Joan`,\n    `Jim`,\n    `Julia`,\n    `Joe`,\n    `Julia`,\n];\n\nconst LAST = [\n    `Smith`,\n    `West`,\n    `Brown`,\n    `Jones`,\n    `Davis`,\n    `Miller`,\n    `Johnson`,\n    `Jackson`,\n    `Williams`,\n    `Wilson`,\n];\n\ntype Key = 'name' | 'dob' | 'age';\n\nconst DATA: readonly User[] = Array.from({length: 300}, () => ({\n    name: `${LAST[Math.floor(Math.random() * 10)]}, ${\n        FIRST[Math.floor(Math.random() * 10)]\n    }`,\n    dob: TODAY.append({day: -Math.floor(Math.random() * 4000) - 7500}),\n}));\nconst KEYS: Record<string, Key> = {\n    Name: `name`,\n    Age: `age`,\n    'Date of Birth': `dob`,\n};\n\n@Component({\n    selector: `tui-table-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTableExample4 {\n    private readonly size$ = new BehaviorSubject(10);\n    private readonly page$ = new BehaviorSubject(0);\n\n    readonly direction$ = new BehaviorSubject<-1 | 1>(-1);\n    readonly sorter$ = new BehaviorSubject<Key>(`name`);\n\n    readonly minAge = new FormControl(21);\n\n    readonly request$ = combineLatest([\n        this.sorter$,\n        this.direction$,\n        this.page$,\n        this.size$,\n        tuiReplayedValueChangesFrom<number>(this.minAge),\n    ]).pipe(\n        // zero time debounce for a case when both key and direction change\n        debounceTime(0),\n        switchMap(query => this.getData(...query).pipe(startWith(null))),\n        share(),\n    );\n\n    initial: readonly string[] = [`Name`, `Date of Birth`, `Age`];\n\n    enabled = this.initial;\n\n    columns = [`name`, `dob`, `age`];\n\n    search = ``;\n\n    readonly arrow = TUI_ARROW;\n\n    readonly loading$ = this.request$.pipe(map(value => !value));\n\n    readonly total$ = this.request$.pipe(\n        filter(isPresent),\n        map(({length}) => length),\n        startWith(1),\n    );\n\n    readonly data$: Observable<readonly User[]> = this.request$.pipe(\n        filter(isPresent),\n        map(users => users.filter(isPresent)),\n        startWith([]),\n    );\n\n    onEnabled(enabled: readonly string[]): void {\n        this.enabled = enabled;\n        this.columns = this.initial\n            .filter(column => enabled.includes(column))\n            .map(column => KEYS[column]);\n    }\n\n    onDirection(direction: -1 | 1): void {\n        this.direction$.next(direction);\n    }\n\n    onSize(size: number): void {\n        this.size$.next(size);\n    }\n\n    onPage(page: number): void {\n        this.page$.next(page);\n    }\n\n    isMatch(value: unknown): boolean {\n        return !!this.search && TUI_DEFAULT_MATCHER(value, this.search);\n    }\n\n    getAge(user: User): number {\n        return getAge(user);\n    }\n\n    private getData(\n        key: 'name' | 'dob' | 'age',\n        direction: -1 | 1,\n        page: number,\n        size: number,\n        minAge: number,\n    ): Observable<ReadonlyArray<User | null>> {\n        console.info(`Making a request`);\n\n        const start = page * size;\n        const end = start + size;\n        const result = [...DATA]\n            .sort(sortBy(key, direction))\n            .filter(user => getAge(user) >= minAge)\n            .map((user, index) => (index >= start && index < end ? user : null));\n\n        // Imitating server response\n        return timer(3000).pipe(mapTo(result));\n    }\n}\n\nfunction sortBy(key: 'name' | 'dob' | 'age', direction: -1 | 1): TuiComparator<User> {\n    return (a, b) =>\n        key === `age`\n            ? direction * defaultSort(getAge(a), getAge(b))\n            : direction * defaultSort(a[key], b[key]);\n}\n\nfunction getAge({dob}: User): number {\n    const years = TODAY.year - dob.year;\n    const months = TODAY.month - dob.month;\n    const days = TODAY.day - dob.day;\n    const offset = toInt(months > 0 || (!months && days > 9));\n\n    return years + offset;\n}\n"}}]);