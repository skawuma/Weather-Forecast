package com.weather.forecast.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping(path = "/weather")
@CrossOrigin("*")
public interface WeatherRest {

    @GetMapping(path = "/getForecast/{latitude}/{longitude}")
    ResponseEntity<?> getForecast(@PathVariable("latitude") Double latitude, @PathVariable("longitude") Double longitude);

}
