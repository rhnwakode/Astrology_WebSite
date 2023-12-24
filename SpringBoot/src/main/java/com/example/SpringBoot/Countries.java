package com.example.SpringBoot;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonIgnoreProperties(ignoreUnknown =true)
@JsonDeserialize
public class Countries {
	


	




	public Countries() {
		super();
	}

	@JsonProperty("data")
	private name name[];


	public name[] getName() {
		return name;
	}






	public void setName(name[] name) {
		this.name = name;
	}






//	@Override
//	public String toString() {
//		return "Countries [name=" + name + "]";
//	}

		

	
	

}
