package com.weather.forecast.utility;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ForecastUtility {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private ObjectMapper objectMapper;

    public JsonNode fetchJsonFromApi(String url) {
        try {
            ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
            if (response.getBody() == null) {
                System.out.println("No response body from API at URL: " + url);
                return null;
            }
            return objectMapper.readTree(response.getBody());
        } catch (Exception e) {
            System.err.println("Error occurred while fetching JSON from API: " + e.getMessage());
            e.printStackTrace();
            return null;
        }
    }
}
