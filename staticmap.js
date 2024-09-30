let map;

function initMap() {
  const myLatLng = { lat: 21.814, lng: -102.768 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Universidad Tecnológica de Calvillo!",
  });
}

window.initMap = initMap;