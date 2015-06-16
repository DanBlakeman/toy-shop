describe('Discount Voucher Feature', function () {

  var items;

  beforeEach(function () {
    browser.get('http://localhost:8080');
    $('#toggleCart').click();
  });

  it('allows user to add voucher and see it', function () {
    $('#enterVoucherCode').sendKeys('20FORSUMMER', protractor.Key.ENTER);
    expect($('#vouchersApplied').getText()).toEqual('Voucher applied: 20FORSUMMER');
  });


});