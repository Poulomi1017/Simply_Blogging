let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyAqWhgvvDFDpCVBQJG0tWegLJgunaE6vLQ",
    authDomain: "blogging-website-83a88.firebaseapp.com",
    projectId: "blogging-website-83a88",
    storageBucket: "blogging-website-83a88.appspot.com",
    messagingSenderId: "112343329660",
    appId: "1:112343329660:web:d5b9a7a770c0a16f8ad2f9",
    measurementId: "G-HVYDWGQZKZ"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();