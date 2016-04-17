import app from '../app';
import movieDetail from '../components/movieDetail';
import addMovie from '../components/addMovie';
import { movieData } from '../dummyData';

function controller() {
  this.movies = movieData;
}

const template = `
        <div class="row">

            <div class="col-sm-3">

                <a ng-link="['AddMovie']" class="btn btn-default" >Add movie</a>

                <div class="list-group">
                   <a ng-repeat="movie in $ctrl.movies" ng-link="['MovieDetail', {id: movie.id}]" class="list-group-item">
                      {{movie.title}}
                    </a>
                  </div>
            </div>

            <div class="col-sm-9">
            <ng-outlet></ng-outlet>
            </div>
        </div>

`;

const moviesPage = app.component('moviesPage', {
  template,
  controller,
  $routeConfig: [
    {path: '/', name: 'HomePage', component: 'homePage', useAsDefault: true},
    {path: '/add', name: 'AddMovie', component: 'addMovie'},
    {path: '/:id', name: 'MovieDetail', component: 'movieDetail'}
  ]
});

export default moviesPage;



