# A toy app - Creating an online shop with Angular

## How to use:

- Firstly, install all dependencies:

 ```
 bower install
 npm install
 ```

- Secondly, run the site locally by typing:

```
http-server ./
```

- To visit the site in your browser visit:

  http://localhost:8080/index.html

- To run feature tests run the following command:
  ```
  protractor test/e2e/conf.js
  ```
- To have the unit tests auto run in the background:
  ```
  karma start test/karma.conf.js
  ```

### Vouchers

There is three implemented voucher codes you can use on the site:

  - 5FORSUMMER
  - FOOTWEAR15
  - OVER50

## Approach

### BDD

I completed all user stories in priority order using a BDD approach. I would read the user story, convert it into a protractor e2e test, then drop down to unit testing any js code required to pass the protractor test, using Karma.

Protractor tests are grouped into files describing the feature theme.

Karma tests are grouped into files describing the controller/angular factory being tested.

### Layout

Feature tests are located at:
```
/test/e2e/*Feature.js
```

Unit tests are located at:
```
test/*Spec.js
```
Site is located at:
```
index.html
public/styles
```
External dependencies are located at:
```
bower_components
node_modules
```


### Tech and thinking

I decided to use Angular to complete this challenge, partially as a way to develop my own angular ability, but also as a the complexity of the requirements would benefit from an organised front end framework. There was also a lot of repetition in the view (each item has the same attributes, as does each cart item) - a front end JS framework benefits this using features such as 'ng-repeat'.

Further developments would also become trivial - such as calling API's to update stock, and filtering views by category.

### Mocking

In a real world project, i imagined this angular front end would talk to a restful API to receive its item list, and vouchers.

As this was a dummy time constrained project, i decided instead of building a backend with node/mongo - to use an angular factory service to return a product list, and to return each voucher object. This made injecting each each into a controller easy. In real life these injected dependencys would be swapped for http services which would call the relevant API.

I took the approach of also testing these factorys acting as mocks. A - because i had never tested a Angular factory before and wanted to learn, but also B - it ensured each was behaving as the controllers expected of them.

### Assumptions and Strategies

- In the view since we are receiving a static array as a product list, i used the index of each item when passing them between controllers, and iterating over them. In real life with a db i'd likely use a more robust productID number stored in the db. This would make the code less dependent on the order items are returned to it.

- The number of items in stock, i assumed would be updated by the backend on completed payment. So is not updated in this project.

- Following common practice a user is only allowed to use one voucher, if they add a second it replaces the first.

## Further Extensions

Over the next few weeks i may add to this repo:

- A Node Express/Mongo backend - to allow updating of products.

- Switch to HAML on the front end - the amount of html indentation/closing tags from bootstrap warrants the switch.

- Add a checkout button!!

- I would also like to spend time refactoring. I feel a little uncomfortable with the size of the Cart controller (although this may be helped by calling an API when interacting with vouchers).


## User Stories

- As a User I can view the products and their category, price and availability information.

- As a User I can add a product to my shopping cart.

- As a User I can remove a product from my shopping cart.

- As a User I can view the total price for the products in my shopping cart.

- As a User I can apply a voucher to my shopping cart.

- As a User I can view the total price for the products in my shopping cart with discounts applied.

- As a User I am alerted when I apply an invalid voucher to my shopping cart.

- As a User I am unable to add Out of Stock products to the shopping cart.

## Screenshots

Desktop:

![screenshot](/public/images/desktop_screenshot.png)

Mobile:

![screenshot](/public/images/mobile_screenshot.png)

## Thanks, Questions or Feedback?

Thanks for reading!

I'd love feedback.

If you have any questions, thoughts, or perhaps you're just reading this on GitHub and have some further challenges around this theme, please feel free to get in touch:

- GitHubDan@gmail.com

- [Linkedin](https://uk.linkedin.com/pub/dan-blakeman/68/3a4/1a2)

- [Twitter](https://twitter.com/grok_with_dan)
