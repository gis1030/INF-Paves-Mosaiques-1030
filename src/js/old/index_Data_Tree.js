// on personnalise les marqueurs
var TreeIcon01 = L.icon({
    iconUrl: 'src/images/Tree1030.png',
    iconSize: [20, 20],
    iconAnchor: [10, 5],
    popupAnchor: [-5, 5]
});

var TreeIcon02 = L.icon({
    iconUrl: 'src/images/RemarkableTree.png',
    iconSize: [20, 20],
    iconAnchor: [10, 5],
    popupAnchor: [-5, 5]
});

var TreeIcon03 = L.icon({
    iconUrl: 'src/images/AlignementTree.png',
    iconSize: [20, 20],
    iconAnchor: [10, 5],
    popupAnchor: [-5, 5]
});

var TreeIcon04 = L.icon({
    iconUrl: 'src/images/NewTree.png',
    iconSize: [25, 25],
    iconAnchor: [10, 5],
    popupAnchor: [-5, 5]
});

var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#08530b2f",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};


// BEGIN ==== Donnnes GeoJson comme marqueurs =======
// fonction qui est appelée sur chaque entité avant de l'ajouter à une couche GeoJSON. 
function onEachFeature(feature, layer) {
    var popupContent = "<dt>" + feature.id + "</dt>";
    if (feature.properties.images) {
        var custompoup = "<dt><img src=" + feature.properties.images + " width='100' hight:'100'></dt>";
        if (feature.properties && feature.properties.popupContent) {
            popupContent += feature.properties.popupContent + custompoup;
        }
    } else if (feature.properties.SectorName) {
        var custompoup = "<dt>" + feature.properties.SectorType + ": " +
            feature.properties.SectorName + "</dt>";
        popupContent += custompoup;
    } else {
        if (feature.properties && feature.properties.popupContent) {
            popupContent += feature.properties.popupContent;
        }
    }
    layer.bindPopup(popupContent);
}

// ++++++ Limites de Schaerbeek ++++++++
L.geoJSON([Boundary], {
    style: function(feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,
}).addTo(carte);

L.geoJSON([BoundaryDistrict], {
    style: function(feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,
}).addTo(carte);

// if (typeof variable === 'undefined' || variable === null) {}  // variable is undefined or null
if (typeof ListWorkZonesTreeman1030 != 'undefined') { // the variable is defined
    L.geoJSON([ListWorkZonesTreeman1030], {
            style: function(feature) {
                return feature.properties && feature.properties.style;
            },
            onEachFeature: onEachFeature,
        }) //.addTo(carte);
}

// ++++++ Liste des Marqueurs ++++++++
var Marker1030 = L.geoJSON([ListTreesMarkers1030], {
        style: function(feature) {
            return feature.properties && feature.properties.style;
        },
        onEachFeature: onEachFeature,

        pointToLayer: function(feature, latlng) {
            //return L.marker(latlng, { icon: TreeIcon01 });
            return L.circleMarker(latlng, {
                color: 'black',
                fillColor: '#08bb76',
                color: "#000", //'#08bb76',
                fillOpacity: 0.6,
                radius: 8,
                weight: 1,
                opacity: 1
            })
        }
    }) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersTrees1030.addLayer(Marker1030)

var MarkersRemark1030 = L.geoJSON([ListRemarkableTreesMarkers1030], {
        style: function(feature) {
            return feature.properties && feature.properties.style;
        },
        onEachFeature: onEachFeature,

        pointToLayer: function(feature, latlng) {
            //return L.marker(latlng, { icon: TreeIcon01 });
            return L.circleMarker(latlng, {
                color: 'black',
                fillColor: '#db18632f',
                color: "#000", //'#db18632f',
                fillOpacity: 0.6,
                radius: 8,
                weight: 1,
                opacity: 1
            })
        }
    }) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersRemarkableTrees1030.addLayer(MarkersRemark1030)

var MarkersAlign1030 = L.geoJSON([ListAlignementTreesMarkers1030], {
        style: function(feature) {
            return feature.properties && feature.properties.style;
        },
        onEachFeature: onEachFeature,

        pointToLayer: function(feature, latlng) {
            //return L.marker(latlng, { icon: TreeIcon03 });
            return L.circleMarker(latlng, {
                color: 'black',
                fillColor: '#5c2ae4d8',
                color: "#000", //'#5c2ae4d8',
                fillOpacity: 0.6,
                radius: 8,
                weight: 1,
                opacity: 1
            })
        }
    }) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersAlignmentTrees1030.addLayer(MarkersAlign1030)

var Marker1030_NEW = L.geoJSON([ListTreesMarkers1030_NEW], {
        style: function(feature) {
            return feature.properties && feature.properties.style;
        },
        onEachFeature: onEachFeature,

        pointToLayer: function(feature, latlng) {
            //return L.marker(latlng, { icon: TreeIcon04 });
            return L.circleMarker(latlng, {
                color: 'black',
                fillColor: '#d39f2f',
                color: "#000", //'#d39f2f',
                fillOpacity: 0.6,
                radius: 8,
                weight: 1,
                opacity: 1
            })
        }
    }) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersTrees1030_NEW.addLayer(Marker1030_NEW)

// On va regropue les marqueurs dans une group leafvar
var GroupMarkersClustersALL = new L.featureGroup([
    GroupMarkersRemarkableTrees1030,
    GroupMarkersAlignmentTrees1030,
]);

var GroupMarkersClustersALL1030 = new L.featureGroup([
    GroupMarkersTrees1030,
    GroupMarkersTrees1030_Cimetiere,
    GroupMarkersTrees1030_NEW
]);

var Marker1030_Cimetiere = L.geoJSON([ListTreesMarkers1030_Cimetiere], {
        style: function(feature) {
            return feature.properties && feature.properties.style;
        },
        onEachFeature: onEachFeature,

        pointToLayer: function(feature, latlng) {
            // return L.marker(latlng, { icon: TreeIcon04 });
            return L.circleMarker(latlng, {
                color: 'black',
                fillColor: '#db7420',
                color: "#000", //'#db7420',
                fillOpacity: 0.6,
                radius: 8,
                weight: 1,
                opacity: 1
            })
        }
    }) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersTrees1030_Cimetiere.addLayer(Marker1030_Cimetiere)

//carte.addLayer(GroupMarkersTrees1030)
carte.addLayer(GroupMarkersClustersALL1030)
    // END ==== Donnnes GeoJson comme marqueurs ========


// BEGIN ==== Data Viewer ========
Marker1030.on("click", function(event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_NEW.on("click", function(event) {
    var clickedMarker = event.layer;
    //console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_Cimetiere.on("click", function(event) {
    var clickedMarker = event.layer;
    //console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

function MarkerDataView(clickedMarker) {
    document.querySelector("#NumidArb").value = clickedMarker.feature.properties.Numident
    document.querySelector("#EspeceArb").value = clickedMarker.feature.properties.Espece
    document.querySelector("#StatutArb").value = clickedMarker.feature.properties.Statut_arbre
    document.querySelector("#TypeLieuPlantaArb").value = clickedMarker.feature.properties.Type_lieu
    document.querySelector("#DangerArb").value = clickedMarker.feature.properties.Danger
    document.querySelector("#DatePlantArb").value = clickedMarker.feature.properties.Date_plantation
    document.querySelector("#LatitudeArb").value = clickedMarker.feature.geometry.coordinates[1]
    document.querySelector("#LongitudeArb").value = clickedMarker.feature.geometry.coordinates[0]
    document.querySelector("#AdresseArb").value = clickedMarker.feature.properties.Adresse
    document.querySelector("#LieuPlantaArb").value = clickedMarker.feature.properties.Type_sol
    document.querySelector("#TypeEnvirArb").value = clickedMarker.feature.properties.Environnement
    document.querySelector("#TypeDistrArb").value = clickedMarker.feature.properties.Distribution
    document.querySelector("#CirconfArb").value = clickedMarker.feature.properties.Circonference
    document.querySelector("#HauterArb").value = clickedMarker.feature.properties.Hauteur
    document.querySelector("#MultiTroncArb").value = clickedMarker.feature.properties.Troncs_multiples
    document.querySelector("#DiamCourArb").value = clickedMarker.feature.properties.Diametre_couronne
    document.querySelector("#StructureArb").value = clickedMarker.feature.properties.Structure
        //document.querySelector("#ImageArb").value = clickedMarker.feature.properties.Image
    document.querySelector("#CommentairesArb").value = clickedMarker.feature.properties.Commentaires
};