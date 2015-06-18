shopApp.controller('ItemsController', ['ProductList', function (ProductList) {

  var self = this;

  self.items = ProductList.items();

  self.isOutOfStock = function (product_index) {
    return self.items[product_index]['Quantity in Stock'] === 0;
  };


}]);