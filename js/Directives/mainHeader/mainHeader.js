var app = angular.module('profile');

app.directive('mainHeader', function
() {
  return {
    restrict: 'E',
    templateUrl: 'views/mainHeader.html',
    transclude: true,
    link: function () {

    },
    controller: function ($scope) {
      $scope.navItems = [
        {
					name: 'ABOUT',
					hash: '#/#about'
				},
				{
					name: 'SKILLS',
					hash: '#/#skills'
				},
				{
					name: 'PORTFOLIO',
					hash: '#/#portfolio'
				},
				{
					name: 'CONTACT',
					hash: '#/#contact'
				}
      ]
    }
  }
})
