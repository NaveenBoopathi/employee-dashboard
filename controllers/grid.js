angular.module('myApp.grid', []).controller('gridController', [
  '$scope',
  function($scope) {
    $scope.data = [
      {
        UserId: 'Romir',
        Role: 'Developer',
        Firstname: 'Romin',
        Lastname: 'Irani',
        Username: 'Romin Irani',
        Phone: '408-1234567',
        Email: 'romin.k.irani@gmail.com'
      },
      {
        UserId: 'Niran',
        Role: 'Designer',
        Firstname: 'Neil',
        Lastname: 'Irani',
        Username: 'Neil Irani',
        Phone: '408-1111111',
        Email: 'neilrirani@gmail.com'
      },
      {
        UserId: 'Thanks',
        Role: 'Program Directory',
        Firstname: 'Tom',
        Lastname: 'Hanks',
        Username: 'Tom Hanks',
        Phone: '408-2222222',
        Email: 'tomhanks@gmail.com'
      },
      {
        UserId: 'Rami',
        Role: 'Manager',
        Firstname: 'Ralph',
        Lastname: 'Mike',
        Username: 'Ralph Mike',
        Phone: '408-2552222',
        Email: 'ralph@gmail.com'
      },
      {
        UserId: 'Shacha',
        Role: 'Network Engineer',
        Firstname: 'Sharon',
        Lastname: 'Challis',
        Username: 'Sharon Challis',
        Phone: '128-22222323',
        Email: 'sharon@gmail.com'
      }
    ];
    $scope.gridOptions = { data: 'data', enableFiltering: true };
  }
]);
