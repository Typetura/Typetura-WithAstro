# Astro Component Template 🧑‍🚀

This is a template meant to ease the development of components for [Astro](https://astro.build/) that are intended for distribution. It does so by providing you with:

- A clear default directory structure
- Proper TypeScript settings for working with Astro
- Default settings for ESLint, Prettier and EditorConfig inspired by the formatting used in the Astro project itself (also, [the config files are typed 👀](https://princesseuh.netlify.app/article/youshouldtypeyourconfigfiles/))
- Ready-to-use testing tools powered by the libraries also used by the Astro project (Mocha and Chai), also contain [astro-component-tester](https://github.com/Princesseuh/astro-component-tester) to help you test the output of your component(s)
- Preconfigured VS Code workspace settings file with settings meant to make development cozy and nice

Hopefully, all of this together will provide you with a fun and comfortable development environnement for working on your Astro component! 🚀 Also, never forget that this is only a template to get you started, if you don't agree with any of the choices made, feel free to change it to fit your project better!

**⚠️ Don't forget:** You should edit `package.json` with the info relevant to your project, such as a proper `name`, a license, a link to the repository for the npm website and other settings. You should also adjust the Astro `peerDependency` to the lowest version of Astro you support

## Project Overview

```tree
packages
└── typetura
    ├── main.ts
    ├── package.json
    ├── Typetura.astro
    └── TypeturaP.astro
test
├── README.md
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

ESLint, Prettier and EditorConfig settings are respectively located in the following files: `.eslintrc.js`, `.prettierrc.js` and `.editorconfig` at the root of this template project.

## Commands

The following npm scripts are provided to lint and format your project

| Command           | Action                                                        |
| :---------------  | :------------------------------------------------------------ |
| `npm run test`    | Run tests using Mocha                                         |
| `npm run format`  | Format your project using Prettier, this edits files in-place |
| `npm run lint`    | Lint your project using ESLint                                |
| `npm run dev`     | Launches the Dev Server                                       |
| `npm run publish` | Publish Component to NPM                                      |

