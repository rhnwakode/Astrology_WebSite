package com.example.SpringBoot;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CitiesJsonObject {
	@JsonProperty("data")
private String[] data;
	public CitiesJsonObject() {
		super();
	}
	public String[] getData() {
		return data;
	}
	public void setData(String[] data) {
		this.data = data;
	}
	public CitiesJsonObject(String[] data) {
		super();
		this.data = data;
	}
	
	

}
