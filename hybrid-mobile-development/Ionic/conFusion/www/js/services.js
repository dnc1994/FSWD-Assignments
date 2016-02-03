'use strict';

angular.module('conFusion.services', ['ngResource'])

    .constant("baseURL", "http://localhost:3000/")

    .factory('menuFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
        return $resource(baseURL + "dishes/:id", null, {
            'update': {
                method: 'PUT'
            }
        });
    }])

    .factory('promotionFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
        return $resource(baseURL + "promotions/:id");
    }])

    .factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {
        return $resource(baseURL + "leadership/:id");
    }])

    .factory('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL) {
        return $resource(baseURL + "feedback/:id");
    }])

    .factory('favoriteFactory', ['$resource', 'baseURL', '$localStorage', function ($resource, baseURL, $localStorage) {
        var favFac = {};
        //var favData = $localStorage.getObject('favorites', []);

        favFac.addToFavorites = function (index) {
            console.log('Adding to Fav');

            var favData = $localStorage.getObject('favorites');
            console.log('Before:');
            console.log(favData);

            for (var i = 0; i < favData.length; i ++) {
                if (favData[i].id == index)
                    return;
            }
            favData.push({id: index});

            console.log('After:');
            console.log(favData);
            $localStorage.storeObject('favorites', favData);
        };

        favFac.deleteFromFavorites = function (index) {
            console.log('Deleting from Fav');

            var favData = $localStorage.getObject('favorites');
            console.log('Before:');
            console.log(favData);

            for (var i = 0; i < favData.length; i ++) {
                if (favData[i].id == index) {
                    favData.splice(i, 1);
                }
            }

            console.log('After:');
            console.log(favData);
            $localStorage.storeObject('favorites', favData);
        };

        favFac.getFavorites = function (){
            var favData = $localStorage.getObject('favorites');
            console.log('getting Fav, show the first one');
            console.log(favData[0]);
            return favData;
        };

        return favFac;
    }])

;
