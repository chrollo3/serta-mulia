const { Firestore } = require('@google-cloud/firestore');

async function storeData(id, data) {
    const db = new Firestore({ databaseId: 'db-test' });
   
    const predictCollection = db.collection('prediction');
    return predictCollection.doc(id).set(data);
}
   
module.exports = storeData;