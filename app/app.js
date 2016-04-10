/**
 * Created by martynasjankauskas on 10/04/16.
 */
angular.module('app', ['ngComponentRouter', 'moviePage'])

// https://docs.angularjs.org/guide/component-router
.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
})

// Configure the top level routed App Component.
.value('$routerRootComponent', 'app')

.component('app', {
    templateUrl: './app/app.html',
    $routeConfig: [
        {path: '/movies/...', name: 'Movies', component: 'moviePage'},
        {path: '/home', name: 'Home', component: 'home'},
    ]
})

.component('home', {
    templateUrl: '/app/pages/home.html'
});