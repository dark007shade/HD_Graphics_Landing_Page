//var mymap = L.map('mapid').setView([47.397949, 8.451159], 17);

var latlng = L.latLng(47.397949, 8.451159);

var mymap = L.map('mapid', {
    center: latlng,
    zoom: 18,
    dragging: false,
    keyboard: false,
    closePopupOnClick : false,
    zoomControl : false,
    doubleClickZoom : false,
    scrollWheelZoom: false
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGFyazAwN3NoYWRlIiwiYSI6ImNqOHZueG85aDB6NjEyeHBleGF3NjJ4MWMifQ.wi3m4fPP4PsJ2tdiH_xVhg', {
/*    minZoom: 17,
    maxZoom: 17,*/
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

L.marker(latlng, {
    draggable: false
    
}).addTo(mymap)
    .bindPopup("<b>HD Graphics</b><br />Zürcherstrasse 20<br/>8952 Schlieren<br/>Switzerland").openPopup();

/*L.circle([51.508, -0.11], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(mymap).bindPopup("I am a circle.");*/

/*

var popup = L.popup();
*/

/*function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}*/

//mymap.on('click', onMapClick);