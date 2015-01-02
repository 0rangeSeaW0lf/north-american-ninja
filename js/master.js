angular.module('ngMadLibs', ['ngAnimate']).controller('MadLibs', function($scope){
    $scope.data = {person_name: '', job_title: '', tedious_task: '', dirty_task: '', celebrity: '', useless_skill: '', adjective: '', obnoxiuous_celebrity: '', huge_number: ''};
    $scope.init = $scope.data;
    $scope.gender = {pos: 'her', pron: 'she', obj: 'her'};
    $scope.boy = {pos: 'his', pron: 'he', obj: 'him'};
    $scope.girl = {pos: 'her', pron: 'she', obj: 'her' };
    $scope.reset = function(){
        $scope.changeStatus();
    	$scope.data = {person_name: '', job_title: '', tedious_task: '', dirty_task: '', celebrity: '', useless_skill: '', adjective: '', obnoxiuous_celebrity: '', huge_number: ''};
    };
    
    $scope.changeGender = function(gender) {
        $scope.gender.pos = gender.pos;
        $scope.gender.pron = gender.pron;
        $scope.gender.obj = gender.obj;
    };
    
    $scope.changeStatus = function() {
            $scope.showInput = !$scope.showInput;
            $scope.showText = !$scope.showText;
            console.log("works!");
            console.log($scope.showText);
            console.log($scope.showInput);
    };
});