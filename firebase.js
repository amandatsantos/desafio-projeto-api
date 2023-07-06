const admin = require('firebase-admin');

const serviceAccount = require('./key.json');
const BUCKET = 'gs://projeto-api-ff52d.appspot.com';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://projeto-api-ff52d-default-rtdb.firebaseio.com',
  storageBucket: BUCKET,
});
// const firestore = admin.firestore();
// firestore.settings({ ignoreUndefinedProperties: true });
module.exports = admin;
