var app = angular.module('myApp', []);

app.controller('SocksController', SocksController);

function SocksController(SockService) {
  console.log('NG YO');
  var vm = this;


  vm.getSocks = function() {
    console.log('get socks');
    SockService.checkSocks();
  };
  vm.postASockInIt = function() {

    console.log('get socks');
    var newSock = {
      thing: 'this is a test'
    };
    SockService.postSocks(newSock);
  };

}
