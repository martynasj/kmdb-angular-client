import app from '../app';
import tvCard from '../components/tvCard';

function controller($http, apiService) {
  // save 'this' reference
  const ctrl = this;

  ctrl.dataLoading = true;

  this.$onInit = function() {
    apiService.getAllSeries().then(function success(result) {
      ctrl.allSeries = result;
      ctrl.dataLoading = false;
    }, function error(reason) {
      console.log(reason);
    });
  };

}

const template = `
        <div id="tv-page" class="row">
          <div class="col s12">
            <h1>Tv Series</h1>
            <p ng-show="$ctrl.dataLoading">Loading...</p>
              <div class="">
                <div ng-repeat="series in $ctrl.allSeries" class="col s12 m6">
                  <tv-card series="series"></tv-card>
                </div>
              </div>
            <a href="" class="btn" ng-click="$ctrl.getTv()">Get Tv</a>
          </div>

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



