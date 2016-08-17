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


    var eventToCreate = {
      event: {
        name: "Event created by client",
        description: "hehehehe",
        tags: [
          { name: "Fint!"}
        ],
        position: {
          address: "Ståthållaregatan 54"
        }
      }

    }

    EventService.createEvent(eventToCreate)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
