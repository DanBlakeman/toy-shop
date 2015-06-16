describe('ItemsController', function () {

  var ctrl;
  var mockedItems = [
          {
            "Product Name": "Flip Flops, Red",
            "Category": "Men’s Footwear",
            "Price": 19.00,
            "Quantity in Stock": 6
          },
          {
            "Product Name": "Flip Flops, Blue",
            "Category": "Men’s Footwear",
            "Price": 19.00,
            "Quantity in Stock": 0
          }
        ];

  beforeEach(module('ShopApp'));

  beforeEach(function() {

    productListFactoryMock = {
      items: function() {
        return mockedItems;
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
    expect(ctrl.items).toEqual(mockedItems);
  });

  it('knows when an item is out of stock', function () {
    expect(ctrl.isOutOfStock(1)).toEqual(true);
  });

  it('knows when an item is in stock', function () {
    expect(ctrl.isOutOfStock(0)).toEqual(false);
  });


});