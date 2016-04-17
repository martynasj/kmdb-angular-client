/**
 * Created by martynasjankauskas on 11/04/16.
 */
import app from '../app';

function controller() {

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

const template = `
<div>
    <form novalidate>

        <div class="form-group">
            <label>Movie Title</label>
            <input class="form-control" type="text" ng-model="$ctrl.movie.title" placeholder="Movie title" />
        </div>

        <div class="form-group">
            <label>Release Year</label>
            <input class="form-control" type="text" ng-model="$ctrl.movie.year" placeholder="Year" />
        </div>

        <div class="form-group">
            <label>Director</label>
            <input class="form-control" type="text" ng-model="$ctrl.movie.director" placeholder="Quentin Tarantino" />
        </div>

        <div class="form-group">
            <label>Rating</label>
            <input class="form-control" type="text" ng-model="$ctrl.movie.rating" placeholder="99" />
        </div>

        <div class="form-group">
            <label>Website</label>
            <input class="form-control" type="text" ng-model="$ctrl.movie.website" placeholder="http://imdb.com/title" />
        </div>

        <div class="form-group">
            <label for="exampleInputFile">Upload Cover Image</label>
            <input type="file" id="exampleInputFile">
        </div>

        <div class="form-group">
            <button ng-click="$ctrl.save()" id="button1id" name="button1id" class="btn btn-success">Save</button>
            <button ng-click="$ctrl.reset()" id="button2id" name="button2id" class="btn">Clear</button>
        </div>

    </form>

    <!-- For testing only -->
    <pre>movie = {{$ctrl.movie | json}}</pre>
    <pre>validatedMovie = {{$ctrl.validatedMovie | json}}</pre>

</div>
`;

export default app.component('addMovie', {
    template,
    controller
});