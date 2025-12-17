// ++++++++ Choix de cartes et Arbres ++++++++
var CarteGroup = {
    "<b>OSM.fr Carte</b>": carte01,
    "<b>Google Terrain</b>": carte02,
    "<b>Google Streets</b>": carte03,
    "<b>Google Satellite</b>": carte04,
    "<b>Google Satellite-Streets</b>": carte05,
    "<b>Google Terrain-Cycle</b>": carte06,
    "<b>Google Streets-Cycle</b>": carte07,
    "<b>Google Traffic</b>": carte08,
};


var GroupTree = {
    "<img src='src/images/Tree1030.png' width='20px'/><b>Arbres gérés par Schaerbeek</b></br>": GroupMarkersTrees1030,
    "<img src='src/images/NewTree.png' width='20px'/><b>Arbres Cimetiere Schaerbeek</b></br>": GroupMarkersTrees1030_Cimetiere,
    "<img src='src/images/NewTree.png' width='20px'/><b>Arbres à enregistrer</b></br>": GroupMarkersTrees1030_NEW,
    // "<img src='src/images/AllTrees1030.png' width='20px'/><b>Tous les arbres</b></br>": GroupMarkersClustersALL1030,
    "<img src='src/images/AllTrees1030.png' width='20px'/><b>Tous les arbres</b></br>": GroupMarkersTrees1030_ALL,
};

var LControl01 = L.control.layers(CarteGroup).addTo(carte);
var LControl02 = L.control.layers(GroupTree).addTo(carte);
// ++++++++ Choix de cartes et Arbres ++++++++

// +++++++ Revient a la position initial ++++++++
L.easyButton('<img src="src/images/home.png" width="26" height="26" >', function() {
    carte.setView([50.86070401717095, 4.3830651582691456], 13);
    layerGroup.clearLayers();
}).addTo(carte);

// +++++++ Géolocalisation ++++++++
function onLocationFound(e) {
    var radius = e.accuracy / 2;
    var location = e.latlng
    L.marker(location).addTo(carte)
    L.circle(location, radius).addTo(carte);
}

function onLocationError(e) {
    alert(e.message);
}

function getLocationLeafvar() {
    carte.on('locationfound', onLocationFound);
    carte.on('locationerror', onLocationError);
    carte.locate({ setView: true, maxZoom: 15 });
}

L.easyButton('<img src="src/images/gps-position.png" width="26" height="26" >', function() {
    getLocationLeafvar()
}).addTo(carte);

// +++++++  MousePosition Maps ++++++++
var mousePoistion = L.geoportalControl.MousePosition({
    position: 'bottomright',
    collapsed: true,
    units: [],
}).addTo(carte);

// +++++++ Esri Leafvar Geocoder ++++++++
var searchControl = L.esri.Geocoding.geosearch({
    position: 'topleft',
    zoomToResult: true,
    useMapBounds: true,
    providers: [L.esri.Geocoding.arcgisOnlineProvider()],
    collapseAfterResult: true,
    expanded: false,
    title: 'Recherche d`emplacement',
    placeholder: 'SVP, Entrez une adresse...'
}).addTo(carte);

var geocodeService = L.esri.Geocoding.geocodeService({});
var markerReal
var layerGroup = L.layerGroup().addTo(carte);
carte.on('click', function(e) {

    var positionMarker = e.latlng
    ClearMarkerData()
        //addMarker(positionMarker)

    geocodeService.reverse().latlng(e.latlng).run(function(error, result) {
        if (error) {
            return;
        }
        //var emplacement = convertToAddress(e.latlng);
        var lngLatString = `${Math.round(result.latlng.lat * 100000) / 100000}, ${Math.round(result.latlng.lng * 100000) / 100000}`;
        layerGroup.clearLayers();
        marker = L.marker(result.latlng)
            .addTo(layerGroup) //.addTo(carte) l'utilisation de vette option permet au marqueur de rester sur la carte
            .bindPopup(`<dt>${lngLatString}</dt>` + `<dt>${result.address.LongLabel}</dt>`) // adresse avec les coordonnées gps 
            //.bindPopup(result.address.Match_addr) // adresse sans les coordonnées gps 
            //.bindPopup(result.address.LongLabel) // version plus longue de l'adresse Match_addr contenant plus d'informations administratives
            //.bindPopup(result.address.ShortLabel) // version abrégée de l'adresse Match_addr
            .openPopup();

        //document.querySelector("#LatitudeArb").value = result.latlng.lat
        //document.querySelector("#LongitudeArb").value = result.latlng.lng
        document.querySelector("#AdresseArb").value = result.address.LongLabel
    });
});

// +++++++ Javascript Functions ++++++++
function ClearMarkerData() {
    layerGroup.clearLayers();
};

function ClearMarkerData_ORIGINAL() {
    layerGroup.clearLayers();

    document.querySelector("#NumidArb").value = ""
    document.querySelector("#EspeceArb").value = ""
    document.querySelector("#StatutArb").value = ""
    document.querySelector("#TypeLieuPlantaArb").value = ""
    document.querySelector("#DangerArb").value = ""
    document.querySelector("#DatePlantArb").value = ""
    document.querySelector("#LatitudeArb").value = ""
    document.querySelector("#LongitudeArb").value = ""
    document.querySelector("#AdresseArb").value = ""
    document.querySelector("#LieuPlantaArb").value = ""
    document.querySelector("#TypeEnvirArb").value = ""
    document.querySelector("#TypeDistrArb").value = ""
    document.querySelector("#CirconfArb").value = ""
    document.querySelector("#HauterArb").value = ""
    document.querySelector("#MultiTroncArb").value = ""
    document.querySelector("#DiamCourArb").value = ""
    document.querySelector("#StructureArb").value = ""
        //document.querySelector("#ImageArb").value 	=""
    document.querySelector("#CommentairesArb").value  = ""
};

var TreeIconNEW = L.icon({
    iconUrl: 'src/images/NewTree_00.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [-5, 5]
});

function addMarker(positionMarker) {
    // On verifie si un marqueur existence
    if (markerReal != undefined) {
        carte.removeLayer(markerReal)
    }
    markerReal = L.marker(
        positionMarker, { icon: TreeIconNEW }
    )
    document.querySelector("#LatitudeArb").value = positionMarker.lat;
    document.querySelector("#LongitudeArb").value = positionMarker.lng;

    markerReal.addTo(carte)
}