var map = L.map('map').setView([34.065310, -118.4076], 11.5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

$('#map').fadeIn(1000)

let grad = L.icon({
    iconUrl: 'https://lh3.googleusercontent.com/pw/AM-JKLWW3XHKJevO0IxHATAgiE5zN-OeZFfB3Zw7F6cc2RDrK_DHURwue_Uptjm8R6xvH3EojC36rwv5iIFZ2gm74DyefGbZ-Rrizq6VEYBGQg12YZzwbZ0y4Enj2T_gHmGHVVXcFbCi8R1JZPfQanLHYDiZwA=s640-no?authuser=0',
    iconSize: [30,30]
});

let school = [
    {
        'id': 0,
        'title': 'Good Shepherd Catholic School',
        'lat': 34.065310,
        'lon': -118.407620,
        'text': 'I went to this school for kindergarten before transferring to Fairburn Elementary. It was my last time wearing a uniform for school.',
        'picture':'https://lh3.googleusercontent.com/pw/AM-JKLWVGbSn80gazS29NKjLB_fYg2J3gzDs-UZkmoX7glJ6PV5yLMQYfwdv7Ai1V3y1-hl-E7AhIp2rZE9Zq0qvf7cSXJBBzSSgrZ8NEQ8Gu_JomUTuyXrNcjXnJwBFb67bU44Wnb2WMWLbBvgZy2mEBpu9KA=w1418-h1080-no?authuser=0'
    },
    {
        'id': 1,
        'title': 'Fairburn Elementary',
        'lat': 34.058790,
        'lon': -118.431570,
        'text': 'I went to Fairburn Elmementary from grades 1st to 5th.',
        'picture': 'https://lh3.googleusercontent.com/pw/AM-JKLUt-dNQukwn-2Fztm5ArpUz-GBG_-3i9UZwkLFdKZCtNNTt6O5IA--MuoV8JzFKJK1qiC7mE2xyBo94dmQWavn5Z_V_GZViTpEZibMfhhKQmvyMuH1n7UgOLOStwtf0kOai2g4UZhxOhPiJt9qSTqcQ3g=w878-h1182-no?authuser=0'
    },
    {
        'id': 2,
        'title': 'Portola Middle School',
        'lat': 34.166012, 
        'lon': -118.542519,
        'text': 'I moved to the valley and attended Portola Middle School for 6th, 7th, and 8th grade.',
        'picture': 'https://lh3.googleusercontent.com/pw/AM-JKLVQRf0zN5XEemNQXnVKmG82LI-0TjDiMF4liasY8yqlF3eL4O42LJt7tOhd3PLnhbnxShw1XULAhG2GTgjwLjpqmFSUL9OI_tyJ0oAncmt1FyZz1oh0pegnE8NtAqQ4dHl4TmHDF2Z_GfK-Xz_K73UDjA=w682-h486-no?authuser=0'
    },
    {
        'id': 3,
        'title': 'North Hollywood High School',
        'lat': 34.166660, 
        'lon': -118.389473,
        'text': 'For high school, I was part of the Highly Gifted Magnet program in North Hollywood High School.',
        'picture': 'https://lh3.googleusercontent.com/pw/AM-JKLVP2Nd1PwvSDMRk9ikVdg8b_pyQDxlYqZKEU2ICPy_YOjYLrv4ovCaKst4vG2V-8WpINQip5uQAW9jOcrK7k1WVeeVlTkuPPu7qWpJqjWr4_pvE1jGDTJ_jS65XWvSzbXMzReuZpwfEjoMptE9HAF2BcQ=w884-h890-no?authuser=0'
    },
    {
        'id': 4,
        'title': 'UCLA',
        'lat': 34.0689, 
        'lon': -118.4452,
        'text': 'Where I am now',
        'picture': 'https://lh3.googleusercontent.com/pw/AM-JKLW3ilp2cLHNYaSkItaHxlTnruBRghGuT4OrRD7uF3J9tyUJr6lK7j5WMl_xOdWL8x-XLSZp6NXDHWJiGO4N7eqMHln9N0gMIG6foVIXTFji8EyBAOPKeB7XiFDk4rSpjVlW6fuIYEdpgp8-S2xXVXI3eA=w1080-h679-no?authuser=0'
    },

];

let house = L.icon({
    iconUrl: 'https://lh3.googleusercontent.com/pw/AM-JKLUyFcSXpF61H8sCRzxLCsF1pYfHiv2e9hhgpngA0CGXINn9ZZ2oXHVqHCB43-HlPeI44N2_zoU-4_W-kfULiWssGI2M83QwCFc3u-K7uaDwc3AGBPWA042CZ85usSKWtNP9KS3DwDHPnjjEPYAwjv2Pqw=s160-no?authuser=0',
    iconSize: [30,30]
});

let home = [
    {
        'id': 0,
        'title': 'Park La Brea',
        'lat': 34.0698,
        'lon': -118.3552,
        'text': 'I lived here between 2001 and 2002'
    },
    {
        'id': 1,
        'title': 'Melrose',
        'lat': 34.0862,
        'lon': -118.3078,
        'text': 'I lived here up until I switched schools to Fairburn.'
    },
    {
        'id': 2,
        'title': 'Westwood',
        'lat': 34.06260,
        'lon': -118.43231,
        'text': 'I lived here during my elementary school years.'
    },
    {
        'id': 3,
        'title': 'Studio City',
        'lat': 34.1396,
        'lon': -118.3871,
        'text': 'I lived here during both my middle school and high school years.'
    },
    {
        'id': 4,
        'title': 'Mid City',
        'lat': 34.0325,
        'lon': -118.3627,
        'text': 'This is where I currently live now.'
    },
];


// function to fly to a location by a given id number
function flyToIndex(location2){
	map.flyTo([school[location2].lat,school[location2].lon],15)
    
    // open the popup
	myMarkers.getLayers()[location2].openPopup()
}

function homeflyToIndex(location2){
	map.flyTo([home[location2].lat,home[location2].lon],15)
    
    // open the popup
	myMarkers2.getLayers()[location2].openPopup()
}

// before looping the data, create an empty FeatureGroup
let myMarkers = L.featureGroup();
let myMarkers2 = L.layerGroup();

// loop through data

school.forEach(function(item){
    let marker = L.marker([item.lat,item.lon], {
        title: item.title,
        icon: grad
    })
    
    .bindPopup(`<div><strong>${item.title}</strong><br><img class = 'center' style='height:200px;width:auto;horizontal-align:middle' src = ${item.picture}><br>${item.text}</div>`)

    myMarkers.addLayer(marker)
    
    $('.sidebar').append(`<div class="sidebar-item" onclick="flyToIndex(${item.id})">${item.title}</div>`)
});

home.forEach(function(item){
    let marker = L.marker([item.lat,item.lon], {
        title: item.title,
        icon: house
    })
    
    .bindPopup(`<div><strong>${item.title}</strong><br>${item.text}</div>`)

    myMarkers2.addLayer(marker)
    
    $('.sidebar').append(`<div class="sidebar-item2" onclick="homeflyToIndex(${item.id})">${item.title}</div>`)
});

// after loop, add the FeatureGroup to map
myMarkers.addTo(map)
myMarkers2.addTo(map)

// define layers
let layers = {
	"School": myMarkers,
    "Home": myMarkers2
}

// add layer control box
L.control.layers(null,layers).addTo(map)



