function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.favorite = [];
}

Person.prototype.addFavorite = function(item) {
  this.favorite.push(item);
}

module.exports = Person;