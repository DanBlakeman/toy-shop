describe('A shop toy app', function () {

  it('has a title', function () {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('Hello World!');
  });

  it('lists products with their category, price & availability', function () {
    browser.get('http://localhost:8080');
     expect(element.all(by.repeater('item in ShopApp.items')).get(0).getText()).toContain('Almond Toe Court Shoes, Patent Black');
  });


});