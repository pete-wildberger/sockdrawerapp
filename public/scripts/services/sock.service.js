app.service('SockService', function($http) {
  var sv = this;

  sv.checkSocks = function() {
    console.log('in checkSocks');
    $http.get('/socks').then(function(response) {
      console.log('back from server with:', response);
    });
  };

  sv.postSocks = function(newSock) {
    console.log('in postSocks', newSock);
    $http.post('/socks', newSock).then(function(response) {
      console.log('back from server with:', response);
    });
  };


}); // service
