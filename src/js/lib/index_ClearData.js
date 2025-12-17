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
        //document.querySelector("#CommentairesArb").value 	=""
}