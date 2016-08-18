angular
  .module("event-map")
  .controller("UpdateEventController", UpdateEventController);

  function UpdateEventController(EventService, $stateParams, $location) {
    var self = this;
    EventService
      .getEventById($stateParams.id)
      .then(function(response) {
        self.event = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });

    self.updateEvent = function() {
      console.log(self.event.name);
      console.log(self.event.description);
      var event = {
        event: {
          name: self.event.name,
          description: self.event.description
        }
      };

      EventService.updateEvent(event, self.event.id)
        .then(function(response) {
          $location.url("/events/" + self.event.id);
        })
        .catch(function(error) {
          console.log(error);
        })
    }
  }
