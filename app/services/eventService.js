angular
  .module("event-map")
  .factory("EventService", EventService);

function EventService(API, $http, $cacheFactory) {

  var headers = {
    "Accept": API.format,
    "apikey": API.key,
    "Authorization": "Bearer " + API.jwt
  };

  var store = {
    getEvents: function() {
      var url = API.baseUrl + "events";
      var config = {
        method: "GET",
        headers: headers
      };

      return $http.get(url, config);
    },

    getEventById: function(id) {
      var url = API.baseUrl + "events/" + id;
      var config = {
        method: "GET",
        headers: headers
      };

      return $http.get(url, config);
    },

    createEvent: function(event) {
      var url = API.baseUrl + "events";
      var config = {
        method: "POST",
        headers: headers
      };

      return $http.post(url, event, config);
    },

    updateEvent: function() {

    },

    deleteEvent: function() {

    }
  };

  return store;
}
