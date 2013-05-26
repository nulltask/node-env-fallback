
[![build status](https://secure.travis-ci.org/nulltask/node-with-fallback.png)](http://travis-ci.org/nulltask/node-with-fallback)

# node-env-fallback

`NODE_ENV` with fallback.

## Installation

npm:

    $ npm install node-env-fallback

## Usage

```
var env = require('node-env-fallback');
console.log(env);
```

Without `NODE_ENV`:

    $ node env.js
    development

With `NODE_ENV`:

    $ NODE_ENV=production node env.js
    production

## License

The MIT License

Copyright © 2013 Seiya Konno &lt;nulltask@gmail.com&gt;