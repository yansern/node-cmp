# cmp - A library for general comparisons

A comparison library for arbitrarily deep structures

# EXAMPLE

```
$ node
> var cmp = require("cmp");
> cmp.cmp([1, 2, 3], [1, 2, 3]);
0
> cmp.eq([1, 2, 3], [1, 2, 3]);
true
> cmp.cmp([1, 2, 3], [1, 2, 3, 4]);
-1
> cmp.eq([1, 2, 3], [1, 2, 3, 4]);
false
> cmp.cmp("abc", "abc");
0
> cmp.eq("abc", "abc");
true
> cmp.cmp("abc", "abcdef");
-1
> cmp.eq("abc", "abcdef");
false
```

# HOMEPAGE

https://github.com/mcandre/node-cmp

# NPM

https://www.npmjs.com/package/cmp

# REQUIREMENTS

* [Node.js](http://nodejs.org/) 0.8+

## Optional

* [Ruby](https://www.ruby-lang.org/) 2+
* [Bundler](http://bundler.io/)
* [Guard](http://guardgem.org/)
* [aspelllint](https://github.com/mcandre/aspelllint)

# DEVELOPMENT

## Test

Ensure the logic is correct:

```
$ grunt test
...
```

## Lint

Keep the code tidy:

```
$ grunt lint
```

## Spell Check

```
$ grunt aspelllint
```

## Local CI

Guard can automatically run testing when the code changes:

```
$ bundle
$ guard -G Guardfile
...
```

Guard can automatically lint when the code changes:

```
$ bundle
$ guard -G Guardfile-lint
...
```

## Git Hooks

See `hooks/`.
