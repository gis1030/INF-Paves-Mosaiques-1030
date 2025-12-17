// On ajoute de ClusterGroup
var GroupMarkersTrees1030 = L.markerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: true,
    zoomToBoundsOnClick: true,
    removeOutsideVisibleBounds: true,
    disableClusteringAtZoom: 17,
    maxClusterRadius: 45,
    singleMarkerMode: false,
    polygonOptions: { color: 'red' },
    iconCreateFunction: function(cluster) {
        var digits = (cluster.getChildCount() + '').length;
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'cluster02 digits-' + digits,
            iconSize: null
        });
    }
});

var GroupMarkersRemarkableTrees1030 = L.markerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: true,
    zoomToBoundsOnClick: true,
    removeOutsideVisibleBounds: true,
    disableClusteringAtZoom: 17,
    maxClusterRadius: 35,
    singleMarkerMode: false,
    polygonOptions: { color: 'red' },
    iconCreateFunction: function(cluster) {
        var digits = (cluster.getChildCount() + '').length;
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'cluster01 digits-' + digits,
            iconSize: null
        });
    }
});

var GroupMarkersAlignmentTrees1030 = L.markerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: true,
    zoomToBoundsOnClick: true,
    removeOutsideVisibleBounds: true,
    disableClusteringAtZoom: 17,
    maxClusterRadius: 35,
    singleMarkerMode: false,
    polygonOptions: { color: 'red' },
    iconCreateFunction: function(cluster) {
        var digits = (cluster.getChildCount() + '').length;
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'cluster03 digits-' + digits,
            iconSize: null
        });
    }
});

var GroupMarkersTrees1030_NEW = L.markerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: true,
    zoomToBoundsOnClick: true,
    removeOutsideVisibleBounds: true,
    disableClusteringAtZoom: 17,
    maxClusterRadius: 35,
    singleMarkerMode: false,
    polygonOptions: { color: 'red' },
    iconCreateFunction: function(cluster) {
        var digits = (cluster.getChildCount() + '').length;
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'cluster04 digits-' + digits,
            iconSize: null
        });
    }
});

var GroupMarkersTrees1030_Cimetiere = L.markerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: true,
    zoomToBoundsOnClick: true,
    removeOutsideVisibleBounds: true,
    disableClusteringAtZoom: 18,
    maxClusterRadius: 35,
    singleMarkerMode: false,
    polygonOptions: { color: 'red' },
    iconCreateFunction: function(cluster) {
        var digits = (cluster.getChildCount() + '').length;
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'cluster45 digits-' + digits,
            iconSize: null
        });
    }
});


var GroupMarkersTrees1030_ALL = L.markerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: true,
    zoomToBoundsOnClick: true,
    removeOutsideVisibleBounds: true,
    disableClusteringAtZoom: 17,
    maxClusterRadius: 45,
    singleMarkerMode: false,
    polygonOptions: { color: 'red' },
    iconCreateFunction: function(cluster) {
        var digits = (cluster.getChildCount() + '').length;
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'cluster05 digits-' + digits,
            iconSize: null
        });
    }
});

var GroupMarkersTrash1030 = L.markerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: true,
    zoomToBoundsOnClick: true,
    removeOutsideVisibleBounds: true,
    disableClusteringAtZoom: 17,
    maxClusterRadius: 45,
    singleMarkerMode: false,
    polygonOptions: { color: 'red' },
    iconCreateFunction: function(cluster) {
        var digits = (cluster.getChildCount() + '').length;
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'cluster05 digits-' + digits,
            iconSize: null
        });
    }
});

var GroupMarkersTrash1030_ALL = L.markerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: true,
    zoomToBoundsOnClick: true,
    removeOutsideVisibleBounds: true,
    disableClusteringAtZoom: 17,
    maxClusterRadius: 45,
    singleMarkerMode: false,
    polygonOptions: { color: 'red' },
    iconCreateFunction: function(cluster) {
        var digits = (cluster.getChildCount() + '').length;
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'cluster05 digits-' + digits,
            iconSize: null
        });
    }
});