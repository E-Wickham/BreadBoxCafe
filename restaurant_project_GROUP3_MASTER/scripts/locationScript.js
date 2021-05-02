// on load func
window.onload = loadLocation;

// store the location of both bakeries
var bakeryLocationNorth = { lat: 43.734245, lng:  -79.610374 };
var bakeryLocationLake = { lat: 43.598050, lng:  -79.518060 };

// Initialize and add the map
function initMap(bakeryLocation) {
  // store the parameter
  const location = bakeryLocation;
  // The map, 
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: bakeryLocation,
  });
  // The marker, positioned at the location
  const marker = new google.maps.Marker({
    position: bakeryLocation,
    map: map,
  });
};


// on loading the page check whether the user was directed to the page 
// using which link
function loadLocation(){
    console.log(window.location.href);
    console.log(window.location.href.includes("north"));
    if(window.location.href.includes("north")){
        displayNorthBakery();
    } else {
        displayLakeshoreBakery();
    }
};

// display the map and address of Lakeshore
function displayLakeshoreBakery(){
    document.getElementById("locationNorth").style.display = "none";
    document.getElementById("locationLake").style.display = "block";
    initMap(bakeryLocationLake);
};

//display the map and address of North Bakery
function displayNorthBakery(){
    document.getElementById("locationNorth").style.display = "block";
    document.getElementById("locationLake").style.display = "none";
    initMap(bakeryLocationNorth);
};