describe('FiveOffVoucher', function () {

  var voucher;

  beforeEach(module('ShopApp'));

  beforeEach(inject(function(FiveOffVoucher) {
    voucher = FiveOffVoucher;
  }));


  it('Returns true if criteria met', function() {
    expect(voucher.meetsCriteria({'Product Name': 'Mock'}, 10)).toEqual(true);
  });

  it('Returns false if criteria not met', function() {
    expect(voucher.meetsCriteria({}, 0)).toEqual(false);
  });

  it('Returns a useful error message for use in view if requested', function() {
    expect(voucher.failMessage).toEqual('Add more items to qualify');
  });

  it('Returns discount amount if requested', function() {
    expect(voucher.discountAmount).toEqual(5);
  });


});