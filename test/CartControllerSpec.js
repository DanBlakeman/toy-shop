describe('CartController', function () {
  beforeEach(module('ShopApp'));
  var ctrl;

  beforeEach(function() {

  var productListFactoryMock = {
      items: function() {
        return [
    { "Product Name": "Almond Toe Court Shoes, Patent Black", "Category": "Women’s Footwear", "Price": 99.00, "Quantity in Stock": 5},
    { "Product Name": "Suede Shoes, Blue","Category": "Women’s Footwear", "Price": 42.00, "Quantity in Stock": 44},
    { "Product Name": "Mock Item", "Category": "Test", "Price": 1.00, "Quantity in Stock": 1}
];
      }
    };

    var FiveOffVoucherMock = {
    meetsCriteria: function(cart_items, total) {
      return (total > 5);
    },
    failMessage: 'Add more items to qualify',
    discountAmount: 5
  };

    module(function($provide) {
      $provide.value('ProductList', productListFactoryMock);
      $provide.value('FiveOffVoucher', FiveOffVoucherMock);
    });

  });

  beforeEach(inject(function($controller) {
    ctrl = $controller('CartController');
  }));


  it('initialises with cart empty of items', function() {
    expect(ctrl.addedItems).toEqual([]);
  });


  it('can add an item to cart given a product index', function() {
    ctrl.addToCart(0);
    expect(ctrl.addedItems).toEqual([{ "Product Name": "Almond Toe Court Shoes, Patent Black", "Category": "Women’s Footwear", "Price": 99.00, "Quantity in Stock": 5}]);
  });

  it('can remove an item given a product index', function () {
    ctrl.addToCart(0);
    ctrl.remove(0);
    expect(ctrl.addedItems).toEqual([]);
  });

  it('can remove an item given a product index', function () {
    ctrl.addToCart(0);
    ctrl.addToCart(1);
    expect(ctrl.addedItems.length).toEqual(2);
    ctrl.remove(1);
    expect(ctrl.addedItems).toEqual([{ "Product Name": "Almond Toe Court Shoes, Patent Black", "Category": "Women’s Footwear", "Price": 99.00, "Quantity in Stock": 5}]);
  });

  it('totals single item in the cart', function () {
    ctrl.addToCart(0);
    var expectedTotal = 99;
    expect(ctrl.total()).toEqual(expectedTotal.toFixed(2));
  });

  it('totals multiple items in the cart', function () {
    ctrl.addToCart(0);
    ctrl.addToCart(1);
    var expectedTotal = 141;
    expect(ctrl.total()).toEqual(expectedTotal.toFixed(2));
  });

  it('initialises with no voucher applied', function () {
    expect(ctrl.appliedVoucher).toEqual(null);
  });

  it('saves a voucher entered by a user', function () {
    ctrl.userVoucherText = '5FORSUMMER';
    ctrl.applyVoucher();
    expect(ctrl.appliedVoucher).toEqual('5FORSUMMER');
  });

  it('does not save invalid vouchers', function () {
    ctrl.userVoucherText = 'Test';
    ctrl.applyVoucher();
    expect(ctrl.appliedVoucher).toEqual(null);
  });

  it('ensures current voucher is removed on entry of new invalid voucher', function () {
    ctrl.userVoucherText = '5FORSUMMER';
    ctrl.applyVoucher();
    ctrl.userVoucherText = 'Test';
    ctrl.applyVoucher();
    expect(ctrl.appliedVoucher).toEqual(null);
  });

  it('flags invalid for the view when incorrect voucher entered', function () {
    ctrl.userVoucherText = 'Test';
    ctrl.applyVoucher();
    expect(ctrl.voucherError).toEqual(true);
  });

  it('does not flag as invalid when correct voucher entered', function () {
    ctrl.userVoucherText = '5FORSUMMER';
    ctrl.applyVoucher();
    expect(ctrl.voucherError).toEqual(false);
  });

  it('totals multiple items taking into account voucher', function () {
    ctrl.addToCart(0);
    ctrl.addToCart(1);
    ctrl.userVoucherText = '5FORSUMMER';
    ctrl.applyVoucher();
    expect(ctrl.total()).toEqual((136).toFixed(2));
  });

  it('totals multiple items taking into account voucher added before the items were added', function () {
    ctrl.userVoucherText = '5FORSUMMER';
    ctrl.applyVoucher();
    ctrl.addToCart(0);
    ctrl.addToCart(1);
    expect(ctrl.total()).toEqual((136).toFixed(2));
  });

  it('sets an alert if voucher is added but not applicable', function () {
    ctrl.userVoucherText = '5FORSUMMER';
    ctrl.applyVoucher();
    ctrl.addToCart(2);
    ctrl.total()
    expect(ctrl.voucherAlert).toEqual('Add more items to qualify');
  });

  it('sets an alert if voucher is added but not applicable', function () {
    ctrl.userVoucherText = '5FORSUMMER';
    ctrl.applyVoucher();
    ctrl.addToCart(2);
    ctrl.total()
    expect(ctrl.voucherAlert).toEqual('Add more items to qualify');
  });

  it('removes alert once voucher becomes applicable', function () {
    ctrl.userVoucherText = '5FORSUMMER';
    ctrl.applyVoucher();
    ctrl.addToCart(2);
    ctrl.total()
    ctrl.addToCart(0);
    ctrl.total()
    expect(ctrl.voucherAlert).toEqual(false);
  });

  it('removes alert once voucher removed', function () {
    ctrl.userVoucherText = '5FORSUMMER';
    ctrl.applyVoucher();
    ctrl.addToCart(2);
    ctrl.total()
    ctrl.userVoucherText = '';
    ctrl.applyVoucher();
    ctrl.total()
    expect(ctrl.voucherAlert).toEqual(false);
  });


  it('applied voucher does not effect total unless applicable', function () {
    ctrl.userVoucherText = '5FORSUMMER';
    ctrl.applyVoucher();
    ctrl.addToCart(2);
    expect(ctrl.total()).toEqual((1).toFixed(2));
  });

});