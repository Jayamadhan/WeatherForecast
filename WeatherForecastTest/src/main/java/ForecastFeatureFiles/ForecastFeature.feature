Feature: Verification of daily and hourly forecast of given city
Description: This feature will check 5 day weather forecast of given city then checks 3 hourly forecast 
Description: Parameter "day" refers 0->current day 1-tomorrow 2->the day after tomorrow
@Regression
Scenario Outline: Checks 5 day weather forecast of given city
Given User is on home page
When User enters "<cityname>" and clicks search button
Then User gets relevent city with country code
When User clicks required city
Then User gets five day weather forecast of given city

Examples:
| cityname |
| Perth |

@Regression
Scenario Outline: Checks 5 day weather forecast of given city
Given User is on home page
When User enters "<cityname>" and clicks search button
Then User gets relevent city with country code
When User clicks required city
When User clicks hourly status
Then User gets hourly forecast for "<day>" 
When User clicks hourly status
Then Hourly forecast is hidden

Examples:
| cityname | day |
| Perth | 0 |

@Sanity
Scenario Outline: Checks 5 day weather forecast of given city
Given User is on home page
When User enters "<cityname>" and clicks search button
Then User gets relevent city with country code
When User clicks required city
Then User gets five day weather forecast of given city
Then Forecast for a "<day>"contains most dominant condition most dominant wind speed rainfall and minimum maximum temparature with rounded value

Examples:
| cityname | day |
| Perth | 0 |

