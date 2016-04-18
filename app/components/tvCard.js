import app from '../app';

function controller() {

  this.$onInit = function() {
  }

}

const template = `
    <div id="tv-card">
      <div class="card blue-grey darken-1">
        <div class="card-image">
          <img src={{$ctrl.series.image.medium}}>
        </div>
        <div class="card-content white-text">
          <span class="card-title">{{$ctrl.series.name}}</span>
          <p ng-repeat="genre in $ctrl.series.genres">{{genre}}</p>
          <p>{{$ctrl.series.rating.average}}</p>
        </div>
        <div class="card-action">
          <a ng-link="['TvSeriesPage', {id: $ctrl.series._id}  ]">See details</a>
        </div>
      </div>
    </div>
`

export default app.component('tvCard', {
  template,
  controller,
  bindings: {
    series: '<'
  }
})