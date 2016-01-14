angular
    .module('myApp')
    .controller('Results', secondPage);
    function secondPage ($scope, $location, dataService) {
        $scope.showData = function(){
            $scope.data = dataService.data;
            var pagesShown = 1;
            var pageSize = 5;

            $scope.paginationLimit = function() {
                return pageSize * pagesShown;
            };
            $scope.hasMoreItemsToShow = function() {
                return pagesShown < ($scope.data.length / pageSize);
            };
            $scope.showMoreItems = function() {
                $scope.load = true;
                setTimeout(function() {
                    $scope.$apply(function() {
                        pagesShown = pagesShown + 1;
                        $scope.load = false;
                    });


                }, 1000);
            };


        };
        $scope.goBack = function () {
            $location.path('/FirstPage');
        };
    }
