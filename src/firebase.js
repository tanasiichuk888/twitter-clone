import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDiosiUx8YlgbyM5IJhNS9QXnjgAe5lpUY",
    authDomain: "twitter-clone-3e268.firebaseapp.com",
    databaseURL: "https://twitter-clone-3e268.firebaseio.com",
    projectId: "twitter-clone-3e268",
    storageBucket: "twitter-clone-3e268.appspot.com",
    messagingSenderId: "266777537230",
    appId: "1:266777537230:web:5c1e7a91f9550370763e9f",
    measurementId: "G-Y9P2QQ9SBW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;