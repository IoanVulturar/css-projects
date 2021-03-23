let map;
function initMap() {
  map = new google.maps.Map(document.querySelector(".map"), {
    center: { lat: 45.943161, lng: 24.966761 },
    zoom: 8,
  });
}