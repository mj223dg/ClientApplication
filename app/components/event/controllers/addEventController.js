angular
  .module("event-map")
  .controller("AddEventController", AddEventController);

  function AddEventController(EventService, $location, Flash) {
    console.log("AddEventController");

    var self = this;

    EventService.getTags()
      .then(function(response) {
        console.log(response);
        self.tags = response.data;
      })
      .catch(function(error) {
        var message = "<p>Something went wrong when getting data from the API</p>";
        Flash.create("danger", message, 0, null, true);
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
          var message = "<p>You created an event!!</p>"
          Flash.create("success", message, 0, null, true);
          $location.url("/events/" + response.data.id);
        })
        .catch(function(error) {
          var message = "<p>Something went wrong when creating the event, please try again</p>";
          Flash.create("danger", message, 0, null, true);
          console.log(error);
        })

    }
  }
