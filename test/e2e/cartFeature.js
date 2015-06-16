describe('A shop toy app', function () {

  var items;

  beforeEach(function () {
    browser.get('http://localhost:8080');
    items = element.all(by.repeater('item in Main.items'));
    items.get(0).$('#checkoutBtn').click();
  });

  it('allows user to add product to cart and see it', function () {
    expect($('#cart').isDisplayed()).toEqual(true);
    expect(element.all(by.repeater('item in Cart.addedItems')).get(0).getText()).toContain('Almond Toe Court Shoes, Patent Black');
  });

  it('allows user to remove product from cart', function () {
    element.all(by.repeater('item in Cart.addedItems')).get(0).$('#removeItem').click()
    expect(element.all(by.repeater('item in Cart.addedItems')).count()).toEqual(0);
  });

  it('allows user to add multiple products to cart and remove particular one', function () {
    items.get(10).$('#checkoutBtn').click();
    items.get(11).$('#checkoutBtn').click();
    expect(element.all(by.repeater('item in Cart.addedItems')).count()).toEqual(3);
    element.all(by.repeater('item in Cart.addedItems')).get(0).$('#removeItem').click()
    expect(element.all(by.repeater('item in Cart.addedItems')).count()).toEqual(2);
    expect(element.all(by.repeater('item in Cart.addedItems')).getText()).not.toContain('Almond Toe Court Shoes, Patent Black');
  });





});