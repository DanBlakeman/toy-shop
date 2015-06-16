shopApp.controller('CartController', ['ProductList', function(ProductList) {

  var self = this;

  self.show = false;

  self.addedItems = [];

  self.appliedVoucher = null;

  self.userVoucherText = '';

  self.voucherError = false;

  self.validVouchers = {
    '20FORSUMMER': 20
  };


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
    if (self.appliedVoucher) {
      var discount = (total / 100) * self.validVouchers[self.appliedVoucher];
      return (total - discount).toFixed(2);
    }
    return total.toFixed(2);
  };

  self.applyVoucher = function () {
    if (self.validVouchers[self.userVoucherText]) {
      self.appliedVoucher = self.userVoucherText;
      self.userVoucherText = '';
      self.voucherError = false;
    } else {
      self.appliedVoucher = null;
      self.voucherError = true;
    };
  };


}]);