const chalk = require('chalk');

function Idol(name) {
  this.name = name;
  this.retired = false;
}

Idol.prototype.retire = function() {
  this.retired = true;
}

Idol.prototype.sayHi = function() {
  console.log("Hello, my name is " + chalk.magenta(this.name) + '.');
}

module.exports = Idol;