var app = angular.module('profile');

app.directive('mainHeader', function
() {
  return {
    restrict: 'E',
    templateUrl: 'js/Directives/mainHeader/views/mainHeader.html',
    transclude: true,
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

app = angular.module('profile');
app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 400) {
                element.addClass('no-shadow');
              }else {
                element.removeClass('no-shadow');
             }

        });
    };
});
