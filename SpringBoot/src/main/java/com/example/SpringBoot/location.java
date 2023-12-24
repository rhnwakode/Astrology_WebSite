package com.example.SpringBoot;

import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jackson.JsonObjectSerializer;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.type.CollectionType;

@RestController
@JsonDeserialize
public class location {
	
	private String url="https://countriesnow.space/api/v0.1/countries";
	private String state="https://countriesnow.space/api/v0.1/countries/states/q?country=";
	ResponseEntity<String> ans;
	@Autowired
	private RestTemplate restemplate;
	@Autowired
	private ObjectMapper mp;
	
	private String city="mumbai";
	private String State="maharashtra";
	private String country="India";
	private String street="malad";

	@GetMapping("/getLocations")
	public ResponseEntity<Countries> location() throws IOException
	{
		ResponseEntity<String> m=	restemplate.getForEntity(url, String.class);
mp.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
String k=m.getBody();
	Countries mk= mp.readValue(k.getBytes(), new TypeReference<Countries>() {
	});
	//});
	//	List<String> mj=mp.readValue(k, List.class);

		// CollectionType listType = mp.getTypeFactory().constructCollectionType(List.class, Countries.class);
		  //  List<Countries> ts = mp.readValue(k, listType);


		return new ResponseEntity<>(mk,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/getStates/{val}")
	public ResponseEntity<States>  getstates(@PathVariable String val) throws StreamReadException, DatabindException, IOException 
	{

		ResponseEntity<String> m=	restemplate.getForEntity(state+val, String.class);
		
		mp.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		String k=m.getBody();
			States mk= mp.readValue(k.getBytes(), new TypeReference<States>() {
			});
			return new ResponseEntity<>(mk,HttpStatus.ACCEPTED);
		

	
}
	@GetMapping("/getlatLong")
	public ResponseEntity<LatLongForUser[]> getLatLong() throws StreamReadException, DatabindException, IOException
	{
		String latLong="https://nominatim.openstreetmap.org/search?format=json&limit=1&state="+State+"&city="+city+"&country="+country+"&street="+street;
		ResponseEntity<String> m=	restemplate.getForEntity(latLong, String.class);
		String k=m.getBody();
		mp.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		LatLongForUser mk[]= mp.readValue(k.getBytes(), new TypeReference<LatLongForUser[]>() {});

		return new ResponseEntity<>(mk,HttpStatus.ACCEPTED);
	}
	@GetMapping("/getCities")
	public CitiesJsonObject getcities() throws StreamReadException, DatabindException, IOException
	{
		String url="https://countriesnow.space/api/v0.1/countries/state/cities/q?country="+country+"&state="+State;	
		ResponseEntity<String> m=	restemplate.getForEntity(url, String.class);
		mp.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		CitiesJsonObject j=mp.readValue(m.getBody().getBytes(), new TypeReference<CitiesJsonObject>() {});
		return j;
	}
}
