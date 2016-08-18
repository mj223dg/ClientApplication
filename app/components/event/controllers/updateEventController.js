angular
  .module("event-map")
  .controller("UpdateEventController", UpdateEventController);

  function UpdateEventController(EventService, $stateParams, $location, Flash) {
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
          var message = "<p>Event updated!</p>"
          Flash.create("success", message, 0, null, true);
          $location.url("/events/" + self.event.id);
        })
        .catch(function(error) {
          console.log(error);
          var message = "<p>Something went wrong when updating the event. Try again later!</p>";
          Flash.create("danger", message, 0, null, true);
        })
    }
  }
