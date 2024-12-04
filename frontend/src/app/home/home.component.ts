import { Component } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnachbarService } from '../services/snachbar.service';
import { ThemeService } from '../services/theme.service';
import { WeatherForecastService } from '../services/weather-forecast.service';
import { GlobalConstants } from '../shared/global-constants';
import { from } from 'rxjs'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns: string[] = ['icon','name','startTime','endTime','isDaytime','temperature','temperatureUnit','windSpeed','windDirection','shortForecast','detailedForecast'];
  dataSource: any;
  responseMessage: any;
  periods: any;
  latitude:any;
  longitude:any;

  constructor(public themeService: ThemeService,
    private snachbarService: SnachbarService,
    private ngxService: NgxUiLoaderService,
    private weatherForecastService:WeatherForecastService) {
  }

  changeTheme(color: any) {
    this.themeService.setTheme(color);
  }
  


  handleClick() {
    this.ngxService.start();
    this.weatherForecastService.getWeatherForecast(this.latitude,this.longitude).subscribe((response: any) => {
      this.periods = response?.properties?.periods;
      console.log(this.periods);
      this.dataSource = this.periods;
      this.ngxService.stop();
    }, (error: any) => {
      this.ngxService.stop();
      console.log(error?.error);
      if (error?.error  && typeof error.error === 'string') {
        this.responseMessage = error?.error;
      }
      else
        this.responseMessage = GlobalConstants.genericError;
      this.snachbarService.openSnackBar(this.responseMessage);
    })
  }
  handleClick1() {
    this.ngxService.start();
    
    this.weatherForecastService.getWeatherForecast1().subscribe((response: any) => {
      console.log (response);
      this.periods = response?.properties?.periods;
      console.log(this.periods);
      this.dataSource = this.periods;
      this.ngxService.stop();
    }, (error: any) => {
      this.ngxService.stop();
      console.log(error?.error);
      if (error?.error  && typeof error.error === 'string') {
        this.responseMessage = error?.error;
      }
      else
        this.responseMessage = GlobalConstants.genericError;
      this.snachbarService.openSnackBar(this.responseMessage);
    })
  }



  
  
 
}
