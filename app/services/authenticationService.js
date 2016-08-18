angular
  .module("pub-map")
  .factory("AuthenticationService", AuthenticationService);

function AuthenticationService($http, API, $rootScope) {
  var url = API.baseUrl + "knock/auth_token";
  var currentUser = null;
  var lsStorageKey = "currentUser";

  var store = {
    authenticateUser: function(email, password) {

    },

    loginUser: function(user) {

    },

    logoutUser: function(user) {

    },

    getCurrentUser: function() {

    }
  }

  if (store.getCurrentUser()) {
    currentUser = JSON.parse(localStorage.getItem(lsStorageKey));
    $rootScope.loggedIn = true;
  }

  return store;
}
