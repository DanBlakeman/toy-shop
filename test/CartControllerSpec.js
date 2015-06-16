describe('CartController', function () {
  beforeEach(module('ShopApp'));
  var ctrl;

  beforeEach(function() {

  productListFactoryMock = {
      items: function() {
        return [
    { "Product Name": "Almond Toe Court Shoes, Patent Black", "Category": "Women’s Footwear", "Price": 99.00, "Quantity in Stock": 5},
    { "Product Name": "Suede Shoes, Blue","Category": "Women’s Footwear", "Price": 42.00, "Quantity in Stock": 44},
    { "Product Name": "Leather Driver Saddle Loafers, Tan", "Category": "Men’s Footwear", "Price": 34.00, "Quantity in Stock": 12},
    { "Product Name": "Flip Flops, Red", "Category": "Men’s Footwear", "Price": 19.00, "Quantity in Stock": 6},
    { "Product Name": "Flip Flops, Blue", "Category": "Men’s Footwear", "Price": 19.00, "Quantity in Stock": 0},
    { "Product Name": "Gold Button Cardigan, Black", "Category": "Women’s Casualwear", "Price": 167.00, "Quantity in Stock": 6},
    { "Product Name": "Cotton Shorts, Medium Red", "Category": "Women’s Casualwear", "Price": 30.00, "Quantity in Stock": 5},
    { "Product Name": "Fine Stripe Short Sleeve Shirt, Grey", "Category": "Men’s Casualwear", "Price": 49.99, "Quantity in Stock": 9},
    { "Product Name": "Fine Stripe Short Sleeve Shirt, Green", "Category": "Men’s Casualwear", "Price": 39.99, "Quantity in Stock": 3},
    { "Product Name": "Sharkskin Waistcoat, Charcoal", "Category": "Men’s Formalwear", "Price": 75.00, "Quantity in Stock": 2},
    { "Product Name": "Lightweight Patch Pocket￼Blazer, Deer", "Category": "Men’s Formalwear", "Price": 175.50, "Quantity in Stock": 1},
    { "Product Name": "Bird Print Dress, Black", "Category": "Women’s Formalwear", "Price": 270.00, "Quantity in Stock": 10},
    { "Product Name": "Mid Twist Cut-Out Dress, Pink", "Category": "Women’s Formalwear", "Price": 540.00, "Quantity in Stock": 5}
];
      }
    };

    module(function($provide) {
      $provide.value('ProductList', productListFactoryMock);
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

  it('initialises with no voucher applied', function () {
    expect(ctrl.appliedVoucher).toEqual(null);
  });

  it('saves a voucher entered by a user', function () {
    ctrl.userVoucherText = '20FORSUMMER';
    ctrl.applyVoucher();
    expect(ctrl.appliedVoucher).toEqual('20FORSUMMER');
  });

  it('does not save invalid vouchers', function () {
    ctrl.userVoucherText = 'Test';
    ctrl.applyVoucher();
    expect(ctrl.appliedVoucher).toEqual(null);
  });

  it('ensures current voucher is removed on entry of new invalid voucher', function () {
    ctrl.userVoucherText = '20FORSUMMER';
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
    ctrl.userVoucherText = '20FORSUMMER';
    ctrl.applyVoucher();
    expect(ctrl.voucherError).toEqual(false);
  });

  it('totals multiple items taking into account voucher', function () {
    ctrl.addToCart(0);
    ctrl.addToCart(1);
    ctrl.userVoucherText = '20FORSUMMER';
    ctrl.applyVoucher();
    expect(ctrl.total()).toEqual((112.80).toFixed(2));
  });

  it('totals multiple items taking into account voucher added before the items were added', function () {
    ctrl.userVoucherText = '20FORSUMMER';
    ctrl.applyVoucher();
    ctrl.addToCart(0);
    ctrl.addToCart(1);
    expect(ctrl.total()).toEqual((112.80).toFixed(2));
  });

  // it('does not add out of stock items, instead displays a notification')

});