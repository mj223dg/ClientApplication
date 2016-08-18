angular
  .module("event-map")
  .controller("DeleteEventController", DeleteEventController);

  function AddEventController(DeleteEventController) {
    console.log("DELETE EVENT!!");
  }
