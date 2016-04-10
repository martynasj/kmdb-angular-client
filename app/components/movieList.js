/**
 * Created by martynasjankauskas on 10/04/16.
 */
const dummyData = [
    {title: 'Some title', year: '2008', director: 'Alex Morgan'},
    {title: 'Some title', year: '2008', director: 'Alex Morgan'},
    {title: 'Some title', year: '2008', director: 'Alex Morgan'},
    {title: 'Some title', year: '2008', director: 'Alex Morgan'},
    {title: 'Some title', year: '2008', director: 'Alex Morgan'},
    {title: 'Some title', year: '2008', director: 'Alex Morgan'},
    {title: 'Some title', year: '2008', director: 'Alex Morgan'},
];

app.controller('MovieListController', function($scope) {
    $scope.movies = dummyData;
});

app.component('movieList', {
    templateUrl: './components/movieList.html',
    controller: 'MovieListController'
});