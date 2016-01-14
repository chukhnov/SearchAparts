angular
    .module('myApp')
    .controller('Data',
    firstPage);

//@ngInject
function firstPage ($scope, $location, myService, dataService) {
    $scope.inputData = null;

    $scope.saveForm = function(){
        $scope.load = true;
        myService.getData($scope.inputData)
            .success(function(data){
                $scope.load = false;
                dataService.data = data;
                $location.path('/SecondPage');
            })
            .error(function(){
                $scope.load = false;
            });
    };

}


