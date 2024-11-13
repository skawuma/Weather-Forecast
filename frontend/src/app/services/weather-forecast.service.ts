import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getWeatherForecast(latitude:number,longitude:number) {
    return this.httpClient.get(this.url + `/weather/getForecast/${latitude}/${longitude}`);
  }
}
