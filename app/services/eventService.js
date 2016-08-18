angular
  .module("event-map")
  .factory("EventService", EventService);

function EventService(API, $http, $cacheFactory, AuthenticationService) {

  var headers = {
    "Accept": API.format,
    "apikey": API.key
  };

  var store = {
    getEvents: function() {
      console.log("get Events!!");
      console.log(this);
      headers.Authorization = "Bearer " + AuthenticationService.getCurrentUser().jwt
      var url = API.baseUrl + "api/events";
      var config = {
        method: "GET",
        headers: headers
      };

      return $http.get(url, config);
    },

    getEventById: function(id) {
      headers.Authorization = "Bearer " + AuthenticationService.getCurrentUser().jwt
      var url = API.baseUrl + "api/events/" + id;
      var config = {
        method: "GET",
        headers: headers
      };

      return $http.get(url, config);
    },

    createEvent: function(event) {
      console.log("create event");
      headers.Authorization = "Bearer " + AuthenticationService.getCurrentUser().jwt
      var url = API.baseUrl + "api/events";
      var config = {
        method: "POST",
        headers: headers
      };

      return $http.post(url, event, config);
    },

    updateEvent: function(id, event) {
      headers.Authorization = "Bearer " + AuthenticationService.getCurrentUser().jwt
      var url = API.baseUrl + "api/events/" + id;
      var config = {
        method: "PUT",
        headers: headers
      };

      return $http.put(url, event, config);
    },

    deleteEvent: function(id) {
      headers.Authorization = "Bearer " + AuthenticationService.getCurrentUser().jwt;
      var url = API.baseUrl + "api/events/" + id;
      var config = {
        method: "DELETE",
        headers: headers
      };

      return $http.delete(url, config);
    },

    getTags: function() {
      headers.Authorization = "Bearer " + AuthenticationService.getCurrentUser().jwt
      var url = API.baseUrl + "api/tags";
      var config = {
        method: "GET",
        headers: headers
      }
      return $http.get(url, config);
    }
  };

  return store;
}
