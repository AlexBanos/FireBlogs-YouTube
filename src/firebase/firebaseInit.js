import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBCaqXcpgfpXM4u18LVoWu3J_CY2ORD26E",
    authDomain: "fireblogsyttutorial.firebaseapp.com",
    projectId: "fireblogsyttutorial",
    storageBucket: "fireblogsyttutorial.appspot.com",
    messagingSenderId: "993319969358",
    appId: "1:993319969358:web:018d559bd6b025a45d191f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();
