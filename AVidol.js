function AVidol(name) {
  this.name = name;
  this.retired = false;
}

AVidol.prototype.retire = function() {
  this.retired = true;
}

module.exports = AVidol;