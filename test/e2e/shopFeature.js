describe('A shop toy app', function () {

  it('has a title', function () {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('Hello World!');
  });

});