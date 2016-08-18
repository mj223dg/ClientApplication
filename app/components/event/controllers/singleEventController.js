angular
  .module("event-map")
  .controller("SingleEventController", SingleEventController);

function SingleEventController(EventService, $stateParams) {
  var self = this;

  EventService.getEventById($stateParams.id)
    .then(function(response) {
      console.log(response);
      self.event = response.data;
    })
    .catch(function(error) {
      console.log(error);
    })

}
