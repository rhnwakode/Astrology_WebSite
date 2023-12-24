package com.example.SpringBoot;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
@JsonIgnoreProperties(ignoreUnknown =true)
@JsonDeserialize
public class States {
	@JsonProperty("data")
	private data data;

	public data getData() {
		return data;
	}

	public void setData(data data) {
		this.data = data;
	}

	public States(com.example.SpringBoot.data data) {
		super();
		this.data = data;
	}

	public States() {
		super();
	}

	

}
