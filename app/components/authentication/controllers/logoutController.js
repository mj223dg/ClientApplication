angular
  .module("event-map")
  .controller("LogoutController", LogoutController);

function LogoutController(AuthenticationService, $location, $state, Flash) {
  console.log("Logout controller");
  AuthenticationService.logoutUser();
  var message = "<p>You logged out!</p>"
  Flash.create("success", message, 0, null, true);
  $state.go("home");
  //$location.url("/");
}
