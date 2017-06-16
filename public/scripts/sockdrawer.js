var app = angular.module('myApp', []);

app.controller('SocksController', SocksController);

function SocksController(){
console.log('NG YO');
var vm = this;
vm.getSocks =function(){
  console.log('get socks');
};

}
