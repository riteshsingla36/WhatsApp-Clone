import firebase from "firebase"




const firebaseConfig = {
    apiKey: "AIzaSyAJp8ZBNewNC2_fbQ2RV7IgYZK3FFlwgs8",
    authDomain: "whatsapp-clone-bc5fb.firebaseapp.com",
    projectId: "whatsapp-clone-bc5fb",
    storageBucket: "whatsapp-clone-bc5fb.appspot.com",
    messagingSenderId: "491335456393",
    appId: "1:491335456393:web:07c00704a20ffbe5b51858"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db  = firebaseApp.firestore()

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;

