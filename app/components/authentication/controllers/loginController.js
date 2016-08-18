angular
  .module("event-map")
  .controller("LoginController", LoginController);

function LoginController(AuthenticationService, $location, Flash) {
  var self = this;

  self.login = function() {


    AuthenticationService.authenticateUser(self.username, self.password)
      .then(function(res) {
        AuthenticationService.loginUser({
          email: self.username,
          jwt: res.data.jwt
        });
        var message = "<p>You logged in!</p>"
        Flash.create("success", message, 0, null, true);
        $location.url("/events");
      })
      .catch(function(error) {
        console.log(error);
        var message = "<p>Email/Password incorrect</p>";
        Flash.create("danger", message, 0, null, true);
        $location.url("/login");
      });
  }
}
