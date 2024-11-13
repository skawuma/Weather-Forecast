package com.weather.forecast.serviceImpl;

import com.fasterxml.jackson.databind.JsonNode;
import com.weather.forecast.service.WeatherService;
import com.weather.forecast.utility.ForecastUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class WeatherServiceImpl implements WeatherService {

    @Autowired
    private ForecastUtility forecastUtility;

    @Override
    public ResponseEntity<?> getForecast(Double latitude, Double longitude) {
        String url = String.format("https://api.weather.gov/points/%s,%s", latitude, longitude);
        JsonNode data = forecastUtility.fetchJsonFromApi(url);
        if (data == null || data.path("properties").isMissingNode())
        {
            return new ResponseEntity<>("Invalid latitude or longitude.",HttpStatus.BAD_REQUEST);
        }

        String office = data.path("properties").path("gridId").asText();
        int gridX = data.path("properties").path("gridX").asInt();
        int gridY = data.path("properties").path("gridY").asInt();

        String forecastUrl = String.format("https://api.weather.gov/gridpoints/%s/%d,%d/forecast", office, gridX, gridY);
        JsonNode forecastData = forecastUtility.fetchJsonFromApi(forecastUrl);

        return forecastData != null
                ? ResponseEntity.ok(forecastData)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


}
