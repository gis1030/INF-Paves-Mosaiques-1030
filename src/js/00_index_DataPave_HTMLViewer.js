function HTMLTableViewer(jsonSEARCH) {
    let geoJSON = []
    let featureNames = []
    let Data1030 = [];

    geoJSON = jsonSEARCH;
    //console.log(geoJSON);

    for (let i = 0; i < geoJSON.features.length; i++) {

        let Latitude = geoJSON.features[i].geometry.coordinates[1]
        let Longitude = geoJSON.features[i].geometry.coordinates[0]

        let currentFeature = geoJSON.features[i];

		let index = currentFeature.properties.index  //
		let CodeID = currentFeature.properties.CodeID  //Code ID
		let StreetFR = currentFeature.properties.StreetFR  //Nom de la voie
		let SaphirCode = currentFeature.properties.SaphirCode  //
		let HouseNumber = currentFeature.properties.HouseNumber  //Numéro
		let Locality = currentFeature.properties.Locality  //Commune
		let PostalCode = currentFeature.properties.PostalCode  //Code Postal
		let FullAddress = currentFeature.properties.FullAddress  //Adresses Complete
		let Sector = currentFeature.properties.Sector  //Quartier
		let Artist = currentFeature.properties.Artist  //Artiste
		let Year = currentFeature.properties.Year  //Année d'implantation
		let Status = currentFeature.properties.Status  //Status
		let TilesNumber = currentFeature.properties.TilesNumber  //Nombre de Pavés
		let Picture = currentFeature.properties.Picture  //Image
		let LinkPicture01 = currentFeature.properties.LinkPicture01  //
		let LinkPicture02 = currentFeature.properties.LinkPicture02  //
		let LinkPicture03 = currentFeature.properties.LinkPicture03  //
		let picturesNumber = currentFeature.properties.picturesNumber  //

        Data1030.push({
			CodeID : CodeID,
			StreetFR : StreetFR,
			HouseNumber : HouseNumber,
			Locality : Locality,
			PostalCode : PostalCode,
			FullAddress : FullAddress,
			Sector : Sector,
			Artist : Artist,
			Year : Year,
			Status : Status,
			TilesNumber : TilesNumber,
			Picture : Picture,
			Longitude : Longitude,
			Latitude : Latitude,
        });
    }

    let res = document.querySelector('#res');
    res.innerHTML = '';

    for (let item of Data1030) {
        res.innerHTML += `
        <tr>
			<td>${item.CodeID}</td>
			<td>${item.StreetFR}</td>
			<td>${item.HouseNumber}</td>
			<td>${item.Locality}</td>
			<td>${item.PostalCode}</td>
			<td>${item.FullAddress}</td>
			<td>${item.Sector}</td>
			<td>${item.Artist}</td>
			<td>${item.Year}</td>
			<td>${item.Status}</td>
			<td>${item.TilesNumber}</td>
			<td>${item.Picture}</td>			
			<td>${item.Longitude}</td>
			<td>${item.Latitude}</td>
        </tr>
        `
    }

}

//  +++++++++++++ Exportacion e Importacion de archivos CSV +++++++++++++
// BEGIN ----------------------------------------------------------------
const toCsv = function(table) {
    // Query all rows
    const rows = table.querySelectorAll('tr');

    return [].slice.call(rows)
        .map(function(row) {
            // Query all cells
            const cells = row.querySelectorAll('th,td');
            return [].slice.call(cells)
                .map(function(cell) {
                    return cell.textContent;
                })
                .join(';');
        })
        .join('\n');
};

const download = function(text, fileName) {
    const link = document.createElement('a');
    link.setAttribute('href', `data:text/csv;charset=utf-8,${encodeURIComponent(text)}`);
    link.setAttribute('download', fileName);

    link.style.display = 'none';
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
};

const table = document.getElementById('exportMe');
const exportBtn = document.getElementById('export');

exportBtn.addEventListener('click', function() {
    // Export to csv
    const csv = toCsv(table);

    // Download it
    download(csv, 'Data1030.csv');
});

// END ------------------------------------------------------------------
//  +++++++++++++ Exportacion e Importacion de archivos CSV +++++++++++++