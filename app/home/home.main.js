/**
 * Created by Amit Thakkar on 02/05/15.
 */
(function (ng, module) {
    'use strict';
    var exports = module.exports;
    exports.module = ng.module('angular-amd.home', []);
    exports.states = [
        {
            state: 'home',
            url: '/home',
            templateUrl: 'app/home/home.html',
            controller: 'HomeController',
            controllerAs: 'homeController',
            deps: ['build/home/home.controller.js']
        }
    ];
})(angular, module);