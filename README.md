
# Products managment

<span style="color:#008000">**Web application**</span>

## Description

Management of goods and their flow

## Stack

**Lib**: React

**Store**: Redux toolkit/RTK Query

**Architecture**: FSD

## Getting started 

npm install (with version node >= 20)

npm run dev

## Linter

npm run lint

## VSC config linter

path: .vscode/setting.json

content:
{
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,
  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    {
      "rule": "style/*",
      "severity": "off",
      "fixable": true
    },
    {
      "rule": "format/*",
      "severity": "off",
      "fixable": true
    },
    {
      "rule": "*-indent",
      "severity": "off",
      "fixable": true
    },
    {
      "rule": "*-spacing",
      "severity": "off",
      "fixable": true
    },
    {
      "rule": "*-spaces",
      "severity": "off",
      "fixable": true
    },
    {
      "rule": "*-order",
      "severity": "off",
      "fixable": true
    },
    {
      "rule": "*-dangle",
      "severity": "off",
      "fixable": true
    },
    {
      "rule": "*-newline",
      "severity": "off",
      "fixable": true
    },
    {
      "rule": "*quotes",
      "severity": "off",
      "fixable": true
    },
    {
      "rule": "*semi",
      "severity": "off",
      "fixable": true
    }
  ],
  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "svelte",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ]
}



<span style="color:#008000">**Server application**</span>

## Description
Processing requests on the server

## Stack

**Lib**: Nest

**Store**: no(variable)

**Architecture**: MVS

## Project setup

```bash
$ npm install (with version node >= 20)
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod








