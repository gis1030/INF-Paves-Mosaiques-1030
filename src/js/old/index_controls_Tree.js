// ++++++++ Choix de cartes et Arbres ++++++++
var CarteGroup = {
	"<b>UrbIS.be Carte</b>": carte00,
    "<b>OSM.fr Carte</b>": carte01,
    "<b>Google Terrain</b>": carte02,
    "<b>Google Satellite-Streets</b>": carte05,
    "<b>Google Satellite</b>": carte04,
    "<b>Google Streets</b>": carte03,
    "<b>Google Terrain-Cycle</b>": carte06,
    "<b>Google Streets-Cycle</b>": carte07,
    "<b>Google Traffic</b>": carte08,
};

var GroupTree = {
    "<img src='src/images/RemarkableTree.png' width='20px'/><b>Arbres remarquables</b></br>": GroupMarkersRemarkableTrees1030,
    "<img src='src/images/AlignementTree.png' width='20px'/><b>Arbres d'alignement</b></br>": GroupMarkersAlignmentTrees1030,
    //"<img src='src/images/AllTrees1030.png' width='20px'/><b>Tous les arbres</b></br>": GroupMarkersALL,
};

var GroupTree1030 = {
    "<img src='src/images/Tree1030.png' width='20px'/><b>Arbres gérés par Schaerbeek</b></br>": GroupMarkersTrees1030,
    "<img src='src/images/NewTree.png' width='20px'/><b>Arbres Cimetiere Schaerbeek</b></br>": GroupMarkersTrees1030_Cimetiere,
    "<img src='src/images/NewTree.png' width='20px'/><b>Arbres à enregistrer</b></br>": GroupMarkersTrees1030_NEW,
    "<img src='src/images/AllTrees1030.png' width='20px'/><b>Tous les arbres</b></br>": GroupMarkersClustersALL1030,
    //"<img src='src/images/AllTrees1030.png' width='20px'/><b>Tous les arbres</b></br>": GroupMarkersALL,
};

var LControl01 = L.control.layers(CarteGroup).addTo(carte);
var LControl02 = L.control.layers(GroupTree1030, GroupTree).addTo(carte);
//var LControl03 = L.control.layers(GroupTree1030).addTo(carte);
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
var layerGroup = L.layerGroup().addTo(carte);
carte.on('click', function(e) {

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
    });
});