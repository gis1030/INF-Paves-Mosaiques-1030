//On charge les "tuiles"

// Factory for WMS Layers
const createWMSLayer = (url, layers, minZoom = 10, maxZoom = 20, format = 'image/png', transparent = true) => {
    return L.tileLayer.wms(url, {
        layers: layers,
        version: '1.3.0',
        format: format,
        transparent: transparent,
        minZoom: minZoom,
        maxZoom: maxZoom,
        srs: 'EPSG:4326'
    });
};

// UrbisFR - CIRB
const carte00 = createWMSLayer('https://geoservices-urbis.irisnet.be/geoserver/wms?', 'urbisFR', 11, 20, undefined, undefined); // Default format/transparent might be undefined/false in original? Original didn't specify format/transparent

// Correcting factory to match original exactly where needed or use defaults smarty
// Original carte00 only had layers, version, min/max, srs.
// carte00B had format png, transparent true.
// I will create a specific factory for the common Urbis/Urban pattern

const createUrbisLayer = (url, layers, minZoom, transparent = false) => {
    const options = {
        layers: layers,
        version: '1.3.0',
        minZoom: minZoom,
        maxZoom: 20,
        srs: 'EPSG:4326'
    };
    if (transparent) {
        options.format = 'image/png';
        options.transparent = true;
    }
    return L.tileLayer.wms(url, options);
}

// UrbisFR - CIRB
// const carte00 = createUrbisLayer('https://geoservices-urbis.irisnet.be/geoserver/wms?', 'urbisFR', 11);

//Layers : ...
const carte00B = createUrbisLayer('https://gis.urban.brussels/geoserver/wms?', 'CIRB_URBIS:urbisFRGray,CIRB_URBIS:Limite_regionale,CIRB_URBIS:Limites_communales', 10, true);

const carte00D = createUrbisLayer('https://gis.urban.brussels/geoserver/wms?', 'CIRB_URBIS:urbisFR,CIRB_URBIS:Limite_regionale,CIRB_URBIS:Limites_communales', 10);

const carte00E = createUrbisLayer('https://gis.urban.brussels/geoserver/wms?', 'CIRB_URBIS:urbisFR', 10);


// +++++ URBIS >> JOSM ++++++++++++++++++++++++++++++++++
// Different pattern (Request GetMap etc). Leaving as explicit or creating another factory?
// They are similar: carteAA, carteBB, carteCC.
const createUrbisJOSMLayer = (layers, minZoom = 10, maxZoom = 20) => {
    return L.tileLayer.wms('https://geoservices-urbis.irisnet.be/geoserver/ows?', {
        SERVICE: 'WMS',
        VERSION: '1.3.0',
        REQUEST: 'GetMap',
        FORMAT: 'image/png',
        TRANSPARENT: true,
        LAYERS: layers,
        srs: 'EPSG:4326',
        minZoom: minZoom,
        maxZoom: maxZoom
    });
};

const carteAA = createUrbisJOSMLayer('urbisFRNL');
const carteBB = createUrbisJOSMLayer('Urbis:Ortho');
const carteCC = createUrbisJOSMLayer('UrbisAdm:Ortho2022Ns');


// +++++ OpenStreetMap ++++++++++++++++++++++++++++++++++
const carte01 = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 10,
    maxZoom: 19,
    id: 'mapbox/streets-v15',
});

// +++++ Google ++++++++++++++++++++++++++++++++++
const createGoogleLayer = (lyrsParams) => {
    return L.tileLayer(`http://{s}.google.com/vt/lyrs=${lyrsParams}&x={x}&y={y}&z={z}`, {
        attribution: 'données © <a href="//google.com/maps">Google Maps</a>',
        minZoom: 10,
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });
};

// Google Terrain > terrain : p
const carte02 = createGoogleLayer('p');
// Google Streets > standard roadmap : m
const carte03 = createGoogleLayer('m');
// Google Satellite > satelite only : s
const carte04 = createGoogleLayer('s');
// Google Hybrid > Hybrid : y
// var carte05 = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
const carte05 = createGoogleLayer('y');
// Google Terrain-Cycle > terrain With Cycle : t
const carte06 = createGoogleLayer('t@127,r@161183078,bike');
// Google Streets-Cycle
const carte07 = createGoogleLayer('m@159185939,bike');
// Google Traffic
const carte08 = createGoogleLayer('m@221097413,traffic');


// On initialise la carte 
const carte = L.map('maCarte', { layers: [carte02] }).setView([50.8621, 4.3830651582691456], 12.5);