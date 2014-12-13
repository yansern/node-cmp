# cmp - A library for general comparisons

# EXAMPLE

```
$ grunt test
Running "exec:test" (exec) task

> cmp@0.0.2 test /Users/andrew/Desktop/src/node-cmp
> mocha



  cmp
    cmp
      ✓ should handle booleans 
      ✓ should handle integers 
      ✓ should handle doubles 
      ✓ should handle strings 
      ✓ should handle arrays 
    eq
      ✓ should handle booleans 
      ✓ should handle integers 
      ✓ should handle doubles 
      ✓ should handle strings 
      ✓ should handle arrays 


  10 passing (8ms)


Done, without errors.
```

# HOMEPAGE

https://github.com/mcandre/node-cmp

# NPM

https://www.npmjs.com/package/cmp

# INSTALL

```
$ npm install cmp
```

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
