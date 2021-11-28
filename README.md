# generator-html-scss-js

- This is for anyone who wanna use this for web development
- This package includes languages such as `scss`, `js` and `html`

## **WARNING**
There is 1 annoying bug which is bugging me. The `index.html` in the line where it loads css that section. It is suppose to be `dist/css/style.css` but when you open the html file. It shows `scss/style.css`. Please change this line.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-html-scss-js using [npm](https://www.npmjs.com/) (I assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-html-scss-js
```
> Install `yo` a time only


Then generate a new project in your respective directory:

```bash
yo html-scss-js
```

## Folder structure

```bash
generator-html-scss-js
├─ .editorconfig
├─ .eslintignore
├─ .git
├─ .gitattributes
├─ .gitignore
├─ .travis.yml
├─ generators
│  └─ app
│     ├─ index.js                   Main process happend
│     └─ templates
│        ├─ .gitignore
│        ├─ app
│        │  ├─ js
│        │  │  └─ script.js
│        │  └─ scss
│        │     ├─ style.scss
│        │     └─ _variables.scss
│        ├─ gulpfile.js             Compile scss-css, copy files to their own dir
│        ├─ index.html
│        ├─ package-lock.json
│        ├─ package.json
│        └─ _gitignore
├─ LICENSE
├─ package-lock.json
├─ package.json
├─ README.md
└─ __tests__
   └─ app.js
```

## Friendly Reminder

- Please update the package every month. Run `npm update generator-html-scss-js -g`
- If you encounter any issue, please file an issue at the repo :)
- Pull request is always welcome :D
