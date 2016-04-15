/**
 * Created by martynasjankauskas on 10/04/16.
 */
import app from '../app';
import template from './movieList.html';
import { movieData } from '../dummyData';

function controller($scope) {
    $scope.movies = movieData;
}

const movieList = app.component('movieList', {
    template,
    controller,

});

export default movieList;



