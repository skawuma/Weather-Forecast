package com.weather.forecast.restImpl;

import com.weather.forecast.rest.WeatherRest;
import com.weather.forecast.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeatherRestImpl implements WeatherRest {

    @Autowired
    WeatherService weatherService;

    @Override
    public ResponseEntity<?> getForecast(Double latitude, Double longitude) {
        return weatherService.getForecast(latitude,longitude);
    }
}
