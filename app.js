(function() {

    var app = angular.module('dribbble', []);

    app.controller('DribbbleController', ['$http', function($http) {    
        var store = this;
        this.shots = [];

        $http.jsonp('http://api.dribbble.com/players/JamieCassidy/shots').
            success(function(data) {
                store.shots = data;
            });
    }] );

})();