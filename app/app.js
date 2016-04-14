import angular from 'angular';
import moviePage from './pages/moviePage';
import topBar from './components/topBar.js';

class ctrl {
    constructor() {
        this.name = 'World';
    }

    changeName() {
        this.name = 'angular-tips';
    }
}

const dummyData = [
    {id: '1', title: 'Pulp Fiction', year: '2008', director: 'Alex Morgan', rating: '94', website: 'http://www.imdb.com/title/tt0110912/', cover: 'http://cdn.miramax.com/media/assets/Pulp-Fiction1.png'},
    {id: '2', title: 'Home Alone', year: '2008', director: 'Alex Morgan'},
    {id: '3', title: 'Some title', year: '2008', director: 'Alex Morgan'},
    {id: '4', title: 'Some title', year: '2008', director: 'Alex Morgan'},
    {id: '5', title: 'Some title', year: '2008', director: 'Alex Morgan'},
    {id: '6', title: 'Some title', year: '2008', director: 'Alex Morgan'},
    {id: '7', title: 'Some title', year: '2008', director: 'Alex Morgan'},
];

const app = angular.module('app', ['moviePage', 'topBar']);

app.component('app', {
    templateUrl: "app/app.html",
    controller: ctrl
});