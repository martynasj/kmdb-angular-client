import app from '../app';

function controller() {

  this.$onInit = function() {
    console.log('tv card');
  }

}

const template = `
    <div id="tv-card">
      <div class="card blue-grey darken-1">
        <div class="card-image">
          <!--<img src="http://placehold.it/350x500">-->
        </div>
        <div class="card-content white-text">
          <span class="card-title">{{$ctrl.series.name}}</span>
          <p>{{$ctrl.series.summary}}</p>
        </div>
        <div class="card-action">
          <a href="#">See details</a>
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