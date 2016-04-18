import app from '../app';

app.service('apiService', function($q) {

  this.getName = function() {
    return 'Martis';
  }

});

const apiService = {

  getName: function() {
    return 'martynas';
  },

  getAllSeries: function () {

    let okToGreet = true;

    const promise = $q(function (resolve, reject) {
      setTimeout(function () {
        if (okToGreet) {
          resolve('Hello!');
        } else {
          reject('Promise rejected');
        }
      }, 1000);
    });

    return promise;

  }
}

export default apiService;
/*
$http({
  method: 'GET',
  url: 'http://localhost:3001/api/tv'
}).then(function successCallback(response) {
  ctrl.allSeries = response.data;
  ctrl.dataLoading = false;
  // this callback will be called asynchronously
  // when the response is available
}, function errorCallback(response) {
  console.log(response);
  // called asynchronously if an error occurs
  // or server returns response with an error status.
});*/