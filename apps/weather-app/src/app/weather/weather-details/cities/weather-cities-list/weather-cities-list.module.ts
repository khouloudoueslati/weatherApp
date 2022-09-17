import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WeatherCityCardModule } from '../weather-city-card/weather-city-card.module';
import { WeatherCitiesListComponent } from './weather-cities-list.component';


@NgModule({
    declarations: [
        WeatherCitiesListComponent
    ],
    imports: [
        CommonModule,
        WeatherCityCardModule,
    ],
    providers: [],
    bootstrap: [],
    exports: [
        WeatherCitiesListComponent
    ],
})
export class WeatherCitiesListModule { }
