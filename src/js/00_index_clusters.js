// Generator Function for Cluster Groups
const createClusterGroup = (disableClusteringAtZoom, maxClusterRadius, color, className) => {
    return L.markerClusterGroup({
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: true,
        zoomToBoundsOnClick: true,
        removeOutsideVisibleBounds: true,
        disableClusteringAtZoom: disableClusteringAtZoom,
        maxClusterRadius: maxClusterRadius,
        singleMarkerMode: false,
        polygonOptions: { color: color },
        iconCreateFunction: function(cluster) {
            const digits = (cluster.getChildCount() + '').length;
            return L.divIcon({
                html: cluster.getChildCount(),
                className: `${className} digits-${digits}`,
                iconSize: null
            });
        }
    });
};

// On ajoute de ClusterGroup
const GroupMarkersData1030_01 = createClusterGroup(20, 35, 'red', 'cluster02');
const GroupMarkersData1030_02 = createClusterGroup(17, 35, 'red', 'cluster01');
const GroupMarkersData1030_03 = createClusterGroup(17, 35, 'red', 'cluster03');
const GroupMarkersData1030_04 = createClusterGroup(17, 35, 'red', 'cluster04');
const GroupMarkersData1030_05 = createClusterGroup(18, 35, 'red', 'cluster45');

const GroupMarkersData1030_06 = createClusterGroup(15, 45, 'blue', 'cluster45');

const GroupMarkersData1030_07 = createClusterGroup(17, 45, 'red', 'cluster05');
const GroupMarkersData1030_08 = createClusterGroup(17, 45, 'red', 'cluster05');