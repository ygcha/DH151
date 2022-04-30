// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 3;
let path = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';
let csvdata;
let lastdate;
let markers = L.featureGroup();

// initialize
$( document ).ready(function() {
    createMap(lat,lon,zl);
	readCSV(path);
});

// create the map
function createMap(lat,lon,zl){
	map = L.map('map').setView([lat,lon], zl);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
}

// function to read csv data
function readCSV(path){
	Papa.parse(path, {
		header: true,
		download: true,
		complete: function(data) {
			console.log(data);
			// put the data in a global variable
			csvdata = data;

			// get the last date and put it in a global variable
			lastdate = csvdata.meta.fields[csvdata.meta.fields.length-1];

			// map the data for the given date
			mapCSV(lastdate);
		}
	});
}

// map function now requires a date
function mapCSV(date){

	// clear layers in case you are calling this function more than once
	markers.clearLayers();

	// loop through each entry
	csvdata.data.forEach(function(item,index){
		if(item.Lat != undefined){
			// circle options
			let circleOptions = {
				radius: getRadiusSize(item[date]),　// call a function to determine radius size
				weight: 1,
				color: 'white',
				fillColor: 'red',
				fillOpacity: 0.5
			}
			let marker = L.circleMarker([item.Lat,item.Long],circleOptions)
			.on('mouseover',function(){
				this.bindPopup(`${item['Country/Region']}<br>Total confirmed cases as of ${date}: ${item[date]}`).openPopup()
			}) // show data on hover
			markers.addLayer(marker)	
		}   
	});

	markers.addTo(map)
	map.fitBounds(markers.getBounds())

}

function getRadiusSize(value){

    // create empty array to store data
	let values = [];

	// add case counts for most recent date to the array
	csvdata.data.forEach(function(item,index){
		if(item[lastdate] != undefined){
			values.push(Number(item[lastdate]))
		}
	})
    
    // get the max case count for most recent date
	let max = Math.max(...values)
	
	// per pixel if 100 pixel is the max range
	perpixel = max/100;

    // return the pixel size for given value
	return value/perpixel
}
