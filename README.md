# rails_es6_react_starter_kit

## 1. Gemfile
```ruby
gem 'browserify-rails'
```
Browserify-rails allows to use browserify within assets pipeline.

## 2. package.json

Here is a typical package json for es7 + react + rails:

Versions may need update. [npm-check](https://www.npmjs.com/package/npm-check) is killing it for that.

```javascript
{
  "name": "my app",
  "dependencies" : {
    "babel": "6.5.2",
    "babelify": "7.3.0",
    "babel-preset-es2015": "6.14.0",
    "babel-preset-react": "^6.3.13",
    "babel-preset-stage-0": "^6.3.13",
    "babel-plugin-syntax-async-functions": "^6.3.13",
    "babel-plugin-transform-regenerator": "^6.3.18",
    "babel-polyfill": "^6.3.14",
    "browserify": "~13.1.0",
    "browserify-incremental": "^3.0.1",
    "react": "^15.0.0",
    "react-addons-css-transition-group": "^15.0.0",
    "react-catalyst": "0.3.1",
    "react-dom": "^15.0.0",
    "react-mixin": "3.0.5",
    "react-router": "^2.7.0"
  },
  "license": "MIT",
  "engines": {
    "node": ">=4.0.0"
  }
}
```

Then run `npm install`

## 3. `config/application.rb`

Add at the end of `Application` class:

```ruby
config.browserify_rails.commandline_options = "-t [ babelify --presets [ es2015 react stage-0 ] --plugins [ syntax-async-functions transform-regenerator ] ]"
```

* `es2015` and `stage-0` babel presets allow to parse cutting edge es7
* `react` babel preset allows to parse jsx
* `syntax-async-function` and `transform-regenerator` allow to use es7 async functions


## 4. `app/assets/javascripts/application.js`

```ruby
//= require jquery
//= require jquery_ujs
//= require main
//= require turbolinks
```

## 5. `app/assets/javascripts/main.js`

```javascript
//Start coding your javascript here
require( 'babel-polyfill' );

import React from 'react';

import foo from './components/foo';

const testo = 99;

console.log(foo(testo));
```

## 5. `app/assets/javascripts/compotents/foo.js`
write some es7 code

```javascript
module.exports = function (n) { return n * 11 }
```


# You have to move 

```ruby
<%= javascript_include_tag 'application', 'data-turbolinks-track' => true %>
```

from inside `<head></head>` to the place before closing `</body>`

credit 
[Rails + Browserify + React + es7](https://gist.github.com/oelmekki/c78cfc8ed1bba0da8cee)
