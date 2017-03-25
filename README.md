# require-dir(1)

Require a whole directory a single module.

```javascript
const requireDir = require('require-dir');

// alotoffiles/fileExportingBar.js
// alotoffiles/fileExportingBaz.js
// alotoffiles/fileExportingFoo.js
const myModule = requireDir('./alotoffiles/');

assert(myModule.Bar);
assert(myModule.Baz);
assert(myModule.Foo);
```

Only `.js` files are included in the module. The whole directory is considered a single module,
so `exports` on all files should not collide.

## Examples

```javascript
// myDir/bar.js
module.exports.bar = function () { /*...*/ };

// myDir/foo.js
module.exports.foo = function () { /*...*/ };

// myDir/anotherfoo.js
module.exports.foo = function () { /*...*/ };

// index.js
const myModule = requireDir('./myDir');
console.log(myModule);
/*
{ bar: [Function], foo: [Function] }
*/
```

