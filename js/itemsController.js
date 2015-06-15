shopApp.controller('ItemsController', ['ProductList', function(ProductList) {

  var self = this;
  self.items = ProductList.items();


}]);