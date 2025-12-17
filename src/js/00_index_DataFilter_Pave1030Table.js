// ++++++ Liste des Marqueurs ++++++++

// ListePavesMosaiques1030_NEW >> GeoJSON_NewData.json
// ListePavesMosaiques1030 >> 01_PavesMosaiques1030_Databases.js

if (typeof CodeID_Label === 'undefined' || Artist_Label === 'undefined' || Status_1030 === 'undefined' ||
    Year_Label === 'undefined' || Picture_Label === 'undefined' ||
    StreetFR_Label === 'undefined' || Locality_Label === 'undefined' ||
    Sector_Label === 'undefined') {

    var CodeID_Label = ""
    var Artist_Label = ""
    var Status_1030 = ""
    var Year_Label = ""
    var Picture_Label = ""
    var StreetFR_Label = ""
    var Locality_Label = ""
    var Sector_Label = ""
	
	/*
    var Marker1030 = L.geoJSON([ListePavesMosaiques1030], {
        style: function(feature) {
            return feature.properties && feature.properties.style && feature.properties.CustomValue;
        },
    })

    var Marker1030_NEW = L.geoJSON([ListePavesMosaiques1030_NEW], {
        style: function(feature) {
            return feature.properties && feature.properties.style && feature.properties.CustomValue;
        },
    })
	
    var Marker1030_00 = Marker1030
    var Marker1030_NEW_00 = Marker1030_NEW
	var Marker1030_ALL_00 = Marker1030_ALL
	var Marker1030_ALL_00 = Marker1030
	*/
	
	/*
    // concatenar los archivos GEOJson des arbres 1030
    // var json1 = ListePavesMosaiques1030
    // var json2 = ListePavesMosaiques1030_NEW
	
    var jsonALL = {};
    jsonALL = concatGeoJSON(ListePavesMosaiques1030, ListePavesMosaiques1030_NEW)
	*/

	var jsonALL = {};
	jsonALL = ListePavesMosaiques1030

    var Marker1030_ALL = L.geoJSON([jsonALL], {
        filter: function(feature, layer) {
            return (feature.properties.TilesNumber !== "ALL" && feature.properties.Status !== "ALL");
        },
    })
	// window.alert("por aqui paso 00");
}

// BEGIN ======== Javascript FUnctions  ======== BEGIN 
function concatGeoJSON(g1, g2) {
    return {
        "type": "FeatureCollection",
        "features": g1.features.concat(g2.features)
    }
}

function SearchData() {
    var CodeID_Label = document.getElementById("CodeID_1030").value;	// window.alert("CodeID_1030");
    var Artist_Label = document.getElementById("Artist_1030").value;	// window.alert("Artist_1030");
    var Year_Label = document.getElementById("Year_1030").value;	// window.alert("Year_Label");
    var Picture_Label = document.getElementById("Picture_1030").value;	// window.alert("Picture_Label");
    var StreetFR_Label = document.getElementById("StreetFR_1030").value;	// window.alert("StreetFR_Label");
    var Locality_Label = document.getElementById("Locality_1030").value;	// window.alert("Locality_Label");
    var Sector_Label = document.getElementById("Sector_1030").value; 	// window.alert("Sector_Label");
    var Status_1030 = document.getElementById("Status_1030").value;	// window.alert("Statuts_1030");

    //on initialise les labels
    if (CodeID_Label == "") {
        CodeID_Label = "ALLData";
    }
    if (Artist_Label == "") {
        Artist_Label = "ALLData";
    }
    if (Status_1030 == "") {
        Status_1030 = "ALLData";
    }
    if (Year_Label == "") {
        Year_Label = "ALLData";
    }
    if (Picture_Label == "") {
        Picture_Label = "ALLData";
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
	
	// window.alert("por aqui paso 02");

    // on initialise les compteurs
    var k_CodeID_Label = 0;
    var k_Artist_Label = 0;
    var k_Status_1030 = 0;
    var k_Year_Label = 0;
    var k_Picture_Label = 0;
    var k_StreetFR_Label = 0;
    var k_Locality_Label = 0;
    var k_Sector_Label = 0;

    // On reinitialise les layers >> Points
    var jsonALL_00 = 0;

    // >>> recherche unique par numéro d'identification <<< 
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
    // Artist
    if (CodeID_Label === "ALLData") {
        if (Artist_Label !== "ALLData") {
            jsonSEARCH = {};
            jsonALL_00 = jsonALL;
            mylist = [{ SearchLabel: Artist_Label }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Artist.toLowerCase()).length > 0) {
                    return item;
                }
            });
            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.Artist.toLowerCase().includes(Artist_Label.toLowerCase()));
            // console.log(jsonSEARCH.features)

            k_Artist_Label = jsonSEARCH.features.length;
            document.querySelector("#Comments_1030").value = 'Artiste: ' + Artist_Label + " > Total: " + k_Artist_Label;
        }
    }
    // Statut
    if (CodeID_Label === "ALLData") {
        if (Status_1030 !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: Status_1030 }];
            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Status.toLowerCase()).length > 0) {
                    return item;
                }
            });

            k_Status_1030 = jsonSEARCH.features.length;
            document.querySelector("#Comments_1030").value = 'Status Pavés: ' + Status_1030 + " > Total: " + k_Status_1030;
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
    //Sector
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
            document.querySelector("#Comments_1030").value = 'Sector: ' + Sector_Label + " > Total: " + k_Sector_Label;
        }
    }
    // END <<<< recherche multiple >>> \\
	
	//window.alert(jsonSEARCH.features.length);

    if (jsonSEARCH.features.length == 0) {
        alert("Il n'y a pas de paves répertoriée avec les valeurs de recherche sélectionnées.., modifiez les critères de recherche");
        ClearDataSearch();
    } else {
        HTMLTableViewer(jsonSEARCH);
    };
};