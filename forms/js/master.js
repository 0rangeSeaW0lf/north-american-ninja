angular.module('myApp', ['ngMessages']).controller('forma', function($scope){
    $scope.submit = function(){
        // console.log($scope.data);
        // console.log($scope.myForm);
        if ($scope.myForm.$valid){
            console.log('The form is valid');
        } else {
            console.log('The form is invalid')
        }
    };
});