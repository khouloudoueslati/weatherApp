import { Component, Input } from '@angular/core';
import { Weather } from 'apps/weather-app/src/app/models/weather.model';

@Component({
  selector: 'app-weather-city-card',
  templateUrl: './weather-city-card.component.html',
  styleUrls: ['./weather-city-card.component.scss']
})
export class WeatherCityCardComponent {
  @Input() cityWeather: Weather;

  constructor() { }
}
