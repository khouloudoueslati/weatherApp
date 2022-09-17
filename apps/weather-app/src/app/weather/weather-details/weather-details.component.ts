import { Component } from '@angular/core';
import { Location } from '../../models/location.model';
import { Status, StatusSVG, Weather } from '../../models/weather.model';
import { DataService } from '../../services/data.service';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent {
  public city: Location = new Location(null);
  public cityWeather: Weather = new Weather(null);

  constructor(private dataService: DataService, private weatherService: WeatherService) { }

  public addNewCity() {
    this.dataService.getWeatherByCityName(this.city.name).subscribe(data => {
      this.cityWeather.cityName = data.location.name;
      this.cityWeather.tempC = data.current.temp_c;
      this.cityWeather.status = Status[data.current.condition.text] ? Status[data.current.condition.text] : data.current.condition.text;
      this.cityWeather.icon = StatusSVG[data.current.condition.icon] ? StatusSVG[data.current.condition.icon] : data.current.condition.icon;
      this.weatherService.updateListData(this.cityWeather);
    }, error => {
      console.error(error);
    }, () => {
      this.city = new Location(null);
      this.cityWeather = new Weather(null);
    });
  }
}