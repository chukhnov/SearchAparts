angular
    .module('myApp')
    .service('myService',
    function ($http) {
    this.getData = function (string) {
        return $http.get('http://cors.io/?u=http://www.hatafinder.com/rest/adverts?page=1%26perPage=200%26advertType=HATA_RENT%26daily=false%26maxAgentProbability=3%26city='+ string);
    };
});