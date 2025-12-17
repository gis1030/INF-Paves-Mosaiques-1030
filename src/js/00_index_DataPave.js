// on personnalise les marqueurs
const Icon1030 = L.icon({
    iconUrl: 'src/images/Schaerbeek-1030-ICON.png',
    iconSize: [25, 25],
    iconAnchor: [10, 18],
    popupAnchor: [0, -24]
});

// Markers
let geojsonMarkerOptions_00 = {
    color: 'black',
    fillColor: '#08bb76',
    color: "#000", //'#08bb76',
    fillOpacity: 0.6,
    radius: 8,
    weight: 1,
    opacity: 1
};

const geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#08530b2f",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

// Helper function to generate popup content
const createPopupContent = (properties) => {
    let content = "";

    // Pictures
    const pictures = [properties.LinkPicture01, properties.LinkPicture02, properties.LinkPicture03, properties.LinkPicture04];
    const pictureHtml = pictures
        .filter(url => url)
        .map(url => `<img src="${url}" width="80" height="auto">`) // Fixed typo 'hight' to 'height' and size
        .join("");

    if (pictureHtml) {
        content += `<dt>${pictureHtml}</dt>`;
    }

    if (properties.CodeID) {
        content += `<dt>Code ID: ${properties.CodeID}</dt>`;
        if (!content.includes("<img")) { // Only add details if not already added by simple popup logic? Original loop was bit complex.
            // Original structure in onEachFeature (line 87) added CodeID, then pictures, then Artist.
        }
        content += `<dt> Artiste: ${properties.Artist}</dt>`;
    }

    // Fallback or additional logic from onEachFeature00
    if (!properties.CodeID) {
        if (properties.SectorName) {
            content += `<dt>${properties.SectorType}: ${properties.SectorName}</dt>`;
        } else if (properties.popupContent) {
            content += properties.popupContent;
        }
    }

    return content;
};

// Simplified onEachFeature based on original logic but cleaner
const onEachFeature = (feature, layer) => {
    if (!feature.properties) return;

    const props = feature.properties;
    let popupContent = "";

    // Replicating logic from original onEachFeature (lines 87-116)
    // It constructs: CodeID + Pictures + Artist
    // BUT onEachFeature00 (lines 57-85) was different.
    // The original code used `onEachFeature` (lines 87) for Marker1030 and Marker1030_NEW.
    // `onEachFeature00` was UNUSED in the original code for those layers.

    // So I will optimize `onEachFeature`.
    const p1 = props.LinkPicture01 ? `<img src=${props.LinkPicture01} width='80' height='80'>` : ""; // Cleaning 'hight' typo
    const p2 = props.LinkPicture02 ? `<img src=${props.LinkPicture02} width='80' height='80'>` : "";
    const p3 = props.LinkPicture03 ? `<img src=${props.LinkPicture03} width='80' height='100'>` : "";
    const p4 = props.LinkPicture04 ? `<img src=${props.LinkPicture04} width='80' height='80'>` : "";

    const custompoup = `<dt>${p1}${p2}${p3}${p4}</dt>`;
    const custompoup01 = `<dt>Code ID: ${props.CodeID}</dt>`;
    const custompoup02 = `<dt> Artiste: ${props.Artist}</dt>`;

    if (props.CodeID) {
        popupContent += custompoup01 + custompoup + custompoup02;
    }

    layer.bindPopup(popupContent);
};


// BEGIN ==== Donnnes GeoJson comme marqueurs =======
// ++++++ Limites de Schaerbeek ++++++++
// Assuming Boundary and BoundaryDistrict are defined globally
L.geoJSON([Boundary], {
    style: (feature) => feature.properties && feature.properties.style,
    onEachFeature: onEachFeature,
}).addTo(carte);

L.geoJSON([BoundaryDistrict], {
    style: (feature) => feature.properties && feature.properties.style,
    onEachFeature: onEachFeature,
}).addTo(carte);

// if (typeof variable === 'undefined' || variable === null) {}  // variable is undefined or null
if (typeof ListePavesMosaiques1030 !== 'undefined') { // the variable is defined
    L.geoJSON([ListePavesMosaiques1030], {
        style: (feature) => feature.properties && feature.properties.style,
        onEachFeature: onEachFeature,
    }) //.addTo(carte);
}

// ++++++ Liste des Marqueurs ++++++++
const Marker1030 = L.geoJSON([ListePavesMosaiques1030], {
    style: (feature) => feature.properties && feature.properties.style,
    onEachFeature: onEachFeature,

    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, { icon: Icon1030 });
        //return L.circleMarker(latlng, geojsonMarkerOptions_00);
    }
}); // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersData1030_08.addLayer(Marker1030)


const Marker1030_NEW = L.geoJSON([ListePavesMosaiques1030_NEW], {
    style: (feature) => feature.properties && feature.properties.style,
    onEachFeature: onEachFeature,

    pointToLayer: (feature, latlng) => {
        //return L.marker(latlng, { icon: Icon1030 });
        return L.circleMarker(latlng, geojsonMarkerOptions_00);
    }
}); // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersData1030_03.addLayer(Marker1030_NEW)

// On va regropue les marqueurs dans une group leafvar
const GroupMarkersClustersALL1030 = new L.featureGroup([
    GroupMarkersData1030_08,
]);

const GroupMarkersClustersALL1030_NEW = new L.featureGroup([
    GroupMarkersData1030_03,
]);
carte.addLayer(GroupMarkersClustersALL1030)
// END ==== Donnnes GeoJson comme marqueurs ========


// BEGIN ==== Data Viewer ========
Marker1030_NEW.on("click", (event) => MarkerDataView(event.layer));
Marker1030.on("click", (event) => MarkerDataView(event.layer));

const MarkerDataView = (clickedMarker) => {
    const props = clickedMarker.feature.properties;
    const coords = clickedMarker.feature.geometry.coordinates;

    const FullAdress_1030 = `${props.StreetFR} ${props.HouseNumber}, ${props.PostalCode} ${props.Locality}`;

    const setVal = (id, val) => {
        const el = document.querySelector(`#${id}_1030`);
        if (el) el.value = val || "";
    };

    setVal("CodeID", props.CodeID);
    setVal("TilesNumber", props.TilesNumber);
    setVal("Status", props.Status);
    setVal("Artist", props.Artist);
    setVal("Year", props.Year);
    setVal("StreetFR", props.StreetFR);
    setVal("HouseNumber", props.HouseNumber);
    setVal("Comments", props.Comments);
    setVal("Locality", props.Locality);
    setVal("Sector", props.Sector);
    setVal("FullAdress", FullAdress_1030);
    setVal("Latitude", coords[1]);
    setVal("Longitude", coords[0]);
};