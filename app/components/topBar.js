/**
 * Created by martynasjankauskas on 10/04/16.
 */
import angular from 'angular';

export default angular.module('topBar')

.controller('TopBarController', function($scope) {
   $scope.brand = 'KMDB'
})

.component('topBar', {
   templateUrl: 'app/components/topBar.html',
   controller: "TopBarController"
})