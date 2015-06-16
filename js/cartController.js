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

  self.remove = function (cart_index) {
    self.addedItems.splice(cart_index, 1);
  };

  self.total = function () {
    var total = 0;
    for(var i = 0; i < self.addedItems.length; i++) {
        total += self.addedItems[i].Price
    }
    return total.toFixed(2);
  };


}]);