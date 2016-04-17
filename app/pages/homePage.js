import app from '../app';

function controller() {

}

const template = `
  <div>
    <h1>KMDB - KEA movie database</h1>
    <p>Mandatory assignment #1 by Martynas Jankauskas</p>
  </div>
`;

const homePage = app.component('homePage', {
  template,
  controller
});

export default homePage;





