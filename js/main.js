'use strict';

angular.module('gMap', ['uiGmapgoogle-maps'])
    .controller('mapCtrl', function($scope, $log) {
        $scope.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 8
        };
        $scope.map.showTraffic = true;
        $scope.map.showWeather = true;

        $scope.initMarkers = [];
        $scope.dataInit = function() {
            $log.info('init data');
            var markers = [];
            for (var i = 0; i < 10; i++) {
                var marker = {
                    latitude: $scope.map.center.latitude + (Math.random() * 2 - 1) * 1,
                    longitude: $scope.map.center.longitude + (Math.random() * 2 - 1) * 1,
                    id: 'm' + i,
                    icon: 'icon/parking.png'
                };
                markers.push(marker);
            }
            $scope.initMarkers = markers;
        };
    });
