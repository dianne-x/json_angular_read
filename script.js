var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("student.json")
    .then(function(response) {
        $scope.students = response.data.students;
        console.log($scope.data);
    }, function(response) {
        $scope.students = "Something went wrong";
    });
});