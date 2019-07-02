import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBXHlRIl7tRS6Jkbx-vgEWzuN7FJU7b5mo",
    authDomain: "lainies-frontend.firebaseapp.com",
    databaseURL: "https://lainies-frontend.firebaseio.com",
    projectId: "lainies-frontend",
    storageBucket: "lainies-frontend.appspot.com",
    messagingSenderId: "997126510227",
    appId: "1:997126510227:web:07fd7c642e700b44"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;