angular
  .module("event-map")
  .controller("DeleteEventController", DeleteEventController);

  function DeleteEventController(EventService, $stateParams, $location, $state) {
    var self = this;

    self.confirm = function() {
      console.log($stateParams);
      EventService.deleteEvent($stateParams.id)
        .then(function(response) {
          console.log(response);
          console.log("deleted!");
          $state.go("listEvents");
        })
        .catch(function(error) {
          console.log(error);
        })
    }

    self.cancel = function() {
        console.log("cancel");
        $location.url("/events/" + $stateParams.id)
    }



  }
