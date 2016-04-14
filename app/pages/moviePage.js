console.log('in moviepage.js');

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



