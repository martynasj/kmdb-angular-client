/**
 * Created by martynasjankauskas on 10/04/16.
 */
import app from '../app';

function controller() {
  this.brand = 'KMDB';
}

const template = `
<nav id="top-bar">
  <div class="nav-wrapper">
    <ul id="nav-mobile" class="left">
      <li><a class="navbar-brand" ng-link="['HomePage']" >{{$ctrl.brand}}</a></li>
      <li><a ng-link="['AllMovies']">All Movies</a></li>
      <li><a ng-link="['Tv']">Tv Series</a></li>
    </ul>
  </div>
</nav>

`;

const topBar = app.component('topBar', {
  template,
  controller
});

export default topBar;
