/**
 * Created by martynasjankauskas on 11/04/16.
 */
function MovieDetailController($scope) {
    $ctrl = this;
    this.$routerOnActivate = function(next, previous) {
        // Get the hero identified by the route parameter
        var id = next.params.id;
        $ctrl.id = id;
    };
}

angular.module('moviePage')
    .component('movieDetail', {
        templateUrl: '/app/components/movieDetail.html',
        controller: MovieDetailController
    });