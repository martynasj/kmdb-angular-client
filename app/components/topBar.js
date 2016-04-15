/**
 * Created by martynasjankauskas on 10/04/16.
 */
import app from '../app';
import template from './topBar.html';

function controller($scope) {
   $scope.brand = 'KMDB'
}

const TopBar = app.component('topBar', {
   template,
   controller
});

export default TopBar;

