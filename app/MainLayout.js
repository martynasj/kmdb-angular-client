console.log('in main layout');
import app from './app';
import template from './MainLayout.html';
import TopBar from './components/topBar.js';
import moviesPage from './pages/MoviesPage';

app.value('$routerRootComponent', 'mainLayout');

const MainLayout = app.component('mainLayout', {
    template,
    $routeConfig: [
        {path: '/movies', name: 'AllMovies', component: 'moviePage'},
        {path: '/movies/:id', name: 'MovieDetail', component: 'movieDetail'}
    ]
});

app.value('$routerRootComponent', 'mainLayout');

export default MainLayout;