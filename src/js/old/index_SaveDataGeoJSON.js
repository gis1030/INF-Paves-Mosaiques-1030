var selectedGeoJSON_NEW = Marker1030_NEW.toGeoJSON();
var JSONData = JSON.stringify(selectedGeoJSON_NEW);
if (type) {
    var type = 'text/plain'
}
//ajoute le nom de la variable à la base de données 
// et et le répertoire de sauvegarde au nom de fichier
var JSONData = "var ListTreesMarkers1030_NEW = " + JSONData

/*
function SaveData_01(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {
        type: contentType
    });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
// SaveData_01(JSONData, 'JSONData_01.txt', 'text/plain');
*/

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
//SaveData_02(JSONData, 'JSONData_02.js', 'text/plain');