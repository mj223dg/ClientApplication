angular
  .module("event-map")
  .controller("ListEventsController", ListEventsController);

  function ListEventsController(EventService) {
    var self = this;
    self.title = "All events";
    self.filter = {};
    EventService
      .getEvents()
      .then(function(response) {
        self.events = response.data.events;
        console.log(response.data.events);
      })
      .then(EventService.getTags)
      .then(function(response) {
        console.log(response);
        self.tags = response.data;
        self.tags.forEach(function(tag) {
          tag.selected = true;
        });
      })
      .catch(function(error) {
        // flash
        console.log(error);
      });

    // filter functionality inspired by http://jsfiddle.net/ajeet28/rt88k3c6/
    self.filterByTags = function(event) {
      return event.tags.some(function(tag) {
        return self.filter[tag.id];
      }) || noFilter(self.filter);
    }

    function noFilter(obj) {
      for(var key in obj) {
        if (obj[key]) {
          return false;
        }
      }
      return true;
    }
  }
