angular
  .module("event-map")
  .factory("AuthenticationService", AuthenticationService);

function AuthenticationService($http, API, $rootScope) {
  var url = "https://powerful-shelf-52990.herokuapp.com/knock/auth_token" //API.baseUrl.substring(API.baseUrl.lengt - 3) + "knock/auth_token";
  console.log(url);
  var currentUser = null;
  var lsStorageKey = "currentUser";
  var headers = {
    Accept: API.format,
    "apikey": API.key,
  }

  var store = {
    authenticateUser: function(email, password) {
      var config = {
        method: "POST",
        headers: headers
      };

      const data = {
        auth: {
          email: email,
          password: password
        }
      };

      return $http.post(url, data, config);
    },

    loginUser: function(user) {
      currentUser = user;
      $rootScope.loggedIn = true;
      localStorage.setItem(lsStorageKey, JSON.stringify(currentUser));
    },

    logoutUser: function(user) {
      currentUser = null;
      $rootScope.loggedIn = false;
      localStorage.removeItem(lsStorageKey);
    },

    getCurrentUser: function() {
      return currentUser;
    }
  }

  /**
    initiate the singleton store so user can refresh the page
    and still be logged in
  */
  if (!store.getCurrentUser()) {
    console.log("Init authservice");
    console.log(localStorage.getItem(lsStorageKey));
    currentUser = JSON.parse(localStorage.getItem(lsStorageKey));
    console.log(currentUser);

    $rootScope.loggedIn = currentUser ? true : false;
  }

  return store;
}
