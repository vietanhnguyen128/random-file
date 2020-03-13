const Idol = require('./Idol');

try {
  var Aoi = new Idol('Yuko Ono', 'Femalee');
} catch(error) {
  console.log('Gender is not valid.');
}