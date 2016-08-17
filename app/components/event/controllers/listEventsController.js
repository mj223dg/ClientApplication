angular
  .module("event-map")
  .controller("ListEventsController", ListEventsController);

  function ListEventsController(EventService) {
    var self = this;
    self.dummies = ["hejsan", "hoppsan", "flörrp"];
    console.log("sdh");


    // EventService.getEvents()
    //   .then(function(response) {
    //     return response.data.events;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    //
    // EventService.getEventById(1)
    //   .then(function(response) {
    //     console.log(response.data);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   })



    EventService.deleteEvent(1)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })
  }
