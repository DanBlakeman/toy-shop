shopApp.controller('CartController', ['ProductList', 'FiveOffVoucher', 'TenOffVoucher', 'FifteenOffVoucher', function (ProductList, FiveOffVoucher, TenOffVoucher, FifteenOffVoucher) {

  var self = this;

  self.show = false;

  self.addedItems = [];

  self.appliedVoucher = null;

  self.userVoucherText = '';

  self.voucherError = false; // Used for invalid voucher entry

  self.voucherAlert = false; // Used for all vouchers if conditions not yet met

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

  self.total = function () {
    self.voucherAlert = false;
    var total = self._findTotalBeforeVoucher();
    var discount = self._calcDiscount(total);
    self._setAnyVoucherAlerts(total);
    return (total - discount).toFixed(2);
  };


  // Private

  self._findTotalBeforeVoucher = function () {
    var total = 0;
    for(var i = 0; i < self.addedItems.length; i++) {
        total += self.addedItems[i].Price
    };
    return total;
  };

  self._calcDiscount = function (total) {
    if (self._isVoucherApplicable(total)) {
      return self.validVouchers[self.appliedVoucher].discountAmount;
    }
    return 0;
  };

  self._setAnyVoucherAlerts = function (total) {
    if (self.appliedVoucher && !self._isVoucherApplicable(total)) {
      self._setVoucherNotApplicableAlert();
    };
  };

  self._isVoucherApplicable = function (total) {
    return self.appliedVoucher && self.validVouchers[self.appliedVoucher].meetsCriteria(self.addedItems, total) === true;
  }

  self._setVoucherNotApplicableAlert = function () {
    self.voucherAlert = self.validVouchers[self.appliedVoucher].failMessage;
  };



}]);