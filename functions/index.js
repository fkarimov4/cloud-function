const functions = require("firebase-functions");

exports.sayHello = functions.https.onRequest((req, res) => {
    const message = 'Hello my little friend'
    res.send(message)
})


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
