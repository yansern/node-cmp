# cmp - A library for general comparisons

# EXAMPLE

    $ npm install
    node example.js 
    0
    -1
    1
    1
    true
    true

# HOMEPAGE

https://github.com/mcandre/node-cmp

# REQUIREMENTS

* [Node.js](http://nodejs.org/)

## Optional

* [Ruby](https://www.ruby-lang.org/) 2+
* [Bundler](http://bundler.io/)
* [Cucumber](http://cukes.info/)
* [Guard](http://guardgem.org/)

# TESTING

Ensure the example script works as expected:

    $ bundle
    $ cucumber
    Feature: Run example tests

      Scenario: Running example tests            # features/run_example_tests.feature:3
        Given the program has finished           # features/step_definitions/steps.rb:1
        Then the output is correct for each test # features/step_definitions/steps.rb:5

    1 scenario (1 passed)
    2 steps (2 passed)
    0m0.057s

Guard can automatically run testing when the code changes:

    $ bundle
    $ guard -G Guardfile-cucumber
    ...

# INSTALL

    $ npm install cmp

# LINT

Keep the code tidy:

    $ npm run-script lint
