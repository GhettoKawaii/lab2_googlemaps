let map;

function initMap() {
    getUserLocation({
            enableHighAccuracy: true
        })
        .then(toLatLng)
        .then(upos => {
            map = createMap('map', 15, upos);
            console.log(upos);
            const marker = createMarker(upos, {
                map: map
            });
            return new Promise((resolve, reject) => {
                resolve(upos);
            })
        })
        .then(bikesRequset)
        .then(res => {
            createMarkersCluster(map, res.networks.map(item => {
                const lat = item.location.latitude;
                const lng = item.location.longitude;
                return createMarker({
                    lat,
                    lng
                });
            }))

        });
}