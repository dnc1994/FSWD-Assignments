// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('conFusion', ['ionic', 'conFusion.controllers', 'conFusion.services'])

    .run(function($ionicPlatform, $rootScope, $ionicLoading) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });

        // Subscribe
        $rootScope.$on('loading:show', function () {
            //console.log('loading:show event received ...');
            $ionicLoading.show({
                template: '<ion-spinner></ion-spinner> Loading ...'
            })
        });

        $rootScope.$on('loading:hide', function () {
            //console.log('loading:hide event received ...');
            $ionicLoading.hide();
        });

        // Publish
        $rootScope.$on('$stateChangeStart', function () {
            console.log('Loading ...');
            $rootScope.$broadcast('loading:show');
        });

        $rootScope.$on('$stateChangeSuccess', function () {
            console.log('Done');
            $rootScope.$broadcast('loading:hide');
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/sidebar.html',
                controller: 'AppCtrl'
            })

            .state('app.home', {
                url: '/home',
                views: {
                    'mainContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'IndexController',
                        resolve: {
                            dish: ['menuFactory', function(menuFactory) {
                                return menuFactory.get({id: 0});
                            }],
                            promotion: ['promotionFactory', function(promotionFactory) {
                                return promotionFactory.get({id: 0});
                            }],
                            leader: ['corporateFactory', function(corporateFactory) {
                                return corporateFactory.get({id: 3});
                            }]
                        }
                    }
                }
            })

            .state('app.aboutus', {
                url: '/aboutus',
                views: {
                    'mainContent': {
                        templateUrl: 'templates/aboutus.html',
                        controller: 'AboutController',
                        resolve: {
                            leaders: ['corporateFactory', function (corporateFactory) {
                                return corporateFactory.query();
                            }]
                        }
                    }
                }
            })

            .state('app.contactus', {
                url: '/contactus',
                views: {
                    'mainContent': {
                        templateUrl: 'templates/contactus.html'
                    }
                }
            })

            .state('app.menu', {
                url: '/menu',
                views: {
                    'mainContent': {
                        templateUrl: 'templates/menu.html',
                        controller: 'MenuController',
                        resolve: {
                            dishes: ['menuFactory', function (menuFactory) {
                                return menuFactory.query();
                            }]
                        }
                    }
                }
            })

            .state('app.favorites', {
                url: '/favorites',
                views: {
                    'mainContent': {
                        templateUrl: 'templates/favorites.html',
                        controller: 'FavoritesController',
                        resolve: {
                            dishes: ['menuFactory', function (menuFactory) {
                                return menuFactory.query();
                            }],
                            favorites: ['favoriteFactory', function (favoriteFactory) {
                                console.log('resolving favorites, length = ' + favoriteFactory.getFavorites().length);
                                return favoriteFactory.getFavorites();
                            }]
                        }
                    }
                }
            })

            .state('app.dishdetails', {
                url: '/menu/:id',
                views: {
                    'mainContent': {
                        templateUrl: 'templates/dishdetail.html',
                        controller: 'DishDetailController',
                        resolve: {
                            dish: ['$stateParams', 'menuFactory', function ($stateParams, menuFactory) {
                                return menuFactory.get({id: parseInt($stateParams.id, 10)});
                            }]
                        }
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');

    });
