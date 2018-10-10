var app = angular.module('map', []);

app.controller('mapSchemeController', function ($scope, $element, $attrs) {
  $scope.mapId = 'mapId';

  // console.log($scope);
  $scope.loc_center = new google.maps.LatLng(51.756866, 36.134386);

  // $scope.mapContainer = document.getElementById($scope.mapId)
  $scope.map = new google.maps.Map($scope.mapContainer, {
    zoom: 16,
    center: $scope.loc_center,
  });s
})

app.directive('mapScheme', function () {
  return {
    restrict: 'E',
    bindToController: {
      mapId: '='
    },
    templateUrl: 'mapHtmlTemplate.html',
    controller: 'mapSchemeController',

  };

})

// app.directive('mapScheme', function () {
//   return function (scope, element, attrs) {
//     console.log('directive');
//
//   }
// })
