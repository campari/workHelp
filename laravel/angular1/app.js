(function(){
    var app = angular.module('store', ['store-products']);
    
    app.controller('StoreController', function(){
        this.products = gems;
    });
    
    app.controller('PanelController', function(){
        this.tab = 3;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });
    
    

    
    app.controller('ReviewController', function(){
        this.review = {};
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        };
    });
    
    var gems = [{
        name: 'Campari',
        price: 2.95,
        description: '....',
        canPurchase: true,
        soldOut: false,
        reviews:[
            {stars: 5, body: "I love it.", author: "john@doe.cz"},
            {stars: 1, body: "I hate it.", author: "joan@doe.cz"},
        ]
    },
    {
        name: 'Stribro',
        price: 3.95,
        description: '....',
        canPurchase: false,
        soldOut: false,
        reviews:[
            {stars: 5, body: "I love it.", author: "john@doe.cz"},
            {stars: 1, body: "I hate it.", author: "joan@doe.cz"},
        ]
    }


]
    
})();


