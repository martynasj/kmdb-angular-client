console.log('in main layout');
import app from './app';
import template from './MainLayout.html';
import TopBar from './components/topBar.js';

const MainLayout = app.component('mainLayout', {
    template
});

export default MainLayout;

//import moviePage from './pages/moviePage';


const dummyData = [
    {id: '1', title: 'Pulp Fiction', year: '2008', director: 'Alex Morgan', rating: '94', website: 'http://www.imdb.com/title/tt0110912/', cover: 'http://cdn.miramax.com/media/assets/Pulp-Fiction1.png'},
    {id: '2', title: 'Home Alone', year: '2008', director: 'Alex Morgan'},
    {id: '3', title: 'Some title', year: '2008', director: 'Alex Morgan'},
    {id: '4', title: 'Some title', year: '2008', director: 'Alex Morgan'},
    {id: '5', title: 'Some title', year: '2008', director: 'Alex Morgan'},
    {id: '6', title: 'Some title', year: '2008', director: 'Alex Morgan'},
    {id: '7', title: 'Some title', year: '2008', director: 'Alex Morgan'},
];