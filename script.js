// fetch url for 
async function ISSLocation(){
    let response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    let data = await response.json();


    console.log(data);
}

ISSLocation();

