shopApp.factory('TenOffVoucher', [function () {

  return {
    meetsCriteria:
      function (cart_items, total) {
        return (total > 50);
      },
    failMessage: 'Spend over £50 to qualify',
    discountAmount: 10
  };


}]);