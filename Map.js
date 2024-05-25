var map;
var kmlLayer;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -25.363, lng: 131.044},
        zoom: 8
    });

    kmlLayer = new google.maps.KmlLayer({
        url: 'https://YOUR_GOOGLE_DRIVE_LINK_TO_KML_FILE',
        map: map
    });
}

function findHouse() {
    var blockNumber = document.getElementById('blockNumber').value;
    var houseNumber = document.getElementById('houseNumber').value;
    var searchTerm = 'Block: ' + blockNumber + ' House: ' + houseNumber;

    kmlLayer.setOptions({
        preserveViewport: true
    });

    kmlLayer.addListener('click', function(kmlEvent) {
        var text = kmlEvent.featureData.description;
        if (text.includes(searchTerm)) {
            var latLng = kmlEvent.latLng;
            map.setCenter(latLng);
            map.setZoom(16);
        }
    });
}

google.maps.event.addDomListener(window, 'load', initMap);
