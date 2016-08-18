angular
  .module("event-map")
  .controller("AddEventController", AddEventController);

  function AddEventController(EventService, $location) {
    console.log("AddEventController");

    var self = this;

    EventService.getTags()
      .then(function(response) {
        console.log(response);
        self.tags = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });

    self.createEvent = function() {
      var selectedTags = self.tags.filter(function(tag) {
        return tag.selected;
      });

      var event = {
        event: {
          name: self.name,
          description: self.description,
          position: {
            address: self.address
          },
          tags: selectedTags
        }
      };

      EventService.createEvent(event)
        .then(function(response) {
          //TODO_ FLASH
          $location.url("/events/" + response.data.id);
        })
        .catch(function(error) {
          console.log(error);
        })

    }
  }
