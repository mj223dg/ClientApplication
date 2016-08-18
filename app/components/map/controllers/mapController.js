angular
  .module("event-map")
  .controller("MapController", MapController);

function MapController(NgMap, EventService) {
  var self = this;
  self.markers = [];
  self.popupWindow;

  NgMap
    .getMap()
    .then(function(map) {
      self.map = map;

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
