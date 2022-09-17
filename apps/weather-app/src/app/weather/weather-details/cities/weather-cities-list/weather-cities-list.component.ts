import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'apps/weather-app/src/app/models/weather.model';
import { Subscription } from 'rxjs';
import { Location } from '../../../../models/location.model';
import { WeatherService } from '../../../weather.service';

@Component({
  selector: 'app-weather-cities-list',
  templateUrl: './weather-cities-list.component.html',
  styleUrls: ['./weather-cities-list.component.scss']
})
export class WeatherCitiesListComponent implements OnInit {
  public cities: Location[] = [];
  public weatherData: Weather[] = [];
  private subscriptions: Subscription[] = [];

  constructor(private weatherService: WeatherService) { }

  public ngOnInit(): void {
    this.subscriptions.push(this.weatherService.updateWeatherData$.subscribe((cityWeather: Weather) => {
      const exist = this.weatherData.findIndex(item => item.cityName == cityWeather.cityName)
      if (exist === -1) {
        this.weatherData.push(cityWeather);
      }
    }));
  }
}