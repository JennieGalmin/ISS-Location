
let lat = document.getElementById("lat");
let long = document.getElementById("long");
let alt = document.getElementById("alt");
let vel = document.getElementById("vel");
//Hämtar coordinationsnamnen från html till script


 
async function ISSLocation(){
    let response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    let data = await response.json();
//Hämtar satellit api för att hämta positionen för satellit 2544.


lat.innerText = data.latitude;
long.innerText = data.longitude;
alt.innerText = data.altitude;
vel.innerText = data.velocity;
//Skriver över datan jag får från script till html.

return {lat:data.latitude, lng:data.longitude};
//Gör en return av datan som jag måste hämta med en ny funktion.
}


function initMap(){
let bettna = {lat: 58.540, lng:16.375};
let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: bettna
})
//Funktion för att hämta google map och jag hämtar det läge där jag vill att kartan ska vara på i default.

return map;
//Returnar map då jag vill hämta map i en annan funktion.
}
let map = initMap()
//Sparar initMap funktionen i en variabel som heter map.
function initMarker(map){
let marker = new google.maps.Marker({map:map});
//Hämtar en marker till kartan.
return marker;

}

let marker = initMarker(map)
//Sparar initMarker och map i en variabel somheter marker.


async function markerPosition(coords, marker){
    let newPosition = await coords;
    marker.getMap().setCenter(newPosition);
    marker.setPosition(newPosition);
}
//Funktion för att hämta coordinationerna och för att markern ska hamna där satelliten är.


markerPosition(ISSLocation(), marker);
//Hämtar funktionerna och marker.
setInterval( () => {
markerPosition(ISSLocation(), marker);
}, 10000)
//Sätter en intervall på att hämta positionen var 10e sekund och att kartan med marker följer med.

