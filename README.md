# cmp - A library for general comparisons

# REQUIREMENTS

 - [Node.js](http://nodejs.org/)
 - [hashkeys](http://search.npmjs.org/#/hashkeys)

# DEVELOPMENT

Checkout the code, and install the dependencies:

    $ git clone https://github.com/mcandre/node-cmp.git
    $ cd node-cmp
    $ npm install

# Linting

Keep the code tidy:

    $ npm run-script lint

# EXAMPLES

    $ npm install -g cmp
    > var cmp = require("cmp");
    > cmp.cmp(1, 1);
    0
    > cmp.cmp(1, 2);
    -1
    > cmp.cmp(2, 1);
    1
    > cmp.cmp(1, [1,2,3]);
    1
    > cmp.eq([1,2,3], [1,2,3]);
    true
    > cmp.lte([1,2], [1,2,3]);
    true
