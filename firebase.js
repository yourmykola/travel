// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7fYiaKeLxwyi_djuWgwsE2UMRSVdMQSQ",
    authDomain: "fir-auth-fb9b5.firebaseapp.com",
    projectId: "fir-auth-fb9b5",
    storageBucket: "fir-auth-fb9b5.appspot.com",
    messagingSenderId: "106772443157",
    appId: "1:106772443157:web:3cea3223619ac232281e1c"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else {
    app = firebse.app();
}
const auth = firebase.auth();

export { auth };