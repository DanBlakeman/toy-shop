shopApp.controller('CartController', ['ProductList', function(ProductList) {

  var self = this;

  self.addedItems = [];

  self.show = false;

  self.listItems = function () {
    return self.addedItems;
  }

  self.addToCart = function (product_index) {
    fetched_items = ProductList.items();
    self.addedItems.push(fetched_items[product_index]);
    self.show = true;
  };


}]);