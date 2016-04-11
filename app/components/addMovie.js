/**
 * Created by martynasjankauskas on 11/04/16.
 */
function AddMovieController() {

    // this assigns to local scope $ctrl as default
    this.validatedMovie = {};
    this.movie = {};

    this.save = function() {
        this.validatedMovie = this.movie;
        dummyData.push(this.validatedMovie);
    };

    this.reset = function() {
        this.movie = {};
    }

}

angular.module('moviePage')

    .component('addMovie', {
        templateUrl: 'app/components/addMovie.html',
        controller: AddMovieController
    })