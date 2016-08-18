angular
  .module("event-map")
  .controller("MapController", MapController);

function MapController(NgMap, EventService, AuthenticationService) {
  var self = this;
  console.log(AuthenticationService.getCurrentUser());
  if (!AuthenticationService.getCurrentUser()) return; // prevent call to api if not logged in
  self.markers = [];
  self.popupWindow;

  NgMap
    .getMap()
    .then(function(map) {
      self.map = map;
      var latLng = new google.maps.LatLng({ lat: 60, lng: 20 });
      map.setCenter(latLng);

    })
    .then(EventService.getEvents)
    .then(function(response) {
      console.log(response.data.events);
      self.popupWindow = new google.maps.InfoWindow();
      self.map.addListener("click", closePopupWindow);
      var markers = [];
      response.data.events.forEach(function(event) {
        var marker = new google.maps.Marker({
          position: {
            lat: event.position.latitude,
            lng: event.position.longitude
          },
          map: self.map
        });
        markers.push(marker);
        marker.addListener("click", function() {
          var latLng = marker.getPosition();
          self.popupWindow.setContent("<p>" + event.name + "</p>");
          self.popupWindow.open(self.map, marker);
        })
      });
      return markers;
    })
    .then(function(markers) {
      self.markers = markers;
    })
    .catch(function(error) {

    });

  function closePopupWindow() {
    self.popupWindow.close();
  }
}
