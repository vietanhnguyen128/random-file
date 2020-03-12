const chalk = require('chalk');

function AVidol(name) {
  this.name = name;
  this.retired = false;
}

AVidol.prototype.retire = function() {
  this.retired = true;
}

AVidol.prototype.sayHi = function() {
  console.log("Hello, my name is " + chalk.magenta(this.name) + '.');
}

module.exports = AVidol;