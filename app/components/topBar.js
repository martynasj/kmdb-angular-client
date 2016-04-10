/**
 * Created by martynasjankauskas on 10/04/16.
 */

angular.module('app')

.controller('TopBarController', function($scope) {
   $scope.brand = 'IMDB'
})

.component('topBar', {
   templateUrl: 'app/components/topBar.html',
   controller: "TopBarController"
})