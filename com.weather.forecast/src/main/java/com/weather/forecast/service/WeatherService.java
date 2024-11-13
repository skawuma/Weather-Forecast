package com.weather.forecast.service;

import org.springframework.http.ResponseEntity;

public interface WeatherService {

    ResponseEntity<?> getForecast(Double latitude, Double longitude);

}
