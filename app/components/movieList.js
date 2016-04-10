/**
 * Created by martynasjankauskas on 10/04/16.
 */
angular.module('moviePage')

.component('movieList', {
    templateUrl: '/app/components/movieList.html',
    controller: MovieListController
});

function MovieListController($scope) {
    const dummyData = [
        {id: '1', title: 'Pulp Fiction', year: '2008', director: 'Alex Morgan'},
        {id: '2', title: 'Some title', year: '2008', director: 'Alex Morgan'},
        {id: '3', title: 'Some title', year: '2008', director: 'Alex Morgan'},
        {id: '4', title: 'Some title', year: '2008', director: 'Alex Morgan'},
        {id: '5', title: 'Some title', year: '2008', director: 'Alex Morgan'},
        {id: '6', title: 'Some title', year: '2008', director: 'Alex Morgan'},
        {id: '7', title: 'Some title', year: '2008', director: 'Alex Morgan'},
    ];

    $scope.movies = dummyData;
}

