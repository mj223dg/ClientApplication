angular
  .module("event-map")
  .controller("LogoutController", LogoutController);

function LogoutController(AuthenticationSerivce) {
  console.log("Logout controller");
}
