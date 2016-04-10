/**
 * Created by martynasjankauskas on 10/04/16.
 */

angular.module('moviePage', [])

.component('moviePage', {
    templateUrl: 'app/pages/moviePage.html',
    $routeConfig: [
        {path: '/', component: 'noMovie', useAsDefault: true},
        {path: '/:id', name: 'MovieDetail', component: 'movieDetail'}
    ]
})

.component('noMovie', {
    template: 'no movie selected'
})

.component('addMovie', {
    templateUrl: 'app/pages/addMovie.html'
})



