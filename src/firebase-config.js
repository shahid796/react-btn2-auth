import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARRyO0PJKG134-_vWuX_pyeczUQqnTW5g",
    authDomain: "fir-auth2-6f320.firebaseapp.com",
    projectId: "fir-auth2-6f320",
    storageBucket: "fir-auth2-6f320.appspot.com",
    messagingSenderId: "864075262622",
    appId: "1:864075262622:web:235f14efecb01836fee98f",
    measurementId: "G-53PJ2YFPCB"
  };

  const app = initializeApp(firebaseConfig)
 export  const auth = getAuth(app)