angular
  .module("event-map")
  .factory("EventService", EventService);

function EventService(API, $http, $cacheFactory, AuthenticationService) {

  var headers = {
    "Accept": API.format,
    "apikey": API.key,
    "Authorization": "Bearer " + AuthenticationService.getCurrentUser().jwt
  };

  var store = {
    getEvents: function() {
      var url = API.baseUrl + "api/events";
      var config = {
        method: "GET",
        headers: headers
      };

      return $http.get(url, config);
    },

    getEventById: function(id) {
      var url = API.baseUrl + "api/events/" + id;
      var config = {
        method: "GET",
        headers: headers
      };

      return $http.get(url, config);
    },

    createEvent: function(event) {
      var url = API.baseUrl + "api/events";
      var config = {
        method: "POST",
        headers: headers
      };

      return $http.post(url, event, config);
    },

    updateEvent: function(id, event) {
      var url = API.baseUrl + "api/events/" + id;
      var config = {
        method: "PUT",
        headers: headers
      };

      return $http.put(url, event, config);
    },

    deleteEvent: function(id) {
      var url = API.baseUrl + "api/events/" + id;
      var config = {
        method: "DELETE",
        headers: headers
      };

      return $http.delete(url, config);
    }
  };

  return store;
}
