import app from './app';
import topBar from './components/topBar.js';
import moviesPage from './pages/moviesPage';
import homePage from './pages/homePage';

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
        {path: '/movies/...', name: 'AllMovies', component: 'moviesPage'}
    ]
});

app.value('$routerRootComponent', 'mainLayout');

export default MainLayout;