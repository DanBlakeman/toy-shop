describe('A shop toy app', function () {

  it('allows user to add product to cart', function () {
    browser.get('http://localhost:8080');
    items = element.all(by.repeater('item in Main.items'));
    items.get(0).$('#checkoutBtn').click();
    expect($('#cart').isDisplayed()).toEqual(true);
    expect(element.all(by.repeater('item in Cart.addedItems')).get(0).getText()).toContain('Almond Toe Court Shoes, Patent Black');
  });

});