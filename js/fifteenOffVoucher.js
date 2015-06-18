shopApp.factory('FifteenOffVoucher', [function () {

  return {
    meetsCriteria:
      function (cart_items, total) {
        if (total <= 75) {
          return false
        };
        for (var i = 0; i < cart_items.length; i++) {
          if (cart_items[i].Category.toLowerCase().indexOf('footwear') !== -1 ) {
            return true
          }
        }
        return false;
      },
    failMessage: 'Spend over £75 and buy at least one footwear item to qualify',
    discountAmount: 15
  };


}]);