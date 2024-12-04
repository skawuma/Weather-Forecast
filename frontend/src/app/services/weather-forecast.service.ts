import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  url = environment.apiUrl;
  dataElement = document.getElementById("data") as HTMLElement;
  Latitude :any;
  Longitude:any;
  constructor(private httpClient: HttpClient) { }

  getWeatherForecast(latitude:number,longitude:number) {
    return this.httpClient.get(this.url + `/weather/getForecast/${latitude}/${longitude}`);
  }

  // Function to get the latitude and longitude data

getWeatherForecast1() {
  return this.httpClient.get(this.url + `/weather/getForecast/${this.getCurrentLatitude()}/${this.getCurrentLongitude()}`);
}



 getCurrentLatitude(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        this.Latitude = position.coords.latitude;
       return this.Latitude
         
        // You can do whatever you want with the latitude here
      },
      (error: GeolocationPositionError) => {
        console.error("Error getting geolocation:", error);
      }
    );
    
    return this.Latitude
    
    
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
  console.log(this.Latitude)
  return this.Latitude
}
 getCurrentLongitude() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
         this.Longitude = position.coords.longitude;
        return this.Longitude;
      },
      (error: GeolocationPositionError) => {
        console.error("Error getting geolocation:", error);
        // Return null in case of error
      }
    );
    return this.Longitude;
 
  } else {
    console.error("Geolocation is not supported by this browser.");
    

}
console.log(this.Longitude);
return this.Longitude;

 }









}
