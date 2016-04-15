console.log('in moviePage.js');
import app from '../app';
import template from './moviePage.html';
import movieList from '../components/movieList';
import movieDetail from '../components/movieDetail';

const moviePage = app.component('moviePage', {
    template,
    $routeConfig: [
    ]

});

export default moviePage;



