import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update tuiDialog options', () => {
    const migrateComponent = async (component: string): Promise<string> => {
        const {component: result} = await runMigration({
            component,
            collection,
        });

        return result;
    };

    it('replaces closeable with closable for TuiDialogService open options (class field inject)', async () => {
        const result = await migrateComponent(`
            import {Component, inject} from '@angular/core';
            import type {TuiDialogContext} from '@taiga-ui/core';
            import {TuiDialogService} from '@taiga-ui/core';
            import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
            import {BehaviorSubject} from 'rxjs';

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialogService = inject(TuiDialogService);
                private readonly loading$ = new BehaviorSubject<boolean>(false);

                showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
                    this.dialogService
                        .open(content, {
                            label: 'Test',
                            dismissible: this.loading$.pipe(map((loading) => !loading)),
                            closeable: this.loading$.pipe(map((loading) => !loading)),
                        })
                        .subscribe();
                }
            }
        `);

        const expected = `
            import {Component, inject} from '@angular/core';
            import type {TuiDialogContext} from '@taiga-ui/core';
            import {TuiDialogService} from '@taiga-ui/core';
            import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
            import {BehaviorSubject} from 'rxjs';

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialogService = inject(TuiDialogService);
                private readonly loading$ = new BehaviorSubject<boolean>(false);

                showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
                    this.dialogService
                        .open(content, {
                            label: 'Test',
                            dismissible: this.loading$.pipe(map((loading) => !loading)),
                            closable: this.loading$.pipe(map((loading) => !loading)),
                        })
                        .subscribe();
                }
            }
        `;

        expect(result).toEqual(expected);
    });

    it('replaces closeable with closable for direct inject(TuiDialogService).open(...) call', async () => {
        const result = await migrateComponent(`
            import {Component, inject} from '@angular/core';
            import {TuiDialogService} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                constructor() {
                    const closeable = true;

                    inject(TuiDialogService).open('content', {
                        closeable,
                    });
                }
            }
        `);

        const expected = `
            import {Component, inject} from '@angular/core';
            import {TuiDialogService} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                constructor() {
                    const closeable = true;

                    inject(TuiDialogService).open('content', {
                        closable: closeable,
                    });
                }
            }
        `;

        expect(result).toEqual(expected);
    });

    it('replaces closeable with closable when service stored in local variable', async () => {
        const result = await migrateComponent(`
            import {Component, inject, afterViewInit} from '@angular/core';
            import {TuiDialogService} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                constructor() {
                    const dialog = inject(TuiDialogService);

                    afterViewInit(() => {
                        dialog.open('content', {
                            closeable: false,
                            other: 1,
                        });
                    });
                }
            }
        `);

        const expected = `
            import {Component, inject, afterViewInit} from '@angular/core';
            import {TuiDialogService} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                constructor() {
                    const dialog = inject(TuiDialogService);

                    afterViewInit(() => {
                        dialog.open('content', {
                            closeable: false,
                            other: 1,
                        });
                    });
                }
            }
        `;

        expect(result).toEqual(expected);
    });

    it('replaces string literal key "closeable" with "closable"', async () => {
        const result = await migrateComponent(`
            import {Component, inject} from '@angular/core';
            import {TuiDialogService} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog = inject(TuiDialogService);

                open(): void {
                    this.dialog.open('content', {
                        "closeable": true,
                    });
                }
            }
        `);

        const expected = `
            import {Component, inject} from '@angular/core';
            import {TuiDialogService} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog = inject(TuiDialogService);

                open(): void {
                    this.dialog.open('content', {
                        "closable": true,
                    });
                }
            }
        `;

        expect(result).toEqual(expected);
    });

    it('does not change if there is no second argument', async () => {
        const result = await migrateComponent(`
            import {Component, inject} from '@angular/core';
            import {TuiDialogService} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog = inject(TuiDialogService);

                open(): void {
                    this.dialog.open('content');
                }
            }
        `);

        const expected = `
            import {Component, inject} from '@angular/core';
            import {TuiDialogService} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog = inject(TuiDialogService);

                open(): void {
                    this.dialog.open('content');
                }
            }
        `;

        expect(result).toEqual(expected);
    });

    it('does not change if second argument is not an object literal', async () => {
        const result = await migrateComponent(`
            import {Component, inject} from '@angular/core';
            import {TuiDialogService} from '@taiga-ui/core';

            const options = {
                closeable: true,
            };

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog = inject(TuiDialogService);

                open(): void {
                    this.dialog.open('content', options);
                }
            }
        `);

        const expected = `
            import {Component, inject} from '@angular/core';
            import {TuiDialogService} from '@taiga-ui/core';

            const options = {
                closeable: true,
            };

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog = inject(TuiDialogService);

                open(): void {
                    this.dialog.open('content', options);
                }
            }
        `;

        expect(result).toEqual(expected);
    });

    it('does not change closeable for non TuiDialogService receiver with open()', async () => {
        const result = await migrateComponent(`
            import {Component} from '@angular/core';

            class NotDialogService {
                open(_c: unknown, _o: unknown): void {}
            }

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialogService = new NotDialogService();

                open(): void {
                    this.dialogService.open('content', {
                        closeable: true,
                    });
                }
            }
        `);

        const expected = `
            import {Component} from '@angular/core';

            class NotDialogService {
                open(_c: unknown, _o: unknown): void {}
            }

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialogService = new NotDialogService();

                open(): void {
                    this.dialogService.open('content', {
                        closeable: true,
                    });
                }
            }
        `;

        expect(result).toEqual(expected);
    });

    it('does not change object properties named closeable outside dialog.open options', async () => {
        const result = await migrateComponent(`
            import {Component, inject} from '@angular/core';
            import {TuiDialogService} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog = inject(TuiDialogService);

                open(): void {
                    const x = {closeable: true};

                    this.dialog.open('content', {
                        closeable: false,
                    });
                }
            }
        `);

        const expected = `
            import {Component, inject} from '@angular/core';
            import {TuiDialogService} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog = inject(TuiDialogService);

                open(): void {
                    const x = {closeable: true};

                    this.dialog.open('content', {
                        closable: false,
                    });
                }
            }
        `;

        expect(result).toEqual(expected);
    });

    it('replaces closeable with closable for TuiAlertService.open call', async () => {
        const result = await migrateComponent(`
            import {Component, inject} from '@angular/core';
            import {TuiAlertService} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                constructor() {
                    inject(TuiAlertService).open('content', {
                        closeable: true,
                    });
                }
            }
        `);

        const expected = `import { TuiNotificationService } from "@taiga-ui/core";

            import {Component, inject} from '@angular/core';

            @Component({standalone: true})
            export class TestComponent {
                constructor() {
                    inject(TuiNotificationService).open('content', {
                        closable: true,
                    });
                }
            }
        `;

        expect(result).toEqual(expected);
    });

    it('replaces closeable with closable for TuiNotificationService.open call', async () => {
        const result = await migrateComponent(`
            import {Component, inject} from '@angular/core';
            import {TuiNotificationService} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                constructor() {
                    inject(TuiNotificationService).open('content', {
                        closeable: true,
                    });
                }
            }
        `);

        const expected = `
            import {Component, inject} from '@angular/core';
            import {TuiNotificationService} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                constructor() {
                    inject(TuiNotificationService).open('content', {
                        closable: true,
                    });
                }
            }
        `;

        expect(result).toEqual(expected);
    });

    it('replaces closeable with closable for TuiSheetDialogService.open call', async () => {
        const result = await migrateComponent(`
            import {Component, inject} from '@angular/core';
            import {TuiSheetDialogService} from '@taiga-ui/addon-mobile';

            @Component({standalone: true})
            export class TestComponent {
                constructor() {
                    inject(TuiSheetDialogService).open('content', {
                        closeable: true,
                    });
                }
            }
        `);

        const expected = `
            import {Component, inject} from '@angular/core';
            import {TuiSheetDialogService} from '@taiga-ui/addon-mobile';

            @Component({standalone: true})
            export class TestComponent {
                constructor() {
                    inject(TuiSheetDialogService).open('content', {
                        closable: true,
                    });
                }
            }
        `;

        expect(result).toEqual(expected);
    });

    it('replaces closeable with closable for tuiDialog call', async () => {
        const result = await migrateComponent(`
            import {Component, inject} from '@angular/core';
            import {tuiDialog} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog = tuiDialog('content', {
                    size: 'm',
                    closeable: true,
                    dismissible: true,
                });

                protected showDialog(): void {
                    this.dialog().subscribe();
                }
            }
        `);

        const expected = `
            import {Component, inject} from '@angular/core';
            import {tuiDialog} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog = tuiDialog('content', {
                    size: 'm',
                    closable: true,
                    dismissible: true,
                });

                protected showDialog(): void {
                    this.dialog().subscribe();
                }
            }
        `;

        expect(result).toEqual(expected);
    });

    afterEach(() => resetActiveProject());
});
