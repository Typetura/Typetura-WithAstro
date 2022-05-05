# Astro Typetura  

Set of [Typetura](typetura.com) components built for use with [Astro](astro.build).

## 🌐 View Website

For more information on Typeture, our products and services please visit: (Typetura)[typetura.com]
## 📚 Docs

For more documentation about Typetura's Typography system visit: [Typetura Documentation]()
## Project Overview

```tree
packages
└── typetura
    ├── components
    │   ├── Blockquote.astro
    │   ├── Caption.astro
    │   ├── Custom.astro
    │   ├── Headline.astro
    │   ├── index.js
    │   ├── Meta.astro
    │   ├── Packages.astro
    │   ├── Pullquote.astro
    │   ├── SectionHeadline.astro
    │   ├── SectionLabel.astro
    │   ├── SectionSubHeadline.astro
    │   ├── SubHeadline.astro
    │   ├── Text.astro
    │   └── Typetura.astro
    ├── index.js
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    ├── types.d.ts
    ├── types.ts
    └── utils
        └── utils.ts
test
├── blockquote.test.js
├── caption.test.js
├── headline.test.js
├── meta.test.js
├── pullquote.test.js
├── README.md
├── section-headline.test.js
├── section-label.test.js
├── section-subheadline.test.js
├── subheadline.test.js
├── text.test.js
└── typetura.test.js
www
├── astro.config.mjs
├── package.json
├── public
│   └── favicon.ico
├── README.md
├── sandbox.config.json
├── src
│   └── pages
│       └── index.astro
├── tsconfig.json
└── yarn.lock
```
----

## Formatting

ESLint, Prettier and EditorConfig settings are respectively located in the following files: `.eslintrc.js`, `.prettierrc.js` and `.editorconfig` at the root of this template project.

---

## Commands

The following npm scripts are provided to lint and format your project

| Command        | Action                                                        |
| :--------------| :------------------------------------------------------------ |
| `yarn setup`   | Runs Yarn, sets up workspaces.                                |
|                | Installs project dependencies                                 |
| `yarn testAll` | Runs All tests using Mocha                                    |
| `yarn testOne` | Runs Single test on a `<file>` using Mocha                    |
| `yarn format`  | Format your project using Prettier, this edits files in-place |
| `yarn lint`    | Lint your project using ESLint                                |
| `yarn dev`     | Launches the Testing site Dev Server                          |
| `yarn build`   | Builds the Testing site                                       |
| `yarn publish` | Publish Component to NPM                                      |

---

## Support

If you are experiencing any issues with using `astro-typetura` Typography plugin. Please raise an issue within the Github repository, and we will endevour to respond to it.


