import app from '../app';

app.service('apiService', function($q, $http) {

  this.getAllSeries = function () {
    return $q(function (resolve, reject) {
      $http({
        method: 'GET',
        url: 'http://localhost:3001/api/tv'
      }).then(function successCallback(response) {
        resolve(response.data);
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        reject(response);
      })
    });
  }

});

const apiService = {

  getName: function() {
    return 'martynas';
  },


}

export default apiService;
/*
;*/