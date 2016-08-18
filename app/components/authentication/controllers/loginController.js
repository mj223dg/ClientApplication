angular
  .module("event-map")
  .controller("LoginController", LoginController);

function LoginController(AuthenticationService, $location) {
  var self = this;

  self.login = function() {


    AuthenticationService.authenticateUser(self.username, self.password)
      .then(function(res) {
        AuthenticationService.loginUser({
          email: self.username,
          jwt: res.data.jwt
        });
        $location.url("/events");
      })
      .catch(function(error) {
        console.log(error);
        $location.url("/login");
      });
  }
}
