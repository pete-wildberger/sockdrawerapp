var app = angular.module('myApp', []);

app.controller('SocksController', SocksController);

function SocksController(SockService) {
  console.log('NG YO');
  var vm = this;
  SockService.checkSocks();

  vm.getSocks = function() {
    console.log('get socks');
  };

}
