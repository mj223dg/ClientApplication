var app = angular.module("event-map")
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/");


  $stateProvider

    .state("listEvents", {
      url: "/events",
      controller: "ListEventsController",
      templateUrl: "app/components/event/views/eventList.html",
      controllerAs: "ctrl"
    })
    .state("addEvent", {
      url: "/events/new",
      controller: "AddEventController",
      templateUrl: "app/components/event/views/newEvent.html",
      controllerAs: "ctrl"
    })








});
