describe('TenOffVoucher', function () {

  var voucher;

  beforeEach(module('ShopApp'));

  beforeEach(inject(function(TenOffVoucher) {
    voucher = TenOffVoucher;
  }));


  it('Returns true if criteria met', function() {
    expect(voucher.meetsCriteria({'Product Name': 'Mock'}, 51)).toEqual(true);
  });

  it('Returns false if criteria not met', function() {
    expect(voucher.meetsCriteria({}, 45)).toEqual(false);
  });

  it('Returns a useful error message for use in view if requested', function() {
    expect(voucher.failMessage).toEqual('Spend over £50 to qualify');
  });

  it('Returns discount amount if requested', function() {
    expect(voucher.discountAmount).toEqual(10);
  });


});