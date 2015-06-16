describe('Shop Listings Feature', function () {

  it('page has a title', function () {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('Hello World!');
  });

  it('shows a product with its category, price & availability', function () {
    browser.get('http://localhost:8080');
     expect(element.all(by.repeater('item in Main.items')).get(0).getText()).toContain('Almond Toe Court Shoes, Patent Black');
     expect(element.all(by.repeater('item in Main.items')).get(0).getText()).toContain('Women’s Footwear');
     expect(element.all(by.repeater('item in Main.items')).get(0).getText()).toContain('99');
    expect(element.all(by.repeater('item in Main.items')).get(0).getText()).toContain('5');
  });

  it('shows all products', function () {
    browser.get('http://localhost:8080');
     expect(element.all(by.repeater('item in Main.items')).get(1).getText()).toContain('Suede Shoes, Blue');
     expect(element.all(by.repeater('item in Main.items')).get(12).getText()).toContain('Mid Twist Cut-Out Dress, Pink');
  });


});