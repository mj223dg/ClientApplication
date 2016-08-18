angular
  .module("event-map")
  .controller("SingleEventController", SingleEventController);

function SingleEventController(EventService, $stateParams) {
  var self = this;
  console.log("SingleEventController");
  EventService.getEventById($stateParams.id)
    .then(function(response) {
      console.log(response);
      self.event = response.data;
    })
    .catch(function(error) {
      console.log(error);
    })

}
