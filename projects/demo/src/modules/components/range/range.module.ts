import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiLinkDirective,
    TuiNotificationComponent,
    TuiSurfaceDirective,
    TuiSvgComponent,
} from '@taiga-ui/core';
import {TuiRadioListComponent, TuiRangeComponent} from '@taiga-ui/kit';
import {TuiCardLargeDirective} from '@taiga-ui/layout';

import {TuiRangeExample1} from './examples/1';
import {TuiRangeExample2} from './examples/2';
import {TuiRangeExample3} from './examples/3';
import {TuiRangeExample4} from './examples/4';
import {ExampleTuiRangeComponent} from './range.component';

@NgModule({
    imports: [
        TuiRadioListComponent,
        TuiRangeComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiLinkDirective,
        TuiAddonDoc,
        TuiNotificationComponent,
        TuiSvgComponent,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiRangeComponent)),
        TuiCardLargeDirective,
        TuiSurfaceDirective,
    ],
    declarations: [
        ExampleTuiRangeComponent,
        TuiRangeExample1,
        TuiRangeExample2,
        TuiRangeExample3,
        TuiRangeExample4,
    ],
    exports: [ExampleTuiRangeComponent],
})
export class ExampleTuiRangeModule {}
