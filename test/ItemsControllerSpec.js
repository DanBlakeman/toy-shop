describe('ItemsController', function () {

  var ctrl;

  beforeEach(module('ShopApp'));

  beforeEach(function() {

    productListFactoryMock = {
      items: function() {
        return 'mocked';
      }
    };

    module(function($provide) {
      $provide.value('ProductList', productListFactoryMock);
    });

  });

  beforeEach(inject(function($controller) {
    ctrl = $controller('ItemsController');
  }));



  it('can recall a list of products from service', function() {
    expect(ctrl.items).toEqual('mocked');
  });

});