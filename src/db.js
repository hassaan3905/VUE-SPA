import * as firebase from 'firebase';

export default () => {
    const firebaseConfig = {
        apiKey: "AIzaSyD4QW52bLXiJUGTRH8wri05dE6EJStyD0E",
        authDomain: "vstore-db.firebaseapp.com",
        databaseURL: "https://vstore-db.firebaseio.com",
        projectId: "vstore-db",
        storageBucket: "vstore-db.appspot.com",
        messagingSenderId: "973215103142",
        appId: "1:973215103142:web:8165bba38b602d334adc67",
        measurementId: "G-FXRSYPWDL4"
    };

    firebase.initializeApp(firebaseConfig);
}

/* 
named exports and defualt exports
named exports can be multiple but default should be only once.

    export const key = '';
    export const a = {};
*/