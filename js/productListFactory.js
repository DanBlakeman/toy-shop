shopApp.factory('ProductList', [function() {

  var list = [
    { "Product Name": "Almond Toe Court Shoes, Patent Black", "Category": "Women’s Footwear", "Price": 99.00, "Quantity in Stock": 5},
    { "Product Name": "Suede Shoes, Blue","Category": "Women’s Footwear", "Price": 42.00, "Quantity in Stock": 44},
    { "Product Name": "Leather Driver Saddle Loafers, Tan", "Category": "Men’s Footwear", "Price": 34.00, "Quantity in Stock": 12},
    { "Product Name": "Flip Flops, Red", "Category": "Men’s Footwear", "Price": 19.00, "Quantity in Stock": 6},
    { "Product Name": "Flip Flops, Blue", "Category": "Men’s Footwear", "Price": 19.00, "Quantity in Stock": 0},
    { "Product Name": "Gold Button Cardigan, Black", "Category": "Women’s Casualwear", "Price": 167.00, "Quantity in Stock": 6},
    { "Product Name": "Cotton Shorts, Medium Red", "Category": "Women’s Casualwear", "Price": 30.00, "Quantity in Stock": 5},
    { "Product Name": "Fine Stripe Short Sleeve Shirt, Grey", "Category": "Men’s Casualwear", "Price": 49.99, "Quantity in Stock": 9},
    { "Product Name": "Fine Stripe Short Sleeve Shirt, Green", "Category": "Men’s Casualwear", "Price": 39.99, "Quantity in Stock": 3},
    { "Product Name": "Sharkskin Waistcoat, Charcoal", "Category": "Men’s Formalwear", "Price": 75.00, "Quantity in Stock": 2},
    { "Product Name": "Lightweight Patch Pocket￼Blazer, Deer", "Category": "Men’s Formalwear", "Price": 175.50, "Quantity in Stock": 1},
    { "Product Name": "Bird Print Dress, Black", "Category": "Women’s Formalwear", "Price": 270.00, "Quantity in Stock": 10},
    { "Product Name": "Mid Twist Cut-Out Dress, Pink", "Category": "Women’s Formalwear", "Price": 540.00, "Quantity in Stock": 5}
  ];

  return {
    items: function() {
      return list;
    }
  };


}]);