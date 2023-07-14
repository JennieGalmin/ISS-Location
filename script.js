
let lat = document.getElementById("lat");
let long = document.getElementById("long");
let alt = document.getElementById("alt");
let vel = document.getElementById("vel");



// fetch url for satiellite 25544 
async function ISSLocation(){
    let response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    let data = await response.json();
    console.log(data);

//Getting the data to HTML
lat.innerText = data.latitude;
long.innerText = data.longitude;
alt.innerText = data.altitude;
vel.innerText = data.velocity;
}

ISSLocation();

//API for google map

let map;

async function initMap(){
let bettna = {lat: 58.540, lng:16.375};
map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: bettna,
   

});

let marker = new google.maps.Marker({
    map:map,
    position: bettna,
    title: "bettna"
});
}
/*let map = new google.maps.Map(
    document.getElementById("map"), {zoom:  4, center:bettna}
)
let marker = new google.maps.Marker({position:bettna, map:map})
};*/

initMap()