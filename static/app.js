angular.module('app', ['controllers', 'services']);



var appControllers = angular.module('controllers', ['services']);
appControllers.controller('StatiiCtrl', function($scope, $http, socket) {
    var app = this;
    $scope.running = false;

    socket.on('update', function(data) {
	console.log('hey we got a message client side ' + data);
        $scope.running = data;
    })

    console.log('angular is running');

});

angular.module('services', []).
    factory('socket', function($rootScope) {
        socket = io.connect('http://localhost:8003');
        return {
            on : function(eventName, callback) {
                socket.on(eventName, function() {
                    var args = arguments;
                    $rootScope.$apply(function() {
                        callback.apply(socket, args);
                    });
                });
            },
            emit : function(eventName, data, callback) {
                socket.emit(eventName, data, function() {
                    var args = arguments;
                    $rootScope.$apply(function() {
                        if (callback) {
                            callback.apply(socket, args);
                        }
                    })
                })
            }
        }
    });




