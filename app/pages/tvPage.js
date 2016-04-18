import app from '../app';

function controller($http, apiService) {
  // save 'this' reference
  const ctrl = this;

  ctrl.dataLoading = true;

  this.$onInit = function() {
    console.log(apiService.getName());

    const promise = apiService.getAllSeries();
    promise.then(function(result) {
      alert('Success: ' + result);
    }, function(reason) {
      alert('Failed: ' + result);
    });
  };

}

const template = `
        <div id="tv-page" class="row">
          <h1>Tv Series</h1>
          <p ng-show="$ctrl.dataLoading">Loading...</p>
          <ul ng-hide="$ctrl.dataLoading">
            <li ng-repeat="series in $ctrl.allSeries">{{series.name}}</li>
          </ul>
          <a href="" class="btn" ng-click="$ctrl.getTv()">Get Tv</a>
        </div>
`;

const tvPage = app.component('tvPage', {
  template,
  controller,
  $routeConfig: [
    {path: '/', name: 'HomePage', component: 'homePage', useAsDefault: true}
  ]
});

export default tvPage;



