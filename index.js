const fs = require('fs');
const resolve = require('path').resolve;
const jsFiles = /\.js$/;

module.exports = function (directory) {
  const modules = {};
  const path = resolve(directory);
  const files = fs.readdirSync(path);

  files
    .filter(file => jsFiles.exec(file))
    .forEach(file => {
      const f = resolve(directory, file);

      if (fs.lstatSync(f).isFile()) {
        Object.assign(modules, require(f));
      }
    });

  return modules;
};