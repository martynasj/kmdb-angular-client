import angular from 'angular';

const app = angular.module('app');

function controller(apiService) {

  const ctrl = this;

  this.$routerOnActivate = function(next, previous) {
    // Get the hero identified by the route parameter
    var routeId = next.params.id;
    apiService.getSeriesById(routeId).then(function success(result) {
      ctrl.tvSeries = result;
    }, function error(result) {
      console.log(result);
    });
  }

};

const template = `
  <div>
    <pre>{{$ctrl.tvSeries | json}}</pre>
  </div>
`;

const tvSeriesPage = app.component('tvSeriesPage', {
  controller,
  template,
  bindings: {}
});

export default tvSeriesPage;