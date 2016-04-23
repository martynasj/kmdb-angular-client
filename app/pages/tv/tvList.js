import angular from 'angular';
import tvCard from '../../components/tvCard';

const app = angular.module('app');


function controller(apiService) {
  // save 'this' reference
  const ctrl = this;

  ctrl.dataLoading = true;
  ctrl.error = false;

  this.$onInit = function() {
    apiService.getAllSeries().then(function success(result) {
      ctrl.allSeries = result;
      ctrl.dataLoading = false;
    }, function error(reason) {
      ctrl.error = true;
      ctrl.dataLoading = false;
    });
  };

}

const template = `
              <div ng-if="$ctrl.dataLoading">Loading...</div>
              <div ng-if="$ctrl.error">No connection to the server</div>

              <div class="row">
                <div class="col s4">
                  <a ng-link="['AddTv']" class="waves-effect waves-light btn">Add Tv Series</a>
                </div>
                <div class="col s8">
                  <form>
                    <div class="input-field">
                      <input id="search" type="search" required placeholder="Filter...">
                    </div>
                  </form>
                </div>
              </div>

              <div class="row">
                <div ng-repeat="series in $ctrl.allSeries" class="col s6 m4">
                  <tv-card series="series"></tv-card>
                </div>
              </div>
`;



export default app.component('tvList', {
  template,
  controller,
  bindings: {

  },
  $routeConfig: [
    {path: '/', name: 'TvList', component: 'tvList', useAsDefault: true},
    {path: '/:id', name: 'TvSeriesPage', component: 'tvSeriesPage'}
  ]

})