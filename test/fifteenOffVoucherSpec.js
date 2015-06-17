describe('FifteenOffVoucher', function () {

  var voucher;

  beforeEach(module('ShopApp'));

  beforeEach(inject(function(FifteenOffVoucher) {
    voucher = FifteenOffVoucher;
  }));


  it('Returns true if criteria met', function() {
    expect(voucher.meetsCriteria([{ "Product Name": "Almond Toe Court Shoes, Patent Black", "Category": "Women’s Footwear", "Price": 76.00, "Quantity in Stock": 5}], 76)).toEqual(true);
  });

  it('Returns false if category criteria not met', function() {
    expect(voucher.meetsCriteria([{ "Product Name": "Sharkskin Waistcoat, Charcoal", "Category": "Men’s Formalwear", "Price": 80.00, "Quantity in Stock": 2}], 80)).toEqual(false);
  });

  it('Returns false if price criteria not met', function() {
    expect(voucher.meetsCriteria([{ "Product Name": "Flip Flops, Red", "Category": "Men’s Footwear", "Price": 19.00, "Quantity in Stock": 6}], 19)).toEqual(false);
  });

  it('Returns a useful error message for use in view if requested', function() {
    expect(voucher.failMessage).toEqual('Spend over £75 and buy at least one footwear item to qualify');
  });

  it('Returns discount amount if requested', function() {
    expect(voucher.discountAmount).toEqual(15);
  });


});