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
    iconSize: [40, 40],
    iconAnchor: [20, 5],
    popupAnchor: [-5, 5]
});

// BEGIN ======= Donnnes GeoJson comme marqueurs ======= BEGIN \\
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
if (typeof NumidLabel === 'undefined' || EspeceLabel === 'undefined' || StatutLabel === 'undefined' ||
    DangerLabel === 'undefined' || StructureLabel === 'undefined' ||
    LieuPlantaLabel === 'undefined' || TypeLieuPlantaLabel === 'undefined' ||
    TypeEnvirLabel === 'undefined' || TypeDistrLabel === 'undefined') {

    var NumidLabel = ""
    var EspeceLabel = ""
    var StatutLabel = ""
    var DangerLabel = ""
    var StructureLabel = ""
    var LieuPlantaLabel = ""
    var TypeLieuPlantaLabel = ""
    var TypeEnvirLabel = ""
    var TypeDistrLabel = ""

    var Marker1030 = L.geoJSON([ListTreesMarkers1030], {
        style: function(feature) {
            return feature.properties && feature.properties.style && feature.properties.CustomValue;
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
    }); // .addTo(carte); ; inutile lors de lúti;isation des clusters

    var Marker1030_NEW = L.geoJSON([ListTreesMarkers1030_NEW], {
        style: function(feature) {
            return feature.properties && feature.properties.style && feature.properties.CustomValue;
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
    }); // .addTo(carte); ; inutile lors de lúti;isation des clusters

    var Marker1030_Cimetiere = L.geoJSON([ListTreesMarkers1030_Cimetiere], {
        style: function(feature) {
            return feature.properties && feature.properties.style && feature.properties.CustomValue;
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
    }); // .addTo(carte); ; inutile lors de lúti;isation des clusters

    // concatenar los archivos GEOJson des arbres 1030
    // var json1 = ListTreesMarkers1030
    // var json2 = ListTreesMarkers1030_NEW
    // var json3 = ListTreesMarkers1030_Cimetiere

    var jsonALL = {};
    jsonALL = concatGeoJSON(ListTreesMarkers1030, ListTreesMarkers1030_NEW)
    jsonALL = concatGeoJSON(jsonALL, ListTreesMarkers1030_Cimetiere)

    var Marker1030_ALL = L.geoJSON([jsonALL], {
        filter: function(feature, layer) {
            return (feature.properties.Espece !== "ALL" && feature.properties.Statut_arbre !== "ALL");
        },

        style: function(feature) {
            return feature.properties && feature.properties.style && feature.properties.CustomValue;
        },
        onEachFeature: onEachFeature,

        pointToLayer: function(feature, latlng) {
            //return L.marker(latlng, { icon: TreeIcon01 });
            return L.circleMarker(latlng, {
                color: 'black',
                fillColor: '#bd2848',
                color: "#000", //'#bd2848',
                fillOpacity: 0.6,
                radius: 8,
                weight: 1,
                opacity: 1
            })
        }
    }); // .addTo(carte); ; inutile lors de lúti;isation des clusters

    var Marker1030_00 = Marker1030
    var Marker1030_NEW_00 = Marker1030_NEW
    var Marker1030_Cimetiere_00 = Marker1030_Cimetiere
    var Marker1030_ALL_00 = Marker1030_ALL

    // Group CLusteres
    GroupMarkersTrees1030.addLayer(Marker1030)
    GroupMarkersTrees1030_NEW.addLayer(Marker1030_NEW)
    GroupMarkersTrees1030_Cimetiere.addLayer(Marker1030_Cimetiere)
    GroupMarkersTrees1030_ALL.addLayer(Marker1030_ALL)
}

var MarkersRemark1030 = L.geoJSON([ListRemarkableTreesMarkers1030], {
        style: function(feature) {
            return feature.properties && feature.properties.style;
        },
        onEachFeature: onEachFeature,

        pointToLayer: function(feature, latlng) {
            return L.marker(latlng, { icon: TreeIcon02 });
        }
    }) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersRemarkableTrees1030.addLayer(MarkersRemark1030)

var MarkersAlign1030 = L.geoJSON([ListAlignementTreesMarkers1030], {
        style: function(feature) {
            return feature.properties && feature.properties.style;
        },
        onEachFeature: onEachFeature,

        pointToLayer: function(feature, latlng) {
            return L.marker(latlng, { icon: TreeIcon03 });
        }
    }) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersAlignmentTrees1030.addLayer(MarkersAlign1030)

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

carte.addLayer(GroupMarkersTrees1030_ALL)
    // END ======= Donnnes GeoJson comme marqueurs ======= END \\

// BEGIN ======== Data Viewer ======== BEGIN \\ 
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

Marker1030_ALL.on("click", function(event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});
// END ======== Data Viewer ======== END \\

// BEGIN ======== Javascript FUnctions  ======== BEGIN \\
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


function LoadALLData() {
    Marker1030.eachLayer(function(marker) {
        carte.removeLayer(marker);
    });
    Marker1030_NEW.eachLayer(function(marker) {
        carte.removeLayer(marker);
    });
    Marker1030_Cimetiere.eachLayer(function(marker) {
        carte.removeLayer(marker);
    });
    Marker1030_ALL.eachLayer(function(marker) {
        carte.removeLayer(marker);
    });

    //Marker1030 = Marker1030_00
    Marker1030 = Marker1030_ALL
    Marker1030_NEW = Marker1030_NEW_00
    Marker1030_Cimetiere = Marker1030_Cimetiere_00
    Marker1030_ALL = Marker1030_ALL_00

    // On reinitialise les layers
    GroupMarkersTrees1030.clearLayers();
    GroupMarkersTrees1030_NEW.clearLayers();
    GroupMarkersTrees1030_Cimetiere.clearLayers();
    GroupMarkersTrees1030_ALL.clearLayers();

    // On va regropue les marqueurs
    GroupMarkersTrees1030.addLayer(Marker1030);
    GroupMarkersTrees1030_NEW.addLayer(Marker1030_NEW);
    GroupMarkersTrees1030_Cimetiere.addLayer(Marker1030_Cimetiere);
    GroupMarkersTrees1030_ALL.addLayer(Marker1030_ALL);
}

function filterBy(val) {
    var result = Object.keys(obj).reduce(function(r, e) {
        if (e.toLowerCase().indexOf(val) != -1) {
            r[e] = obj[e];
        } else {
            Object.keys(obj[e]).forEach(function(k) {
                if (k.toLowerCase().indexOf(val) != -1) {
                    var object = {}
                    object[k] = obj[e][k];
                    r[e] = object;
                }
            })
        }
        return r;
    }, {})
    return result;
}

function concatGeoJSON(g1, g2) {
    return {
        "type": "FeatureCollection",
        "features": g1.features.concat(g2.features)
    }
}

function SearchData() {
    //window.alert("por aqui paso");
    var NumidLabel = document.getElementById("NumidArb").value;
    var EspeceLabel = document.getElementById("EspeceArb").value;
    var StatutLabel = document.getElementById("StatutArb").value;
    var DangerLabel = document.getElementById("DangerArb").value;
    var StructureLabel = document.getElementById("StructureArb").value;
    var LieuPlantaLabel = document.getElementById("LieuPlantaArb").value;
    var TypeLieuPlantaLabel = document.getElementById("TypeLieuPlantaArb").value;
    var TypeEnvirLabel = document.getElementById("TypeEnvirArb").value;
    var TypeDistrLabel = document.getElementById("TypeDistrArb").value;

    //on initialise les labels
    if (NumidLabel == "") {
        NumidLabel = "ALLData";
    }
    if (EspeceLabel == "") {
        EspeceLabel = "ALLData";
    }
    if (StatutLabel == "") {
        StatutLabel = "ALLData";
    }
    if (DangerLabel == "") {
        DangerLabel = "ALLData";
    }
    if (StructureLabel == "") {
        StructureLabel = "ALLData";
    }
    if (LieuPlantaLabel == "") {
        LieuPlantaLabel = "ALLData";
    }
    if (TypeLieuPlantaLabel == "") {
        TypeLieuPlantaLabel = "ALLData";
    }
    if (TypeEnvirLabel == "") {
        TypeEnvirLabel = "ALLData";
    }
    if (TypeDistrLabel == "") {
        TypeDistrLabel = "ALLData";
    }

    // on initialise les compteurs
    var k_NumidentLabel =0
    var k_EspeceLabel = 0;
    var k_StatutLabel = 0;
    var k_DangerLabel = 0;
    var k_StructureLabel = 0;
    var k_LieuPlantaLabel = 0;
    var k_TypeLieuPlantaLabel = 0;
    var k_TypeEnvirLabel = 0;
    var k_TypeDistrLabel = 0;

    // On reinitialise les layers
    GroupMarkersTrees1030_ALL.clearLayers();
    var jsonALL_00 = 0;

    // >>> recherche unique par numéro d'identification <<< \\
    if (NumidLabel !== "ALLData") {
        jsonSEARCH = {};
        jsonALL_00 = jsonALL;
        mylist = [{ SearchLabel: NumidLabel }];
        jsonSEARCH.features = jsonALL_00.features.filter(item => {
            if (mylist.filter(myitem => myitem.SearchLabel === item.properties.Numident).length > 0) {
                return item;
            }
            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.Numident.toString().includes(NumidLabel.toString()));
            k_NumidentLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesArb").value = "Arbre ID: " + k_NumidentLabel
        });
    }

    // >>> recherche multiple <<< \\
    // Espèce de l'arbre
    if (NumidLabel === "ALLData") {
        if (EspeceLabel !== "ALLData") {
            jsonSEARCH = {};
            jsonALL_00 = jsonALL;
            mylist = [{ SearchLabel: EspeceLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Espece.toLowerCase()).length > 0) {
                    return item;
                }
            });

            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.Espece.toLowerCase().includes(EspeceLabel.toLowerCase()));
            // console.log(jsonSEARCH.features)

            k_EspeceLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesArb").value = 'Espèce arbre: ' + EspeceLabel + " > Total: " + k_EspeceLabel;
        }
    }
    // Statut de l'arbre
    if (NumidLabel === "ALLData") {
        if (StatutLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: StatutLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Statut_arbre.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_StatutLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesArb").value = 'Statut arbre: ' + StatutLabel + " > Total: " + k_StatutLabel;
        }
    }
    // Danger de l'arbre
    if (NumidLabel === "ALLData") {
        if (DangerLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: DangerLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Danger.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_DangerLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesArb").value = 'Danger arbre: ' + DangerLabel + " > Total: " + k_DangerLabel;
        }
    }
    // Structure de l'arbre
    if (NumidLabel === "ALLData") {
        if (StructureLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: StructureLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Structure.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_StructureLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesArb").value = 'Structure arbre: ' + StructureLabel + " > Total: " + k_StructureLabel;
        }
    }
    // Lieu de plantation (sol)
    if (NumidLabel === "ALLData") {
        if (LieuPlantaLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: LieuPlantaLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Type_sol.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_LieuPlantaLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesArb").value = 'Lieu plantation: ' + LieuPlantaLabel + " > Total: " + k_LieuPlantaLabel;
        }
    }
    // Type de lieu de plantation
    if (NumidLabel === "ALLData") {
        if (TypeLieuPlantaLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: TypeLieuPlantaLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Type_lieu.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_TypeLieuPlantaLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesArb").value = 'Type lieu plantation: ' + TypeLieuPlantaLabel + " > Total: " + k_TypeLieuPlantaLabel;
        }
    }
    // Type de Environnement
    if (NumidLabel === "ALLData") {
        if (TypeEnvirLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: TypeEnvirLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Environnement.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_TypeEnvirLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesArb").value = 'Type Environnement: ' + TypeEnvirLabel + " > Total: " + k_TypeEnvirLabel;
        }
    }
    // Type de Distribution
    if (NumidLabel === "ALLData") {
        if (TypeDistrLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: TypeDistrLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Distribution.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_TypeDistrLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesArb").value = 'Type Distribution: ' + TypeDistrLabel + " > Total: " + k_TypeDistrLabel;
        }
    }

	window.alert(jsonSEARCH.features.length);
	
    if (jsonSEARCH.features.length == 0) {
        alert("Il n'y a pas d'arborescence répertoriée avec les valeurs de recherche sélectionnées.., modifiez les critères de recherche");
        ClearDataSearch();
    } else {
        var Marker1030_ALL = L.geoJSON([jsonSEARCH], {
            style: function(feature) {
                return feature.properties && feature.properties.style && feature.properties.CustomValue;
            },
            onEachFeature: onEachFeature,

            pointToLayer: function(feature, latlng) {
                //return L.marker(latlng, { icon: TreeIcon01 });
                return L.circleMarker(latlng, {
                    color: 'black',
                    fillColor: '#bd2848',
                    color: "#000", //'#bd2848',
                    fillOpacity: 0.6,
                    radius: 8,
                    weight: 1,
                    opacity: 1
                })
            }
        }); // .addTo(carte); ; inutile lors de lúti;isation des clusters
        GroupMarkersTrees1030_ALL.addLayer(Marker1030_ALL)

        Marker1030_ALL.on("click", function(event) {
            var clickedMarker = event.layer;
            // console.log(clickedMarker)
            MarkerDataView(clickedMarker)
        });

        //console.log(jsonSEARCH)
    };
}



// END ======== Javascript FUnctions  ======== END \\

// BEGIN +++++++++++ TEST +++++++++++ BEGIN \\ 
//console.log(jsonALL)

//mylist = [{ EspeceLabel: "Abies alba" }];
//jsonSEARCH = {};
//jsonSEARCH.features = jsonALL.features.filter(item => {
//    if (mylist.filter(myitem => myitem.EspeceLabel === item.properties.Espece).length > 0) {
//        return item;
//    }
//});
//console.log(jsonSEARCH)
// END +++++++++++ TEST +++++++++++ END \\