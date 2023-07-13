let lat = document.getElementById("lat");
let long = document.getElementById("long");
let alt = document.getElementById("alt");
let vel = document.getElementById("vel");


// fetch url for satiellite 25544 
async function ISSLocation(){
    let response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    let data = await response.json();
    console.log(data);

lat.innerText = data.latitude;
long.innerText = data.longitude;
alt.innerText = data.altitude;
vel.innerText = data.velocity;
}

ISSLocation();



