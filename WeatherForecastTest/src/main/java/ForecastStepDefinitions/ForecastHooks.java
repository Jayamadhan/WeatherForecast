package ForecastStepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class ForecastHooks 
{
	@Before(order=0)
	public void executionStarts()
	{
		System.out.println("Execution starts for the scenario");
	}
	
	@After(order=0)
	public void executionEnds()
	{
		System.out.println("Execution ends for the scenario");
	}

}
