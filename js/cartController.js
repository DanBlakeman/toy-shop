shopApp.controller('CartController', ['ProductList', function(ProductList) {

  var self = this;

  self.items = [];

  self.addToCart = function (product_index) {
    fetched_items = ProductList.items();
    self.items.push(fetched_items[product_index]);
  };


}]);