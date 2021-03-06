(function() {
	var lBookingApp = angular.module("booking", ['ngSanitize']);

	lBookingApp.directive("languageSelector", function() {
		return {
			restrict : 'EA',
			templateUrl : "templates/booking.language.selector.html"
		};
	});
	lBookingApp.directive("mealBookingForm", function() {
		return {
			restrict : 'EA',
			templateUrl : "templates/meal.booking.form.html"
		};
	});

	
	lBookingApp
			.controller(
					"BookingController",
					[
							'$scope',
							'$http',
							'$sanitize',
							'$sce',
							 BookingCtrl]);
})();