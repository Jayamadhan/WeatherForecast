$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ForecastFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Verification of daily and hourly forecast of given city",
  "description": "Description: This feature will check 5 day weather forecast of given city then checks 3 hourly forecast",
  "id": "verification-of-daily-and-hourly-forecast-of-given-city",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Checks 5 day weather forecast of given city",
  "description": "",
  "id": "verification-of-daily-and-hourly-forecast-of-given-city;checks-5-day-weather-forecast-of-given-city",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User enters \"\u003ccityname\u003e\" and clicks search button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User gets relevent city with country code",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User clicks required city",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User gets five day weather forecast of given city",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Forecast for a \"\u003cday\u003e\"contains most dominant condition most dominant wind speed rainfall and minimum maximum temparature with rounded value",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "verification-of-daily-and-hourly-forecast-of-given-city;checks-5-day-weather-forecast-of-given-city;",
  "rows": [
    {
      "cells": [
        "cityname",
        "day"
      ],
      "line": 40,
      "id": "verification-of-daily-and-hourly-forecast-of-given-city;checks-5-day-weather-forecast-of-given-city;;1"
    },
    {
      "cells": [
        "Perth",
        "0"
      ],
      "line": 41,
      "id": "verification-of-daily-and-hourly-forecast-of-given-city;checks-5-day-weather-forecast-of-given-city;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 336714,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Checks 5 day weather forecast of given city",
  "description": "",
  "id": "verification-of-daily-and-hourly-forecast-of-given-city;checks-5-day-weather-forecast-of-given-city;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User enters \"Perth\" and clicks search button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User gets relevent city with country code",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User clicks required city",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User gets five day weather forecast of given city",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Forecast for a \"0\"contains most dominant condition most dominant wind speed rainfall and minimum maximum temparature with rounded value",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ForecastFeatureStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 36319379909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Perth",
      "offset": 13
    }
  ],
  "location": "ForecastFeatureStepDefinition.user_enters_cityName_and_clicks_search_button(String)"
});
formatter.result({
  "duration": 14935816752,
  "status": "passed"
});
formatter.match({
  "location": "ForecastFeatureStepDefinition.verifyCitywithCountryCode()"
});
formatter.result({
  "duration": 1307471769,
  "status": "passed"
});
formatter.match({
  "location": "ForecastFeatureStepDefinition.selectCitybyCountry()"
});
formatter.result({
  "duration": 32890418026,
  "status": "passed"
});
formatter.match({
  "location": "ForecastFeatureStepDefinition.user_gets_day_weather_forecast_of_given_city()"
});
formatter.result({
  "duration": 1602599998,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 2327221433,
  "status": "passed"
});
formatter.after({
  "duration": 133027,
  "status": "passed"
});
});