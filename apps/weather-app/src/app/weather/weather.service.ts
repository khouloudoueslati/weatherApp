import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Weather } from '../models/weather.model';

@Injectable()
export class WeatherService {
  private weatherSubject = new Subject<Weather>();
  public updateWeatherData$ = this.weatherSubject.asObservable();

  constructor() { }

  public updateListData(data: any) {
    this.weatherSubject.next(data);
  }
}