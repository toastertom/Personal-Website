var app = angular.module('profile', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  .state('/', {
    templateUrl: '../views/mainContent.html'
  })
  .otherwise('/');
})
