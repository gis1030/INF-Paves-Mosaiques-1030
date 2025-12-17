function ClearData() {
    if (layerGroup) {
        layerGroup.clearLayers();
    }
    if (markerReal) {
        carte.removeLayer(markerReal);
    }

    document.querySelector("#NumidArb").value = ""
    document.querySelector("#EspeceArb").value = ""
    document.querySelector("#StatutArb").value = ""
    document.querySelector("#TypeLieuPlantaArb").value = ""
    document.querySelector("#DangerArb").value = ""
    document.querySelector("#DatePlantArb").value = ""
    document.querySelector("#LatitudeArb").value = ""
    document.querySelector("#LongitudeArb").value = ""
    document.querySelector("#AdresseArb").value = ""
    document.querySelector("#LieuPlantaArb").value = ""
    document.querySelector("#TypeEnvirArb").value = ""
    document.querySelector("#TypeDistrArb").value = ""
    document.querySelector("#CirconfArb").value = ""
    document.querySelector("#HauterArb").value = ""
    document.querySelector("#MultiTroncArb").value = ""
    document.querySelector("#DiamCourArb").value = ""
    document.querySelector("#StructureArb").value = ""
        //document.querySelector("#ImageArb").value 	=""
    document.querySelector("#CommentairesArb").value  = ""
}



function ClearData01() {
    document.querySelector("#NumidArb").value = ""
    document.querySelector("#EspeceArb").value = ""
    document.querySelector("#StatutArb").value = ""
    document.querySelector("#TypeLieuPlantaArb").value = ""
    document.querySelector("#DangerArb").value = ""
    document.querySelector("#DatePlantArb").value = ""
    document.querySelector("#LatitudeArb").value = ""
    document.querySelector("#LongitudeArb").value = ""
    document.querySelector("#AdresseArb").value = ""
    document.querySelector("#LieuPlantaArb").value = ""
    document.querySelector("#TypeEnvirArb").value = ""
    document.querySelector("#TypeDistrArb").value = ""
    document.querySelector("#CirconfArb").value = ""
    document.querySelector("#HauterArb").value = ""
    document.querySelector("#MultiTroncArb").value = ""
    document.querySelector("#DiamCourArb").value = ""
    document.querySelector("#StructureArb").value = ""
        //document.querySelector("#ImageArb").value 	=""
        // document.querySelector("#CommentairesArb").value  = ""
};

function Return() {
    window.open("Carte_ArbresGereesSchaerbeek_ALL_20.html");
    window.close("Carte_ArbresGereesSchaerbeek_ALL_30.html");
}

function ReloadData() {
    window.close("Carte_ArbresGereesSchaerbeek_ALL_30.html");
    window.open("Carte_ArbresGereesSchaerbeek_ALL_30.html");
}


function ClearDataSearch() {
    if (layerGroup) {
        layerGroup.clearLayers();
    }
    if (markerReal) {
        carte.removeLayer(markerReal);
    }

    document.querySelector("#NumidArb").value = ""
    document.querySelector("#EspeceArb").value = ""
    document.querySelector("#StatutArb").value = ""
    document.querySelector("#TypeLieuPlantaArb").value = ""
    document.querySelector("#DangerArb").value = ""
    document.querySelector("#DatePlantArb").value = ""
    document.querySelector("#LatitudeArb").value = ""
    document.querySelector("#LongitudeArb").value = ""
    document.querySelector("#AdresseArb").value = ""
    document.querySelector("#LieuPlantaArb").value = ""
    document.querySelector("#TypeEnvirArb").value = ""
    document.querySelector("#TypeDistrArb").value = ""
    document.querySelector("#CirconfArb").value = ""
    document.querySelector("#HauterArb").value = ""
    document.querySelector("#MultiTroncArb").value = ""
    document.querySelector("#DiamCourArb").value = ""
    document.querySelector("#StructureArb").value = ""
        //document.querySelector("#ImageArb").value 	=""
    document.querySelector("#CommentairesArb").value  = ""

    LoadALLData();
}

function ClearData02() {
    if (NumidLabel === "") {
        document.querySelector("#NumidArb").value = ""
    } else {
        document.querySelector("#NumidArb").value = NumidLabel
    }
    if (EspeceLabel === "") {
        document.querySelector("#EspeceArb").value = ""
    } else {
        document.querySelector("#EspeceArb").value = EspeceLabel
    }
    if (StatutLabel === "") {
        document.querySelector("#StatutArb").value = ""
    } else {
        document.querySelector("#StatutArb").value = StatutLabel
    }
    if (DangerLabel === "") {
        document.querySelector("#DangerArb").value = ""
    } else {
        document.querySelector("#DangerArb").value = DangerLabel
    }
    if (StructureLabel === "") {
        document.querySelector("#StructureArb").value = ""
    } else {
        document.querySelector("#StructureArb").value = StructureLabel
    }
    if (LieuPlantaLabel === "") {
        document.querySelector("#LieuPlantaArb").value = ""
    } else {
        document.querySelector("#LieuPlantaArb").value = LieuPlantaLabel
    }
    if (TypeLieuPlantaLabel === "") {
        document.querySelector("#TypeLieuPlantaArb").value = ""
    } else {
        document.querySelector("#TypeLieuPlantaArb").value = TypeLieuPlantaLabel
    }
    if (TypeEnvirLabel === "") {
        document.querySelector("#TypeEnvirArb").value = ""
    } else {
        document.querySelector("#TypeEnvirArb").value = TypeEnvirLabel
    }
    if (TypeDistrLabel === "") {
        document.querySelector("#TypeDistrArb").value = ""
    } else {
        document.querySelector("#TypeDistrArb").value = TypeDistrLabel
    }

    document.querySelector("#DatePlantArb").value = ""
    document.querySelector("#LatitudeArb").value = ""
    document.querySelector("#LongitudeArb").value = ""
    document.querySelector("#AdresseArb").value = ""
    document.querySelector("#CirconfArb").value = ""
    document.querySelector("#HauterArb").value = ""
    document.querySelector("#MultiTroncArb").value = ""
    document.querySelector("#DiamCourArb").value = ""
	//document.querySelector("#ImageArb").value 	=""
    document.querySelector("#CommentairesArb").value  = ""
};


function ClearDataSearchTable() {
    document.querySelector("#NumidArb").value = ""
    document.querySelector("#EspeceArb").value = ""
    document.querySelector("#StatutArb").value = ""
    document.querySelector("#TypeLieuPlantaArb").value = ""
    document.querySelector("#DangerArb").value = ""
    document.querySelector("#DatePlantArb").value = ""
    document.querySelector("#LatitudeArb").value = ""
    document.querySelector("#LongitudeArb").value = ""
    document.querySelector("#AdresseArb").value = ""
    document.querySelector("#LieuPlantaArb").value = ""
    document.querySelector("#TypeEnvirArb").value = ""
    document.querySelector("#TypeDistrArb").value = ""
    document.querySelector("#CirconfArb").value = ""
    document.querySelector("#HauterArb").value = ""
    document.querySelector("#MultiTroncArb").value = ""
    document.querySelector("#DiamCourArb").value = ""
    document.querySelector("#StructureArb").value = ""
    //document.querySelector("#ImageArb").value 	=""
    document.querySelector("#CommentairesArb").value  = ""

    //LoadALLData();
    window.open("Carte_ArbresGereesSchaerbeek_ALL_40.html");
    window.close();
}