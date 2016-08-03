angular
  .module("event-map")
  .controller("ListEventsController", ListEventsController);

  function ListEventsController() {
    var self = this;
    self.dummies = ["hejsan", "hoppsan", "flörrp"];
    console.log("sdh");
  }
