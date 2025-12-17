// Helper to clear fields
const clearFields = (ids, suffix = '_1030') => {
	ids.forEach(id => {
		const el = document.querySelector(`#${id}${suffix}`);
		if (el) el.value = "";
	});
};

function ClearData() {
	if (typeof layerGroup !== 'undefined' && layerGroup) {
		layerGroup.clearLayers();
	}
	if (typeof markerReal !== 'undefined' && markerReal) {
		carte.removeLayer(markerReal);
	}

	const fields = ['CodeID', 'TilesNumber', 'Status', 'Artist', 'Year', 'Comments', 'StreetFR', 'HouseNumber', 'Locality', 'Sector', 'FullAdress', 'Latitude', 'Longitude'];
	clearFields(fields);
}

function ClearData01() {
	const fields = ['CodeID', 'TilesNumber', 'Status', 'Artist', 'Year', 'Comments', 'StreetFR', 'HouseNumber', 'Locality', 'Sector', 'FullAdress', 'Latitude', 'Longitude'];
	clearFields(fields);
};

function Return() {
	window.open("00_Carte_PavesMosaiquesSchaerbeek_ALL_20.html");
	window.close("00_Carte_PavesMosaiquesSchaerbeek_ALL_30.html");
}

function ReloadData() {
	window.close("Carte_ArbresGereesSchaerbeek_ALL_30.html");
	window.open("Carte_ArbresGereesSchaerbeek_ALL_30.html");
}


function ClearDataSearch() {
	if (typeof layerGroup !== 'undefined' && layerGroup) {
		layerGroup.clearLayers();
	}
	if (typeof markerReal !== 'undefined' && markerReal) {
		carte.removeLayer(markerReal);
	}

	// Picture included in Search
	const fields = ['CodeID', 'TilesNumber', 'Status', 'Artist', 'Year', 'Comments', 'StreetFR', 'HouseNumber', 'Locality', 'Sector', 'Picture', 'FullAdress', 'Latitude', 'Longitude'];
	clearFields(fields);

	LoadALLData();
}

function ClearData02() {
	// This function used different IDs (Arb suffix).
	// Logic: if Label variable is empty, clear value, else reset to Label.
	// This logic is conditional resetting, not just clearing.
	// I will simplify using a similar helper if possible, or just optimize standard clearing.

	const maybeReset = (id, labelVar) => {
		const el = document.querySelector(`#${id}`);
		if (el) el.value = (labelVar === "") ? "" : labelVar;
	}

	// Assuming global variables NumidLabel etc exist
	maybeReset('NumidArb', typeof NumidLabel !== 'undefined' ? NumidLabel : "");
	maybeReset('EspeceArb', typeof EspeceLabel !== 'undefined' ? EspeceLabel : "");
	maybeReset('StatutArb', typeof StatutLabel !== 'undefined' ? StatutLabel : "");
	maybeReset('DangerArb', typeof DangerLabel !== 'undefined' ? DangerLabel : "");
	maybeReset('StructureArb', typeof StructureLabel !== 'undefined' ? StructureLabel : "");
	maybeReset('LieuPlantaArb', typeof LieuPlantaLabel !== 'undefined' ? LieuPlantaLabel : "");
	maybeReset('TypeLieuPlantaArb', typeof TypeLieuPlantaLabel !== 'undefined' ? TypeLieuPlantaLabel : "");
	maybeReset('TypeEnvirArb', typeof TypeEnvirLabel !== 'undefined' ? TypeEnvirLabel : "");
	maybeReset('TypeDistrArb', typeof TypeDistrLabel !== 'undefined' ? TypeDistrLabel : "");

	// Fields to always clear
	const clearList = ['DatePlantArb', 'LatitudeArb', 'LongitudeArb', 'AdresseArb', 'CirconfArb', 'HauterArb', 'MultiTroncArb', 'DiamCourArb', 'CommentairesArb'];
	clearList.forEach(id => {
		const el = document.querySelector(`#${id}`);
		if (el) el.value = "";
	});
};


function ClearDataSearchTable() {
	const fields = ['CodeID', 'TilesNumber', 'Status', 'Artist', 'Year', 'Comments', 'StreetFR', 'Picture', 'HouseNumber', 'Locality', 'Sector', 'FullAdress', 'Latitude', 'Longitude'];
	clearFields(fields);

	window.open("00_Carte_PavesMosaiquesSchaerbeek_ALL_40.html");
	window.close();
}

function ClearDataSearchTableCarte() {
	const fields = ['CodeID', 'TilesNumber', 'Status', 'Artist', 'Year', 'Comments', 'StreetFR', 'Picture', 'HouseNumber', 'Locality', 'Sector', 'FullAdress', 'Latitude', 'Longitude'];
	clearFields(fields);

	LoadALLData();
	window.open("00_Carte_PavesMosaiquesSchaerbeek_ALL_42.html");
	window.close();
}