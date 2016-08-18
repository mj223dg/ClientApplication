angular
  .module("event-map")
  .controller("SingleEventController", SingleEventController);

function SingleEventController(EventService, $stateParams) {
  var self = this;

  EventService.getEventById($stateParams.id)
    .then(function(response) {
      self.event = response.data.event;
    })
    .catch(function(error) {
      console.log(error);
    })

}
