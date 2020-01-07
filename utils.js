const getUserLocation = (options) =>
    new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    })



const toLatLng = (obj) => new Promise((resolve, reject) => {
    const resObj = {};
    resObj.lat = obj.coords.latitude;
    resObj.lng = obj.coords.longitude
    resolve(resObj);
})

const createMap = (id, zoom, center) => new google.maps.Map(document.getElementById(id), {
    zoom: zoom,
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

const createMarker = (position,opts) => new google.maps.Marker({
    position: position,
    ...opts
});

const createMarkersCluster = (map, markers) => new MarkerClusterer(map, markers, {
    imagePath: 'images/m'
});

const bikesRequset = async () => (await fetch('http://api.citybik.es/v2/networks')).json();