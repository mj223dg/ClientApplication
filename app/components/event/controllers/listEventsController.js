angular
  .module("event-map")
  .controller("ListEventsController", ListEventsController);

  function ListEventsController(EventService) {
    var self = this;
    self.title = "All events";
    EventService
      .getEvents()
      .then(function(response) {
        self.events = response.data.events;
        console.log(response.data.events);
      })
      .catch(function(error) {
        // flash
        console.log(error);
      });
  }
