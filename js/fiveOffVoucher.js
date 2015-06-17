shopApp.factory('FiveOffVoucher', [function() {

  return {
    meetsCriteria: function(cart_items, total) {
      return (total > 5);
    },
    failMessage: 'Add more items to qualify',
    discountAmount: 5
  };


}]);