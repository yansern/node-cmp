# cmp - A library for general comparisons

# EXAMPLE

    $ npm install
    > var cmp = require("./cmp");
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

# HOMEPAGE

https://github.com/mcandre/node-cmp

# REQUIREMENTS

* [Node.js](http://nodejs.org/)

# INSTALL

    $ npm install cmp

# LINT

Keep the code tidy:

    $ npm run-script lint
