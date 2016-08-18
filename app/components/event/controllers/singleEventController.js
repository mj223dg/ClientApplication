angular
  .module("event-map")
  .controller("SingleEventController", SingleEventController);

function SingleEventController(EventService, $stateParams, Flash) {
  var self = this;
  console.log("SingleEventController");
  EventService.getEventById($stateParams.id)
    .then(function(response) {
      console.log(response);
      self.event = response.data;

    })
    .catch(function(error) {
      var message = "<p>Something went wrong when fetching data from the API. Try again later!</p>";
      Flash.create("danger", message, 0, null, true);
      console.log(error);
    })

}
