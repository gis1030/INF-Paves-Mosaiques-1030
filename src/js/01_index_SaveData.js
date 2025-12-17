//Nous définissons la structure de notre variable GEOJson
var geojsonData = {
    "type": "FeatureCollection",
    "features": [{
			"id": "",
			"type": "Feature",
			"properties": {
				"index": "",
				"CodeID": "",
				"StreetFR": "",
				"SaphirCode": "",
				"HouseNumber": "",
				"Locality": "",
				"PostalCode": "",
				"FullAddress": "",
				"Sector": "",
				"Artist": "",
				"Year": "",
				"Status": "",
				"TilesNumber": "",
				"Picture": "",
				"LinkPicture01": "",
				"LinkPicture02": "",
				"LinkPicture03": "",
				"LinkPicture04": "",
				"picturesNumber": "",
				"Commentaires ":"",
				"Longitude": "",
				"Latitude": "",
			},
			"geometry": {
				"type": "Point",
				"coordinates": []
        }
    }]
};

function SaveData() {
    let tmp01 = document.getElementById("CodeID_1030").value;
    let tmp02 = document.getElementById("TilesNumber_1030").value;
    let tmp03 = document.getElementById("Status_1030").value;
    let tmp04 = document.getElementById("Artist_1030").value;

    let tmp05 = document.getElementById("StreetFR_1030").value;
    let tmp06 = document.getElementById("HouseNumber_1030").value;
    let tmp07 = document.getElementById("Locality_1030").value;
    let tmp08 = document.getElementById("Sector_1030").value;
	
	let tmp09 = document.getElementById("Year_1030").value;
	let tmp10 = document.getElementById("Comments_1030").value;
	

    if (tmp01 == "" || tmp02 == "" || tmp03 == "" || tmp04 == "" || tmp05 == "" || tmp06 == "" || tmp07 == "" || tmp08	== "" || tmp09 == "" || tmp10	== "") {
        alert("... SVP, Remplissez tous les champs!")
    } else {
        let tmp20 = document.querySelector("#Latitude_1030").value
        let tmp21 = document.querySelector("#Longitude_1030").value;

		let tmp02 = document.querySelector("#TilesNumber_1030").value;
		let tmp03 = document.querySelector("#Status_1030").value;
		let tmp04 = document.querySelector("#Artist_1030").value;
		let tmp05 = document.querySelector("#Year_1030").value;
		let tmp06 = document.querySelector("#StreetFR_1030").value;
		let tmp07 = document.querySelector("#HouseNumber_1030").value;
		let tmp08 = document.querySelector("#Comments_1030").value;
		let tmp09 = document.querySelector("#Locality_1030").value;
		let tmp10 = document.querySelector("#Sector_1030").value;
		let tmp11 = document.querySelector("#FullAdress_1030").value;
		let tmp12 = document.querySelector("#Latitude_1030").value;
		let tmp13 = document.querySelector("#Longitude_1030").value;
		let tmp14 = tmp06 + " " + tmp07 + ", 1030" + tmp09

        k = 0;
        geojsonData.features[k].id =  tmp01;
        geojsonData.features[k].geometry.coordinates[1] = tmp11;
        geojsonData.features[k].geometry.coordinates[0] = tmp12;
        geojsonData.features[k].properties.CodeID = tmp01;
        geojsonData.features[k].properties.StreetFR = tmp06;
        geojsonData.features[k].properties.SaphirCode = "0000";
        geojsonData.features[k].properties.HouseNumber = tmp07;
        geojsonData.features[k].properties.Locality = tmp09;
        geojsonData.features[k].properties.PostalCode = "1030";
        geojsonData.features[k].properties.FullAddress = tmp14;
        geojsonData.features[k].properties.Sector = tmp10;
        geojsonData.features[k].properties.Artist = tmp04;
        geojsonData.features[k].properties.Year = tmp05;
        geojsonData.features[k].properties.Status = tmp03;
        geojsonData.features[k].properties.TilesNumber = "";
        geojsonData.features[k].properties.Picture = "";
        geojsonData.features[k].properties.LinkPicture01 = "";
        geojsonData.features[k].properties.LinkPicture02 = "";
        geojsonData.features[k].properties.LinkPicture03 = "";
        geojsonData.features[k].properties.LinkPicture04 = "";
        geojsonData.features[k].properties.picturesNumber = "";
        geojsonData.features[k].properties.Commentaires = tmp08;
        geojsonData.features[k].properties.Longitude = tmp20;
        geojsonData.features[k].properties.Latitude = tmp21;
		//console.log(geojsonData)

        // Base de données des nouveaux arbres 
        var JSONData_00 = Marker1030_NEW.toGeoJSON();

        // Fusion de donnes GeoJSON
        JSONData_FUSION = concatGeoJSON(geojsonData, JSONData_00)
        JSONData_FUSION = JSON.stringify(JSONData_FUSION);
        JSONData_FUSION = "var ListePavesMosaiques1030_NEW = " + JSONData_FUSION //+ "\n" + geojsonData
        SaveData_02(JSONData_FUSION, "GeoJSON_NewData.json", 'text/plain')

        setTimeout(ClearData, 1000)
            //alert("...toutes les champs sont sauvegarde!")
    }

    window.open("00_Carte_PavesMosaiquesSchaerbeek_ALL_20.html");
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