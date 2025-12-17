//Nous définissons la structure de notre variable GEOJson
var geojsonData = {
    // "name": "NewFeatureType",
    "type": "FeatureCollection",
    "features": [{
        "id": "",
        "type": "Feature",
        "properties": {
            "popupContent": "",
            "Numident": "",
            "Espece": "",
            "Statut_arbre": "",
            "Type_lieu": "",
            "Danger": "",
            "Date_plantation": "",
            "Adresse": "",
            "Type_sol": "",
            "Environnement": "",
            "Distribution": "",
            "Circonference": "",
            "Hauteur": "",
            "Troncs_multiples": "",
            "Diametre_couronne": "",
            "Structure": "",
            "Image": "",
            "Commentaires": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": []
        }
    }]
};

// Base de données des nouveaux arbres à mettre à jour

function SaveData() {
	window.alert("por aqui paso...");
};

function SaveDataTMP() {
    let tmp01 = document.getElementById("NumidArb").value;
    let tmp02 = document.getElementById("EspeceArb").value;
    let tmp03 = document.getElementById("DatePlantArb").value;
    let tmp04 = document.getElementById("StatutArb").value;

    if (tmp01 == "" || tmp02 == "" || tmp03 == "" || tmp04 == "") {
        alert("... SVP, Remplissez tous les champs!")
    } else {
        let tmp05 = document.querySelector("#LatitudeArb").value
        let tmp06 = document.querySelector("#LongitudeArb").value;


        k = 0;
        geojsonData.features[k].id = document.querySelector("#NumidArb").value;
        geojsonData.features[k].geometry.coordinates[1] = tmp05;
        geojsonData.features[k].geometry.coordinates[0] = tmp06;
        geojsonData.features[k].properties.popupContent = document.querySelector("#EspeceArb").value;
        geojsonData.features[k].properties.Numident = document.querySelector("#NumidArb").value;
        geojsonData.features[k].properties.Espece = document.querySelector("#EspeceArb").value;
        geojsonData.features[k].properties.Statut_arbre = document.querySelector("#StatutArb").value;
        geojsonData.features[k].properties.Type_lieu = document.querySelector("#TypeLieuPlantaArb").value;
        geojsonData.features[k].properties.Danger = document.querySelector("#DangerArb").value;
        geojsonData.features[k].properties.Date_plantation = document.querySelector("#DatePlantArb").value;
        geojsonData.features[k].properties.Adresse = document.querySelector("#AdresseArb").value;
        geojsonData.features[k].properties.Type_sol = document.querySelector("#LieuPlantaArb").value;
        geojsonData.features[k].properties.Environnement = document.querySelector("#TypeEnvirArb").value;
        geojsonData.features[k].properties.Distribution = document.querySelector("#TypeDistrArb").value;
        geojsonData.features[k].properties.Circonference = document.querySelector("#CirconfArb").value;
        geojsonData.features[k].properties.Hauteur = document.querySelector("#HauterArb").value;
        geojsonData.features[k].properties.Troncs_multiples = document.querySelector("#MultiTroncArb").value;
        geojsonData.features[k].properties.Diametre_couronne = document.querySelector("#DiamCourArb").value;
        geojsonData.features[k].properties.Structure = document.querySelector("#StructureArb").value;
        geojsonData.features[k].properties.Commentaires = document.querySelector("#CommentairesArb").value;
        //console.log(geojsonData)

        // Base de données des nouveaux arbres 
        var JSONData_00 = Marker1030_NEW.toGeoJSON();

        // Fusion de donnes GeoJSON
        JSONData_FUSION = concatGeoJSON(geojsonData, JSONData_00)
        JSONData_FUSION = JSON.stringify(JSONData_FUSION);
        JSONData_FUSION = "var ListTreesMarkers1030_NEW = " + JSONData_FUSION //+ "\n" + geojsonData
        SaveData_02(JSONData_FUSION, "GeoJSON_NewData.json", 'text/plain')

        setTimeout(ClearData, 1000)
            //alert("...toutes les champs sont sauvegarde!")
    }

    window.open("VCarte_ArbresGereesSchaerbeek_ALL_20.html");
}

function SaveData_02(data, filename, type) {
    var file = new Blob([data], {
        type: type
    });

    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);

        a.href = url;
        a.download = filename;
        document.body.appendChild(a);

        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

function concatGeoJSON(GeoJSON_01, GeoJSON_02) {
    return {
        "type": "FeatureCollection",
        "features": [...GeoJSON_01.features, ...GeoJSON_02.features]
    }
}