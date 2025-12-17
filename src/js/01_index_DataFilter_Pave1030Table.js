// ListePavesMosaiques1030_NEW >> GeoJSON_NewData.json
// ListePavesMosaiques1030 >> 01_PavesMosaiques1030_Databases.js

// on personnalise les marqueurs
var Icon1030 = L.icon({
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

var geojsonMarkerOptions_01 = {
    radius: 8,
    fillColor: "#08530b2f",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var geojsonMarkerOptions_02 = {
    radius: 8,
    fillColor: "#08530b2f",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

// BEGIN ======= Donnnes GeoJson comme marqueurs ======= BEGIN \\
// ++++++ Limites de Schaerbeek ++++++++
L.geoJSON([Boundary], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,
}).addTo(carte);

L.geoJSON([BoundaryDistrict], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,
}).addTo(carte);

// if (typeof variable === 'undefined' || variable === null) {}  // variable is undefined or null
if (typeof ListePavesMosaiques1030 != 'undefined') { // the variable is defined
    L.geoJSON([ListePavesMosaiques1030], {
        style: function (feature) {
            return feature.properties && feature.properties.style;
        },
        onEachFeature: onEachFeature,
    }) //.addTo(carte);
}

// ++++++ Liste des Marqueurs ++++++++
if (typeof CodeID_Label === 'undefined' || Status_Label === 'undefined' || Artist_Label === 'undefined' ||
    Year_Label === 'undefined' || StreetFR_Label === 'undefined' || Picture_Label === 'undefined' ||
    Locality_Label === 'undefined' || Sector_Label === 'undefined') {

    var CodeID_Label = ""
    var Status_Label = ""
    var Artist_Label = ""
    var Year_Label = ""
    var StreetFR_Label = ""
    var Locality_Label = ""
    var Sector_Label = ""
    var Picture_Label = ""

    var Marker1030 = L.geoJSON([ListePavesMosaiques1030], {
        style: function (feature) {
            return feature.properties && feature.properties.style && feature.properties.CustomValue;
        },
        onEachFeature: onEachFeature,

        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, { icon: Icon1030 });
            //return L.circleMarker(latlng, geojsonMarkerOptions_00);
        }
    }); // .addTo(carte); ; inutile lors de lúti;isation des clusters

    var jsonALL = {};
    jsonALL = ListePavesMosaiques1030

    var Marker1030_ALL = L.geoJSON([jsonALL], {
        filter: function (feature, layer) {
            return (feature.properties.TilesNumber !== "ALL" && feature.properties.Status !== "ALL");
        },

        style: function (feature) {
            return feature.properties && feature.properties.style && feature.properties.CustomValue;
        },
        onEachFeature: onEachFeature,

        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, { icon: Icon1030 });
            //return L.circleMarker(latlng, geojsonMarkerOptions_00);
        }
    }); // .addTo(carte); ; inutile lors de lúti;isation des clusters

    var Marker1030_00 = Marker1030
    var Marker1030_ALL_00 = Marker1030_ALL

    // Group CLusteres
    GroupMarkersData1030_01.addLayer(Marker1030_ALL)
}

carte.addLayer(GroupMarkersData1030_01)
// END ======= Donnnes GeoJson comme marqueurs ======= END \\

// BEGIN ======== Data Viewer ======== BEGIN \\ 
Marker1030_ALL.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});
// END ======== Data Viewer ======== END \\

// BEGIN ======== Javascript FUnctions  ======== BEGIN \\
// fonction qui est appelée sur chaque entité avant de l'ajouter à une couche GeoJSON. 
function onEachFeature00(feature, layer) {
    //var popupContent = "<dt>" + feature.id + "</dt>";
    var popupContent = "";
    if (feature.properties.CodeID) {
        var custompoup = "<dt>Code ID: " + feature.properties.CodeID + "</dt>" +
            "<dt> Artiste: " + feature.properties.Artist + "</dt>" +
            "<dt> Nombre de pavés: " + feature.properties.TilesNumber + "</dt>" +

            "<dt> Adresses: " + feature.properties.FullAddress + "</dt>" +
            "<dt> Quartier: " + feature.properties.Sector + "</dt>" +
            "<dt> Annee: " + feature.properties.Year + "</dt>";
        popupContent += custompoup;
    }
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

function onEachFeature(feature, layer) {
    //var popupContent = "<dt>" + feature.id + "</dt>";
    var popupContent = "";
    var custompoup01 = "<dt>Code ID: " + feature.properties.CodeID + "</dt>";
    var custompoup02 = "<dt> Artiste: " + feature.properties.Artist + "</dt>";

    custompoupP1 = "";
    custompoupP2 = "";
    custompoupP3 = "";
    custompoupP4 = "";

    if (feature.properties.LinkPicture01) {
        var custompoupP1 = "<img src=" + feature.properties.LinkPicture01 + " width='80' hight:'80'>";
    }
    if (feature.properties.LinkPicture02) {
        var custompoupP2 = "<img src=" + feature.properties.LinkPicture02 + " width='80' hight:'80'>";
    }
    if (feature.properties.LinkPicture03) {
        var custompoupP3 = "<img src=" + feature.properties.LinkPicture03 + " width='80' hight:'100'>";
    }
    if (feature.properties.LinkPicture04) {
        var custompoupP4 = "<img src=" + feature.properties.LinkPicture04 + " width='80' hight:'80'>";
    }

    var custompoup = "<dt>" + custompoupP1 + custompoupP2 + custompoupP3 + custompoupP4 + "</dt>";
    if (feature.properties && feature.properties.CodeID) {
        popupContent += custompoup01 + custompoup + custompoup02;
    }
    layer.bindPopup(popupContent);
}


function MarkerDataView(clickedMarker) {
    var FullAdress_1030 = clickedMarker.feature.properties.StreetFR + " " +
        clickedMarker.feature.properties.HouseNumber + ", " +
        clickedMarker.feature.properties.PostalCode + " " + clickedMarker.feature.properties.Locality;

    //document.querySelector("#FullAdress_1030").value = clickedMarker.feature.properties.FullAddress
    document.querySelector("#CodeID_1030").value = clickedMarker.feature.properties.CodeID
    document.querySelector("#TilesNumber_1030").value = clickedMarker.feature.properties.TilesNumber
    document.querySelector("#Status_1030").value = clickedMarker.feature.properties.Status
    document.querySelector("#Artist_1030").value = clickedMarker.feature.properties.Artist
    document.querySelector("#Year_1030").value = clickedMarker.feature.properties.Year
    document.querySelector("#StreetFR_1030").value = clickedMarker.feature.properties.StreetFR
    document.querySelector("#HouseNumber_1030").value = clickedMarker.feature.properties.HouseNumber
    document.querySelector("#Comments_1030").value = clickedMarker.feature.properties.Comments
    document.querySelector("#Locality_1030").value = clickedMarker.feature.properties.Locality
    document.querySelector("#Sector_1030").value = clickedMarker.feature.properties.Sector
    document.querySelector("#FullAdress_1030").value = FullAdress_1030
    document.querySelector("#Latitude_1030").value = clickedMarker.feature.geometry.coordinates[1]
    document.querySelector("#Longitude_1030").value = clickedMarker.feature.geometry.coordinates[0]
};

function LoadALLData() {
    Marker1030_ALL.eachLayer(function (marker) {
        carte.removeLayer(marker);
    });

    //Marker1030 = Marker1030_00
    Marker1030_ALL = Marker1030_ALL_00

    // On reinitialise les layers
    GroupMarkersData1030_01.clearLayers();

    // On va regropue les marqueurs
    GroupMarkersData1030_01.addLayer(Marker1030_ALL);
}

function filterBy(val) {
    var result = Object.keys(obj).reduce(function (r, e) {
        if (e.toLowerCase().indexOf(val) != -1) {
            r[e] = obj[e];
        } else {
            Object.keys(obj[e]).forEach(function (k) {
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
    var CodeID_Label = document.getElementById("CodeID_1030").value;
    var Status_Label = document.getElementById("Status_1030").value;
    var Artist_Label = document.getElementById("Artist_1030").value;
    var Year_Label = document.getElementById("Year_1030").value;
    var StreetFR_Label = document.getElementById("StreetFR_1030").value;
    var Picture_Label = document.getElementById("Picture_1030").value;
    var Locality_Label = document.getElementById("Locality_1030").value;
    var Sector_Label = document.getElementById("Sector_1030").value;

    //on initialise les labels
    if (CodeID_Label == "") {
        CodeID_Label = "ALLData";
    }
    if (Status_Label == "") {
        Status_Label = "ALLData";
    }
    if (Artist_Label == "") {
        Artist_Label = "ALLData";
    }
    if (Year_Label == "") {
        Year_Label = "ALLData";
    }
    if (StreetFR_Label == "") {
        StreetFR_Label = "ALLData";
    }
    if (Locality_Label == "") {
        Locality_Label = "ALLData";
    }
    if (Sector_Label == "") {
        Sector_Label = "ALLData";
    }
    if (Picture_Label == "") {
        Picture_Label = "ALLData";
    }

    // on initialise les compteurs
    var k_CodeID_Label = 0
    var k_Status_Label = 0;
    var k_Artist_Label = 0;
    var k_Year_Label = 0;
    var k_StreetFR_Label = 0;
    var k_Locality_Label = 0;
    var k_Sector_Label = 0;
    var k_Picture_Label = 0;

    // On reinitialise les layers
    GroupMarkersData1030_01.clearLayers();
    var jsonALL_00 = 0;

    //window.alert(CodeID_Label);

    // >>> recherche unique par numéro d'identification <<< \\
    // CodeID
    if (CodeID_Label !== "ALLData") {
        jsonSEARCH = {};
        jsonALL_00 = jsonALL;
        mylist = [{ SearchLabel: CodeID_Label }];
        jsonSEARCH.features = jsonALL_00.features.filter(item => {
            if (mylist.filter(myitem => myitem.SearchLabel === item.properties.CodeID).length > 0) {
                return item;
            }
            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.CodeID.toString().includes(CodeID_Label.toString()));
            k_CodeID_Label = jsonSEARCH.features.length;
            document.querySelector("#Comments_1030").value = "Pavé Mosaïque: " + k_CodeID_Label
        });
    }

    // >>> recherche multiple <<< \\
    // Status
    if (CodeID_Label === "ALLData") {
        if (Status_Label !== "ALLData") {
            jsonSEARCH = {};
            jsonALL_00 = jsonALL;
            mylist = [{ SearchLabel: Status_Label }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Status.toLowerCase()).length > 0) {
                    return item;
                }
            });

            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.Status.toLowerCase().includes(Status_Label.toLowerCase()));
            // console.log(jsonSEARCH.features)

            k_Status_Label = jsonSEARCH.features.length;
            document.querySelector("#Comments_1030").value = 'Status Pavés: ' + Status_Label + " > Total: " + k_Status_Label;
        }
    }
    // Artist
    if (CodeID_Label === "ALLData") {
        if (Artist_Label !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: Artist_Label }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Artist.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_Artist_Label = jsonSEARCH.features.length;
            document.querySelector("#Comments_1030").value = 'Artiste: ' + Artist_Label + " > Total: " + k_Artist_Label;
        }
    }
    // Year
    if (CodeID_Label === "ALLData") {
        if (Year_Label !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: Year_Label }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Year.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_Year_Label = jsonSEARCH.features.length;
            document.querySelector("#Comments_1030").value = 'Année implantation: ' + Year_Label + " > Total: " + k_Year_Label;
        }
    }
    // Picture
    if (CodeID_Label === "ALLData") {
        if (Picture_Label !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: Picture_Label }];
            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Picture.toLowerCase()).length > 0) {
                    return item;
                }
            });

            k_Picture_Label = jsonSEARCH.features.length;
            document.querySelector("#Comments_1030").value = 'Image: ' + Picture_Label + " > Total: " + k_Picture_Label;
        }
    }
    // StreetFR
    if (CodeID_Label === "ALLData") {
        if (StreetFR_Label !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: StreetFR_Label }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.StreetFR.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_StreetFR_Label = jsonSEARCH.features.length;
            document.querySelector("#Comments_1030").value = 'Rue implantation: ' + StreetFR_Label + " > Total: " + k_StreetFR_Label;
        }
    }
    // Locality
    if (CodeID_Label === "ALLData") {
        if (Locality_Label !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: Locality_Label }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Locality.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_Locality_Label = jsonSEARCH.features.length;
            document.querySelector("#Comments_1030").value = 'Commune: ' + Locality_Label + " > Total: " + k_Locality_Label;
        }
    }
    // Sector
    if (CodeID_Label === "ALLData") {
        if (Sector_Label !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: Sector_Label }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Sector.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_Sector_Label = jsonSEARCH.features.length;
            document.querySelector("#Comments_1030").value = 'Quartier: ' + Sector_Label + " > Total: " + k_Sector_Label;
        }
    }

    if (jsonSEARCH.features.length == 0) {
        alert("Il n'y a pas de pavés mosaiques répertoriée avec les valeurs de recherche sélectionnées.., modifiez les critères de recherche");
        ClearDataSearch();
    } else {
        var Marker1030_ALL = L.geoJSON([jsonSEARCH], {
            style: function (feature) {
                return feature.properties && feature.properties.style && feature.properties.CustomValue;
            },
            onEachFeature: onEachFeature,

            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: Icon1030 });
                //return L.circleMarker(latlng, geojsonMarkerOptions_00);
            }
        }); // .addTo(carte); ; inutile lors de lúti;isation des clusters
        GroupMarkersData1030_01.addLayer(Marker1030_ALL)

        Marker1030_ALL.on("click", function (event) {
            var clickedMarker = event.layer;
            // console.log(clickedMarker)
            MarkerDataView(clickedMarker)
        });

        HTMLTableViewer(jsonSEARCH);
    };
}

// END ======== Javascript FUnctions  ======== END \\

// BEGIN +++++++++++ TEST +++++++++++ BEGIN \\
//console.log(jsonALL)

//mylist = [{ Status_Label: "Abies alba" }];
//jsonSEARCH = {};
//jsonSEARCH.features = jsonALL.features.filter(item => {
//    if (mylist.filter(myitem => myitem.Status_Label === item.properties.Espece).length > 0) {
//        return item;
//    }
//});
//console.log(jsonSEARCH)
// END +++++++++++ TEST +++++++++++ END \\