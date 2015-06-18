describe('Shopping Cart Feature', function () {

  var items;
  var itemsInCart;

  beforeEach(function () {
    browser.get('http://localhost:8080');
    items = element.all(by.repeater('item in Main.items'));
    items.get(0).$('#checkoutBtn').click();
    itemsInCart = element.all(by.repeater('item in Cart.addedItems'));
  });

  it('allows user to add product to cart and see it', function () {
    expect($('#cart').isDisplayed()).toEqual(true);
    expect(itemsInCart.get(0).getText()).toContain('Almond Toe Court Shoes, Patent Black');
  });

  it('shows the total price of items in the cart', function () {
    items.get(1).$('#checkoutBtn').click();
    expect($('#cartTotal').getText()).toEqual('Total: £141.00');
  });

  it('allows user to remove product from cart', function () {
    itemsInCart.get(0).$('#removeItem').click()
    expect(itemsInCart.count()).toEqual(0);
  });

  it('total resets when items are removed from the cart', function () {
    itemsInCart.get(0).$('#removeItem').click();
    expect($('#cartTotal').getText()).toEqual('Total: £0.00');
  });

  it('allows user to add multiple products to cart and remove particular one', function () {
    items.get(10).$('#checkoutBtn').click();
    items.get(11).$('#checkoutBtn').click();
    itemsInCart.get(0).$('#removeItem').click()
    expect(itemsInCart.count()).toEqual(2);
    expect(itemsInCart.getText()).not.toContain('Almond Toe Court Shoes, Patent Black');
  });

});
