describe('Discount Voucher Feature', function () {

  var items;

  beforeEach(function () {
    browser.get('http://localhost:8080');
    $('#toggleCart').click();
  });

  it('allows user to add voucher and see it listed', function () {
    $('#enterVoucherCode').sendKeys('5FORSUMMER', protractor.Key.ENTER);
    expect($('#vouchersApplied').getText()).toContain('Voucher applied: 5FORSUMMER');
  });

  it('shows updated total when £5 off voucher added', function () {
    items = element.all(by.repeater('item in Main.items'));
    items.get(0).$('#checkoutBtn').click();
    items.get(1).$('#checkoutBtn').click();
    expect($('#cartTotal').getText()).toEqual('Total: £141.00');
    $('#enterVoucherCode').sendKeys('5FORSUMMER', protractor.Key.ENTER);
    expect($('#cartTotal').getText()).toEqual('Total: £136.00');
  });

  it('shows updated total when £10 off voucher added', function () {
    items = element.all(by.repeater('item in Main.items'));
    items.get(0).$('#checkoutBtn').click();
    items.get(1).$('#checkoutBtn').click();
    expect($('#cartTotal').getText()).toEqual('Total: £141.00');
    $('#enterVoucherCode').sendKeys('OVER50', protractor.Key.ENTER);
    expect($('#cartTotal').getText()).toEqual('Total: £131.00');
  });

  it('shows updated total when £15 off voucher added', function () {
    items = element.all(by.repeater('item in Main.items'));
    items.get(0).$('#checkoutBtn').click();
    items.get(1).$('#checkoutBtn').click();
    expect($('#cartTotal').getText()).toEqual('Total: £141.00');
    $('#enterVoucherCode').sendKeys('FOOTWEAR15', protractor.Key.ENTER);
    expect($('#cartTotal').getText()).toEqual('Total: £126.00');
  });

  it('shows an alert if added voucher is not yet applicable', function () {
    items = element.all(by.repeater('item in Main.items'));
    expect($('#voucherAlert').isPresent()).toEqual(false);
    items.get(1).$('#checkoutBtn').click();
    $('#enterVoucherCode').sendKeys('OVER50', protractor.Key.ENTER);
    expect($('#voucherAlert').getText()).toEqual('Spend over £50 to qualify');
  });

  it('doesnt effect total if added voucher is not yet applicable', function () {
    items = element.all(by.repeater('item in Main.items'));
    expect($('#voucherAlert').isPresent()).toEqual(false);
    items.get(1).$('#checkoutBtn').click();
    $('#enterVoucherCode').sendKeys('OVER50', protractor.Key.ENTER);
    expect($('#cartTotal').getText()).toEqual('Total: £42.00');
  });

  it('removes voucher alert, once voucher becomes applicable', function () {
    items = element.all(by.repeater('item in Main.items'));
    items.get(1).$('#checkoutBtn').click();
    $('#enterVoucherCode').sendKeys('OVER50', protractor.Key.ENTER);
    expect($('#voucherAlert').getText()).toEqual('Spend over £50 to qualify');
    items.get(1).$('#checkoutBtn').click();
    expect($('#voucherAlert').isPresent()).toEqual(false);
  });

  it('alerts user if they add an invalid voucher', function () {
    $('#enterVoucherCode').sendKeys('NOTAVOUCHER', protractor.Key.ENTER);
    expect($('#vouchersApplied').getText()).toEqual('Voucher applied: Invalid voucher');
  });


});