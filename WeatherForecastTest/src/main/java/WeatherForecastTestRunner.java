import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\Jayamadhan\\Desktop\\WeatherForecastTestAutomation\\WeatherForecastTest\\src\\main\\java\\ForecastFeatureFiles",
				 glue= {"ForecastStepDefinitions"},
				 dryRun=false,
				 tags= {"@Regression"},
				 format= {"pretty","html:C:\\Users\\Jayamadhan\\Desktop\\WeatherForecastTestAutomation\\WeatherForecastTest\\ForeCast Run Reports"},
				 monochrome=true,
				 strict=false)
public class WeatherForecastTestRunner {

}
