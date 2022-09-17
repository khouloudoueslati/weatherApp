import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WeatherCityCardComponent } from './weather-city-card.component';


@NgModule({
    declarations: [
        WeatherCityCardComponent
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
    bootstrap: [],
    exports: [
        WeatherCityCardComponent
    ],
})
export class WeatherCityCardModule { }
