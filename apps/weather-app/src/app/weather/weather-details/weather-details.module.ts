import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DxButtonModule, DxTextBoxModule } from 'devextreme-angular';
import { WeatherCitiesListModule } from './cities/weather-cities-list/weather-cities-list.module';

import { WeatherDetailsComponent } from './weather-details.component';

@NgModule({
    declarations: [
        WeatherDetailsComponent
    ],
    imports: [
        FlexLayoutModule,
        DxTextBoxModule,
        DxButtonModule,
        WeatherCitiesListModule
    ],
    providers: [],
    bootstrap: [],
    exports: [
        WeatherDetailsComponent
    ],
})
export class WeatherDetailsModule { }
