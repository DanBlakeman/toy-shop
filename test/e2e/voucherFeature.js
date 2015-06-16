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

  it('alerts user if they add an invalid voucher', function () {
    $('#enterVoucherCode').sendKeys('NOTAVOUCHER', protractor.Key.ENTER);
    expect($('#vouchersApplied').getText()).toEqual('Voucher applied: Invalid voucher');
  });

  it('shows updated total when voucher added', function () {
    items = element.all(by.repeater('item in Main.items'));
    items.get(0).$('#checkoutBtn').click();
    items.get(1).$('#checkoutBtn').click();
    expect($('#cartTotal').getText()).toEqual('Total: £141.00');
    $('#enterVoucherCode').sendKeys('20FORSUMMER', protractor.Key.ENTER);
    expect($('#cartTotal').getText()).toEqual('Total: £112.80');
  });


});