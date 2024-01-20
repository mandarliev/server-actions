import admin from "firebase-admin";

let serviceAccount = require("./serviceAccountKey.json");

let app;

// check if app already initialized
if (admin.apps.length === 0) {
  app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  app = admin.app();
}

// get db
const adminDb = app.firestore();
export default adminDb;