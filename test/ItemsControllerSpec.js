describe('ItemsController', function () {
  beforeEach(module('ShopApp'));

  var items = {
  "Almond Toe Court Shoes, Patent Black":
    { "Category": "Women’s Footwear", "Price": 99.00, "Quantity in Stock": 5},
  "Suede Shoes, Blue":
    { "Category": "Women’s Footwear", "Price": 42.00, "Quantity in Stock": 44},
  "Leather Driver Saddle Loafers, Tan":
    { "Category": "Men’s Footwear", "Price": 34.00, "Quantity in Stock": 12},
  "Flip Flops, Red":
    { "Category": "Men’s Footwear", "Price": 19.00, "Quantity in Stock": 6},
  "Flip Flops, Blue":
    { "Category": "Men’s Footwear", "Price": 19.00, "Quantity in Stock": 0},
  "Gold Button Cardigan, Black":
    { "Category": "Women’s Casualwear", "Price": 167.00, "Quantity in Stock": 6},
  "Cotton Shorts, Medium Red":
    { "Category": "Women’s Casualwear", "Price": 30.00, "Quantity in Stock": 5},
  "Fine Stripe Short Sleeve Shirt, Grey":
    { "Category": "Men’s Casualwear", "Price": 49.99, "Quantity in Stock": 9},
  "Fine Stripe Short Sleeve Shirt, Green":
    { "Category": "Men’s Casualwear", "Price": 39.99, "Quantity in Stock": 3},
  "Sharkskin Waistcoat, Charcoal":
    { "Category": "Men’s Formalwear", "Price": 75.00, "Quantity in Stock": 2},
  "Lightweight Patch Pocket￼Blazer, Deer":
    { "Category": "Men’s Formalwear", "Price": 175.50, "Quantity in Stock": 1},
  "￼Bird Print Dress, Black":
    { "Category": "Women’s Formalwear", "Price": 270.00, "Quantity in Stock": 10},
  "￼Mid Twist Cut-Out Dress, Pink":
    { "Category": "Women’s Formalwear", "Price": 540.00, "Quantity in Stock": 5}
}

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ItemsController');
  }));

  it('initialises with items', function() {
    expect(ctrl.items).toEqual(items);
  });

});