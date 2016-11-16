var app = angular.module('profile', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/test', {
    templateUrl: '/views/mainContent.html'
  })
  .otherwise('/');
})
