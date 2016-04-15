/**
 * Created by martynasjankauskas on 11/04/16.
 */
import app from '../app';
import template from './movieDetail.html';
import { movieData } from '../dummyData';

function controller() {

    const $ctrl = this;

    this.$routerOnActivate = function(next, previous) {
        // Get the hero identified by the route parameter
        var routeId = next.params.id;

        for (const movie of movieData) {
            if (movie.id === routeId) {
                $ctrl.movie = JSON.stringify(movie, null, 2);
            }
        }

    };
}

const movieDetail = app.component('movieDetail', {
    template,
    controller
});

export default movieDetail;