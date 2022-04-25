// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 3;

// path to csv data
let path = "data/chipotle.csv";

// global variables
let markers = L.featureGroup();


// initialize
$( document ).ready(function() {
    createMap(lat,lon,zl);
    readCSV(path);
});

// create the map
function createMap(lat,lon,zl){
	map = L.map('map').setView([lat,lon], zl);

	L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
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
			
			// map the data
			mapCSV(data);

		}
	});
}

function flyToIndex(lat, lon){
	map.flyTo([lat,lon],7)
};

function mapCSV(data){
	
	// circle options
	let circleOptions = {
		url: "https://lh3.googleusercontent.com/pw/AM-JKLV1rS6Z45bWOg82sG2Q1R-NuLo_npMyhtDhIHpxg4ptZVOMWapEI1leZGm2rbUfaM5c2psajx1hnlhduuH-wYGUGAeVvoZODc3IYVed-0WxYPzoxkdlptq0IGjPrxB_FteAn0fc5nButy4_Tntk3mBixA=s1835-no?authuser=0",
		radius: 5,
		weight: 1,
		color: 'white',
		fillColor: 'red',
		fillOpacity: 1
	}

	// loop through each entry
	data.data.forEach(function(item,index){
		// create marker
		let marker = L.circleMarker([item.latitude,item.longitude],circleOptions)
		.on('mouseover', function(){
			this.bindPopup(`<h3>${item.state}</h3><br>${item.location}<br>${item.address}`).openPopup()
		})

		// add marker to featuregroup		
		markers.addLayer(marker)
	})

	// add featuregroup to map
	markers.addTo(map)

	// fit markers to map
	map.fitBounds(markers.getBounds())
}