let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 21.814, lng: -102.768 },
    zoom: 15,
  });
}

initMap();