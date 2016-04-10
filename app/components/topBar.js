/**
 * Created by martynasjankauskas on 10/04/16.
 */
app.controller('TopBarController', function($scope) {
   $scope.brand = 'IMDB'
});

app.component('topBar', {
   templateUrl: './components/topBar.html',
   controller: "TopBarController"
});