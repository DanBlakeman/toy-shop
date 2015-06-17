shopApp.controller('CartController', ['ProductList', 'FiveOffVoucher', 'TenOffVoucher', 'FifteenOffVoucher', function(ProductList, FiveOffVoucher, TenOffVoucher, FifteenOffVoucher) {

  var self = this;

  self.show = false;

  self.addedItems = [];

  self.appliedVoucher = null;

  self.userVoucherText = '';

  self.voucherError = false;

  self.voucherAlert = false;

  self.validVouchers = {
    '5FORSUMMER': FiveOffVoucher,
    'OVER50': TenOffVoucher,
    'FOOTWEAR15': FifteenOffVoucher
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
    self.voucherAlert = false;
    for(var i = 0; i < self.addedItems.length; i++) {
        total += self.addedItems[i].Price
    };
    if (self.appliedVoucher && self.validVouchers[self.appliedVoucher].meetsCriteria(self.addedItems, total) === true) {
      var discount = self.validVouchers[self.appliedVoucher].discountAmount;
      return (total - discount).toFixed(2);
    } else if (self.appliedVoucher) {
      self.voucherAlert = self.validVouchers[self.appliedVoucher].failMessage;
    };
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