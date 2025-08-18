
const { Firestore } = require('@google-cloud/firestore');
const db = new Firestore({
  // lo deje vacío para que use las credenciales por defecto.
});

module.exports = db;
