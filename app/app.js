/**
 * Created by martynasjankauskas on 10/04/16.
 */
const dummyData = [
    {id: '1', title: 'Pulp Fiction', year: '2008', director: 'Alex Morgan', rating: '94', website: 'http://www.imdb.com/title/tt0110912/', cover: 'http://cdn.miramax.com/media/assets/Pulp-Fiction1.png'},
    {id: '2', title: 'Home Alone', year: '2008', director: 'Alex Morgan'},
    {id: '3', title: 'Some title', year: '2008', director: 'Alex Morgan'},
    {id: '4', title: 'Some title', year: '2008', director: 'Alex Morgan'},
    {id: '5', title: 'Some title', year: '2008', director: 'Alex Morgan'},
    {id: '6', title: 'Some title', year: '2008', director: 'Alex Morgan'},
    {id: '7', title: 'Some title', year: '2008', director: 'Alex Morgan'},
];

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
        {path: '/movies/add', name: 'AddMovie', component: 'addMovie'},
        {path: '/home', name: 'Home', component: 'home'},
    ]
})

.component('home', {
    templateUrl: '/app/pages/home.html'
});