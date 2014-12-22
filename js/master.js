angular.module('ngMadLibs', []).controller('MadLibs',function($scope){
    $scope.data = {person_name: '(Name)', job_title: '(Job)', tedious_task: '(Tedious Task)', dirty_task: '(Dirty Task)', celebrity: '(Celebrity)', useless_skill: '(Useless Skill)', adjective: '(Adjective)', obnoxiuous_celebrity: '(Obnoxiuous Celebrity)', huge_number: '(Huge Number)'};
    $scope.gender = {pos: 'her', pron: 'she', obj: 'her'};
    $scope.boy = {pos: 'his', pron: 'he', obj: 'him'};
    $scope.girl = {pos: 'her', pron: 'she', obj: 'her' };
    
    $scope.changeGender = function(gender) {
        $scope.gender.pos = gender.pos;
        $scope.gender.pron = gender.pron;
        $scope.gender.obj = gender.obj;
    };
});