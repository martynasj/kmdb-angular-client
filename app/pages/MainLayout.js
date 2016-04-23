import angular from 'angular';
import topBar from './../components/topBar.js';
import moviesPage from './moviesPage';
import homePage from './homePage';
import tvPage from './tv/tvPage';
import addTvPage from './tv/addTvPage';
import tvList from './tv/tvList';

const app = angular.module('app');

const template = `
    <div>
        <!-- Includes another component -->
        <top-bar></top-bar>
        <!-- Same as ng-view or ui-view from older router -->
        <ng-outlet></ng-outlet>
    </div>
`;

const MainLayout = app.component('mainLayout', {
    template,
    $routeConfig: [
        {path: '/', name: 'HomePage', component: 'homePage'},
        {path: '/movies/...', name: 'AllMovies', component: 'moviesPage'},
        {path: '/tv/...', name: 'Tv', component: 'tvPage'}
    ]
});

app.value('$routerRootComponent', 'mainLayout');

export default MainLayout;