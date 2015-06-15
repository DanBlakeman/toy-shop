# A toy app - creating an online shop with Angular

## How to use:

Firstly run the site locally by typing:
  http-server

To visit the site in your browser visit:
  index.html

To run feature tests simply run:
  protractor test/e2e/conf.js

To have the unit tests auto run:
  karma start test/karma.conf.js

## Notes

Factory - Use service instead to call RESTful api.

Would only update totals upon checkout in production. Save server calls - user changes mind.
