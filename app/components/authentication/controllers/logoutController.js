angular
  .module("event-map")
  .controller("LogoutController", LogoutController);

function LogoutController(AuthenticationService, $location, $state) {
  console.log("Logout controller");
  AuthenticationService.logoutUser();
  $state.go("home");
  //$location.url("/");
}
