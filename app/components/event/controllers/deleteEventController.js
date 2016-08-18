angular
  .module("event-map")
  .controller("DeleteEventController", DeleteEventController);

  function DeleteEventController(EventService, $stateParams, $location, $state, Flash) {
    var self = this;

    self.confirm = function() {
      console.log($stateParams);
      EventService.deleteEvent($stateParams.id)
        .then(function(response) {
          console.log("deleted!");
          var message = "<p>You deleted an event!!</p>"
          Flash.create("success", message, 0, null, true);
          $state.go("listEvents");
        })
        .catch(function(error) {
          console.log(error);
          var message = "<p>Something happend when deleting the event :( trye again</p>";
          Flash.create("danger", message, 0, null, true);
        })
    }

    self.cancel = function() {
        console.log("cancel");
        $location.url("/events/" + $stateParams.id)
    }



  }
