package com.example.SpringBoot;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
@JsonIgnoreProperties(ignoreUnknown =true)
@JsonDeserialize
public class data {
	@JsonProperty("states")
	private state states[];

	public state[] getStates() {
		return states;
	}

	public void setStates(state[] states) {
		this.states = states;
	}

	public data(state[] states) {
		super();
		this.states = states;
	}

	public data() {
		super();
	}
	

}
