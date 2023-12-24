package com.example.SpringBoot;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
@JsonIgnoreProperties(ignoreUnknown =true)
@JsonDeserialize
public class LatLongForUser {
	@JsonProperty("lat")
	private String lat;
	@JsonProperty("lon")
	private String lon;
	public LatLongForUser(String lat, String lon) {
		super();
		this.lat = lat;
		this.lon = lon;
	}
	public String getLat() {
		return lat;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	public String getLon() {
		return lon;
	}
	public void setLon(String lon) {
		this.lon = lon;
	}
	public LatLongForUser() {
		super();
	}
	
	

}
