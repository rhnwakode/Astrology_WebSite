package com.example.SpringBoot;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
@JsonIgnoreProperties(ignoreUnknown =true)
@JsonDeserialize
public class name {
	
	@JsonProperty("country")
	private String country;
	


	
	

}
