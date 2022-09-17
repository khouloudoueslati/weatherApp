import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  public getWeatherByCityName(cityName: string): Observable<any> {
    return this.http.get(environment.apiBaseUrl, {
      headers: new HttpHeaders()
      .set(environment.APIKeyName, environment.APIKeyValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('aqi', 'no')
    });
  }
}