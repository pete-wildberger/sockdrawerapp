app.service('SockService', function($http) {
  var sv = this;

  sv.checkSocks = function(){
    console.log('in checkSocks');
    $http.get('/socks').then(function(response){
      console.log('back from server with:', response);
    });
  };
});// service
