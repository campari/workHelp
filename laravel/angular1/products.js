 (function(){   
    var app = angular.module("store-products", []); 
     
    app.directive('productPanels', function(){
        return{
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function(){},
            controllerAs: ''
        };
    });
    
    
    app.directive('productTitle', function(){
        return{
            restrict: 'A',
            templateUrl: 'product-title.html'
        };
    });
    })();    

