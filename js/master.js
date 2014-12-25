angular.module('ngMadLibs', []).controller('MadLibs',function($scope){
    $scope.data = {person_name: '', job_title: '', tedious_task: '', dirty_task: '', celebrity: '', useless_skill: '', adjective: '', obnoxiuous_celebrity: '', huge_number: ''};
    $scope.gender = {pos: 'her', pron: 'she', obj: 'her'};
    $scope.boy = {pos: 'his', pron: 'he', obj: 'him'};
    $scope.girl = {pos: 'her', pron: 'she', obj: 'her' };
    $scope.user_input = {person_name: 'name', job_title: 'job title', tedious_task: 'tedious task', dirty_task: 'task', celebrity: 'name', useless_skill: 'skill', adjective: 'adjective', obnoxiuous_celebrity: 'name', huge_number: 'number'};
    
    
    $scope.changeGender = function(gender) {
        $scope.gender.pos = gender.pos;
        $scope.gender.pron = gender.pron;
        $scope.gender.obj = gender.obj;
    };
});