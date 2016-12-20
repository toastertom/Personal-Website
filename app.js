var app = angular.module('profile', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './views/mainContent.html'
  })
  .otherwise('/');
})
