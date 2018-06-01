angular.module('myApp.form', []).controller('formController', [
  '$scope',
  function($scope) {
    $scope.countries = ['--select--', 'India', 'US'];
    $scope.states = ['--select--'];
    $scope.show = false;
    $scope.user = {};

    $scope.submit = function(user) {
      if (user.state === '--select--' || user.country === '--select--') {
        alert('Please select the valid values in dropdown!');
      } else {
        $scope.show = true;
      }
    };

    $scope.clear = function() {
      $scope.user = { state: $scope.states[0], country: $scope.countries[0] };
      $scope.show = false;
    };

    $('#country').change(function(e) {
      let country = e.target.value;
      if (country === 'India') {
        $scope.states = [
          '--select--',
          'Tamil Nadu',
          'Karnataka',
          'Kerala',
          'Delhi'
        ];
      } else if (country === 'US') {
        $scope.states = [
          '--select--',
          'Florida',
          'Texas',
          'Arizona',
          'California'
        ];
      } else {
        $scope.states = ['--select--'];
      }
    });

    $scope.clear();
  }
]);
