/**
 * Created by martynasjankauskas on 10/04/16.
 */
angular.module('moviePage')

.component('movieList', {
    templateUrl: '/app/components/movieList.html',
    controller: MovieListController
});

function MovieListController($scope) {


    $scope.movies = dummyData;
}

