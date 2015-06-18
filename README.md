# A toy app - Creating an online shop with Angular

## How to use:

- Firstly run the site locally by typing:

```
http-server ./

```

- To visit the site in your browser visit:

  http://localhost:8080/index.html

- To run feature tests simply run the following command:
  ```
  protractor test/e2e/conf.js
  ```
- To have the unit tests auto run in the background:
  ```
  karma start test/karma.conf.js
  ```

- There is three implemented voucher code you can use:

  ### Vouchers

  - 5FORSUMMER
  - FOOTWEAR15
  - OVER50

## Approach

## Notes

Factory - Use service instead to call RESTful api.

Would use product Id stored in db not index.

Would only update quanities upon checkout in production. Save server calls - user changes mind.

Following common practice only allow one voucher, second replaces first.

Valid vouchers would be a api call to backend in production

refactor voucher functions so can be injected to minimise dependency

show voucher info message

spy on cart calling voucher in test

check rubyism var naming

validVouchers would call restful API and return objects to prevent abuse. Mocked this with factory. However it felt wrong not to test these factorys like other angular factorys so each is fully tested.
