describe('Shop Listings Feature', function () {

  var items;

  beforeEach(function () {
    browser.get('http://localhost:8080');
    items = element.all(by.repeater('item in Main.items'));
  });

  it('page has a title', function () {
    expect(browser.getTitle()).toEqual('ClothingStore');
  });

  it('products are displayed with their name', function () {
    expect(items.get(0).getText()).toContain('Almond Toe Court Shoes, Patent Black');
  });


  it('products are displayed alongside their category', function () {
    expect(items.get(0).getText()).toContain('Women’s Footwear');
  });

  it('products are displayed alongside their price', function () {
    expect(items.get(0).getText()).toContain('99');
  });

  it('products are displayed alongside their stock levels', function () {
    expect(items.get(0).getText()).toContain('5');
  });

  it('shows all products', function () {
     expect(items.count()).toEqual(13);
  });

  it('does not render button to add out of stock items to cart', function () {
    expect(items.get(4).$('#checkoutBtn').isPresent()).toEqual(false);
    expect(items.get(4).$('.stock_warning').getText()).toEqual('Currently out of stock');
    expect(items.get(4).$('.stock_warning').isDisplayed()).toEqual(true);
  });

  it('renders a warning for out of stock items', function () {
    expect(items.get(4).$('.stock_warning').getText()).toEqual('Currently out of stock');
    expect(items.get(4).$('.stock_warning').isDisplayed()).toEqual(true);
  });

});
