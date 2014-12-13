# cmp - A library for general comparisons

# INSTALL

```
$ npm install cmp
```

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

# REQUIREMENTS

* [Node.js](http://nodejs.org/) 0.8+

## Optional

* [Ruby](https://www.ruby-lang.org/) 2+
* [Bundler](http://bundler.io/)
* [Cucumber](http://cukes.info/)
* [Guard](http://guardgem.org/)
* [aspelllint](https://github.com/mcandre/aspelllint)

# DEVELOPMENT

## Test

Ensure the example script works as expected:

```
$ grunt cucumber
Feature: Run example tests

  Scenario: Running example tests            # features/run_example_tests.feature:3
    Given the program has finished           # features/step_definitions/steps.rb:1
    Then the output is correct for each test # features/step_definitions/steps.rb:5

1 scenario (1 passed)
2 steps (2 passed)
0m0.057s
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
$ guard -G Guardfile-cucumber
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
