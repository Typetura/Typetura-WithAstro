# `astro-typetura` Test Lib

We have setup individual Unit tests for each component. Testing each `prop` and against the expected output of their respective html.

## Tools

- [Mocha](https://mochajs.org/)
- Chia
- [Astro-component-tester](https://github.com/Princesseuh/astro-component-tester)

## Getting Started

Before you run the testing utility, please ensure you have an uptodate `node_modules` already setup in the `root` of the project.

### TestAll

To run tests on **ALL** components:

```bash
yarn testAll
```

This begins `mocha` testing utility. This will execute all `*.test.js` files within the `test/` directory, sequentially.

This Test runner is quite long in duration, approximately ~5 - 10 mins to complete, depending on the total number of tests and their respective size.

### TestOne

To test a single component file:

```bash
yarn testOne <path>/<filename>
```

- `path` : Paths are relative to the Root (`process.cwd()`) not `./tests/`
- `filename`: The name of the file in lowercase, without the `.test.js` suffix.

## Test Format

Each unit test is setup with a similar scope to each other. Each component has a shared set of `props`. These are:

- base
- scale
- ease
- key
- none

Depending on the scope of the component they may have additional `props` to test against. Such as: `<Headline>` && `<Caption>`
These two examples have different outputs, and we can specify these using their respective `props`.

Testing the validity of individual prop behaviour is paramount to ensuring the robustness of each component.

Each Unit test has a final master test. This is to test the application of _ALL_ the `props` being applied.
