describe('A shop toy app', function () {

  it('allows user to add product to cart', function () {
    browser.get('http://localhost:8080');
    items = element.all(by.repeater('item in Main.items'));
   items.get(0).$('#checkoutBtn').click();
   expect($('#cart').isDisplayed()).toEqual(true);
   itemsInCart = element.all(by.repeater('item in Cart.Addeditems'));
   expect(itemsInCart.get(0).getText()).toContain('Almond Toe Court Shoes, Patent Black');
  });

});