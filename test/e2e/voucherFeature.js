describe('Discount Voucher Feature', function () {

  var items;

  var addTwoItemsToCart = function () {
    items.get(0).$('#checkoutBtn').click();
    items.get(1).$('#checkoutBtn').click();
  };

  beforeEach(function () {
    browser.get('http://localhost:8080');
    items = element.all(by.repeater('item in Main.items'));
    $('#toggleCart').click();
  });

  it('allows user to add voucher and see it listed', function () {
    $('#enterVoucherCode').sendKeys('5FORSUMMER', protractor.Key.ENTER);
    expect($('#vouchersApplied').getText()).toContain('Voucher applied: 5FORSUMMER');
  });

  it('shows updated total when £5 off voucher added', function () {
    addTwoItemsToCart();
    $('#enterVoucherCode').sendKeys('5FORSUMMER', protractor.Key.ENTER);
    expect($('#cartTotal').getText()).toEqual('Total: £136.00');
  });

  it('shows updated total when £10 off voucher added', function () {
    addTwoItemsToCart();
    $('#enterVoucherCode').sendKeys('OVER50', protractor.Key.ENTER);
    expect($('#cartTotal').getText()).toEqual('Total: £131.00');
  });

  it('shows updated total when £15 off voucher added', function () {
    addTwoItemsToCart();
    expect($('#cartTotal').getText()).toEqual('Total: £141.00');
    $('#enterVoucherCode').sendKeys('FOOTWEAR15', protractor.Key.ENTER);
    expect($('#cartTotal').getText()).toEqual('Total: £126.00');
  });

  it('shows an alert if added voucher is not yet applicable', function () {
    expect($('#voucherAlert').isPresent()).toEqual(false);
    items.get(1).$('#checkoutBtn').click();
    $('#enterVoucherCode').sendKeys('OVER50', protractor.Key.ENTER);
    expect($('#voucherAlert').getText()).toEqual('Spend over £50 to qualify');
  });

  it('removes alert, once voucher becomes applicable', function () {
    items.get(1).$('#checkoutBtn').click();
    $('#enterVoucherCode').sendKeys('OVER50', protractor.Key.ENTER);
    items.get(1).$('#checkoutBtn').click();
    expect($('#voucherAlert').isPresent()).toEqual(false);
  });

  it('voucher doesnt effect total if not yet applicable', function () {
    items.get(1).$('#checkoutBtn').click();
    $('#enterVoucherCode').sendKeys('OVER50', protractor.Key.ENTER);
    expect($('#cartTotal').getText()).toEqual('Total: £42.00');
  });

  it('alerts user if they add an invalid voucher', function () {
    $('#enterVoucherCode').sendKeys('NOTAVOUCHER', protractor.Key.ENTER);
    expect($('#vouchersApplied').getText()).toContain('Invalid voucher');
  });

});
