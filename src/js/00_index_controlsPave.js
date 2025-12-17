// ++++++++ Choix de cartes et Arbres ++++++++
var CarteGroup = {
    //"<b>UrbIS.be Carte</b>": carteAA,
    //"<b>UrbIS.be Ortho</b>": carteBB,
    "<b>OSM.fr Carte</b>": carte01,
    "<b>Google Terrain</b>": carte02,
    "<b>Google Satellite-Streets</b>": carte05,
    //"<b>Google Satellite</b>": carte04,
    //"<b>Google Streets</b>": carte03,
    //"<b>Google Terrain-Cycle</b>": carte06,
    //"<b>Google Streets-Cycle</b>": carte07,
    //"<b>Google Traffic</b>": carte08,
};

var GroupPave1030 = {
    "<img src='src/images/Schaerbeek-1030-ICON.png' width='20px'/><b>Pavés à enregistrer</b></br>": GroupMarkersData1030_03,
    "<img src='src/images/Schaerbeek-1030-ICON.png' width='20px'/><b>Pavés Mosaïques 1030</b></br>": GroupMarkersData1030_08,
};

var LControl01 = L.control.layers(CarteGroup).addTo(carte);
var LControl02 = L.control.layers(GroupPave1030).addTo(carte);
// ++++++++ Choix de cartes et Arbres ++++++++

// +++++++ Revient a la position initial ++++++++
L.easyButton('<img src="src/images/home.png" width="26" height="26" >', function () {
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

L.easyButton('<img src="src/images/gps-position.png" width="26" height="26" >', function () {
    getLocationLeafvar()
}).addTo(carte);

L.Control.Watermark = L.Control.extend({
    onAdd: function (carte) {
        var img = L.DomUtil.create('img');
        img.src = 'src/css/images/schaerbeek1030_logo.png';
        img.style.width = '75px';
        return img;
    },
    onRemove: function (carte) {
        // Nothing to do here
    }
});
L.control.watermark = function (opts) { return new L.Control.Watermark(opts); }
L.control.watermark({ position: 'bottomleft' }).addTo(carte);

L.easyButton('<img src="src/images/email-icon-svg.png" width="30" height="26" >', function (btn, carte) {
    var url = "mailto:stv@1030.be?subject=Feedback: Service Technique Voirie 1030";
    window.location.href = url;
}).setPosition('bottomleft').addTo(carte); // topleft, topright, bottomleft, bottomright

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
carte.on('click', function (e) {

    geocodeService.reverse().latlng(e.latlng).run(function (error, result) {
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