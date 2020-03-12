const Idol = require('./Idol');
const Person = require('./Person');

var Aoi = new Idol('Yuko Ono');

//Aoi.sayHi();

var Me = new Person('VA', 22, 'Male');

Me.addFavorite(Aoi);

console.log(Me);