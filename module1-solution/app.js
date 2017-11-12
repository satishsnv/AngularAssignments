(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.items = "";
    $scope.checkItems = function(){
      if($scope.items.length > 0){
        $scope.txtColor = {'color':'green'};
        $scope.borderColor = {'border-color':'green'};
        var arrayItems = $scope.items.split(/\s*,\s*/);
        var itemCount = getItemCount(arrayItems);
        if(itemCount != arrayItems.length){
          $scope.emptyValues = true;
        }else{
          $scope.emptyValues = false;
        }
        if(itemCount <= 3){
          $scope.comments = "Enjoy!"
        }else{
          $scope.comments = "Too much!"
        }
      }else {
        $scope.comments = "Please enter data first";
        $scope.txtColor = {'color':'red'};
        $scope.borderColor = {'border-color':'red'};
      }
    };
    function getItemCount(arrayItems){
      var count = 0;
      for(let item of arrayItems){
        if(item.length > 0){
          count++;
        }
      }
      return count;
    };
  }
})();
