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

        let Numident = currentFeature.properties.Numident; //ID-Code
        let Espece = currentFeature.properties.Espece; //Espèce
        let Statut_arbre = currentFeature.properties.Statut_arbre; //Statut de l-arbre
        let Type_lieu = currentFeature.properties.Type_lieu; //Type de lieu de plantation
        let Danger = currentFeature.properties.Danger; //Danger de l-arbre
        let Date_plantation = currentFeature.properties.Date_plantation; //Date de plantation
        let Adresse = currentFeature.properties.Adresse; //Adresse de référence (plantation)
        let Type_sol = currentFeature.properties.Type_sol //Lieu de plantation
        let Environnement = currentFeature.properties.Environnement; //Environnement
        let Distribution = currentFeature.properties.Distribution; //Distribution
        let Circonference = currentFeature.properties.Circonference; //Circonférence de l-arbre (cm)
        let Hauteur = currentFeature.properties.Hauteur; //Hauteur
        let Troncs_multiples = currentFeature.properties.Troncs_multiples; //Troncs multiples
        let Diametre_couronne = currentFeature.properties.Diametre_couronne; //Diamètre de la couronne
        let Structure = currentFeature.properties.Structure; //Structure de l-arbre
        let Commentaires = currentFeature.properties.Commentaires; //Commentaires
		
        Data1030.push({
			Numident : Numident,
			Espece : Espece,
			Statut_arbre : Statut_arbre,
			Type_lieu : Type_lieu,
			Danger : Danger,
			Date_plantation : Date_plantation,
			Adresse : Adresse,
			Type_sol : Type_sol,
			Environnement : Environnement,
			Distribution : Distribution,
			Circonference : Circonference,
			Hauteur : Hauteur,
			Troncs_multiples : Troncs_multiples,
			Diametre_couronne : Diametre_couronne,
			Structure : Structure,
			Commentaires : Commentaires,
            Latitude: Latitude,
            Longitude: Longitude,
        });
    }

    let res = document.querySelector('#res');
    res.innerHTML = '';

    for (let item of Data1030) {
        res.innerHTML += `
        <tr>
			<td>${item.Numident}</td>
			<td>${item.Espece}</td>
			<td>${item.Statut_arbre}</td>
			<td>${item.Type_lieu}</td>
			<td>${item.Danger}</td>
			<td>${item.Date_plantation}</td>
			<td>${item.Adresse}</td>
			<td>${item.Type_sol}</td>
			<td>${item.Environnement}</td>
			<td>${item.Distribution}</td>
			<td>${item.Circonference}</td>
			<td>${item.Hauteur}</td>
			<td>${item.Troncs_multiples}</td>
			<td>${item.Diametre_couronne}</td>
			<td>${item.Structure}</td>
			<td>${item.Commentaires}</td>
			<td>${item.Latitude}</td>
			<td>${item.Longitude}</td>
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
                .join(',');
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