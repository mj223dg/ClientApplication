var app = angular.module("event-map")
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/");


  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "app/components/home/views/home.html",
    })
    .state("listEvents", {
      url: "/events",
      controller: "ListEventsController",
      templateUrl: "app/components/event/views/eventList.html",
      controllerAs: "ctrl",
      resolve: {
        auth: authenicate
      }
    })
    .state("addEvent", {
      url: "/events/new",
      controller: "AddEventController",
      templateUrl: "app/components/event/views/newEvent.html",
      controllerAs: "ctrl",
      resolve: {
        auth: authenicate
      }
    })
    .state("singleEvent", {
      url: "/events/:id",
      controller: "SingleEventController",
      templateUrl: "app/components/event/views/singleEvent.html",
      controllerAs: "ctrl",
      resolve: {
        auth: authenicate
      }
    })

    .state("updateEvent", {
      url: "/events/:id/update",
      controller: "UpdateEventController",
      templateUrl: "app/components/event/views/updateEvent.html",
      controllerAs: "ctrl",
      resolve: {
        auth: authenicate
      }
    })
    .state("deleteEvent", {
      url: "/events/:id/delete",
      controller: "DeleteEventControllersingle",
      templateUrl: "app/components/event/views/deleteEvent.html",
      controllerAs: "ctrl",
      resolve: {
        auth: authenicate
      }
    })
    .state("login", {
      url: "/login",
      controller: "LoginController",
      controllerAs: "ctrl",
      templateUrl: "app/components/authentication/views/login.html",
    })
    .state("logout", {
      url: "/logout",
      controller: "LogoutController"
    })
});

function authenicate($q, AuthenticationService, $location, $state) {
  var deffered = $q.defer();
  console.log("authenticate");
  var user = AuthenticationService.getCurrentUser();
  console.log(user);
  if (!user) {
    $location.path("/login");
    return $q.reject({ authenticated: false })
  }
}
