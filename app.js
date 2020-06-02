
// var myApp = angular.module('myApp', []);

// myApp.controller('MyCtrl', function ($scope) {

//      $scope.name = "minh"
  
// });
(function(){
    'use strict';
    var myApp = angular.module('myApp',[]);
    myApp.controller('myCtrl',function($scope){

        $scope.name= "minh";
        $scope.hello = function(){
            return "good day";
        };

        $scope.totalNum = returnNum($scope.name);
        $scope.calNum = function (){
            
           $scope.totalNum = returnNum($scope.name);
        };

        function returnNum(str){
            var totalNum = 0;
            for(var i=0; i< str.length;i++){
                totalNum += str.charCodeAt(i);
            }
            return totalNum;
        }
    });

    myApp.controller('secApp', function($scope){

        $scope.name = "From controller 2: manage subjects";

        $scope.arr = {
            fname : "minh",
            lname : "huynh",
            subjects:
            [
                { name: 'Maths', marks :90 },
                { name: 'Bio', marks :78 },
                { name: 'Science', marks :95 },
                { name: 'Physics', marks :88 }
            ],
            fc : function(){
                return "data could retrieve from functions";
            }
        }

    });
})();