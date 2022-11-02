import { initializeApp} from 'firebase/app'
import { getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth'

import {
getFirestore,
doc,getDoc,setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDMT58siu4Bt-8ms4scafRG5lzf3vcgM0k",
    authDomain: "crown-clothing-db-50afe.firebaseapp.com",
    projectId: "crown-clothing-db-50afe",
    storageBucket: "crown-clothing-db-50afe.appspot.com",
    messagingSenderId: "708694502723",
    appId: "1:708694502723:web:dea6db43313a212e9013f6"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  
  // Sign in with popup
  
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: "select_account"
    })
    
   export const auth = getAuth(firebaseApp);

   export const signInWithGooglePopup = () => signInWithPopup(auth,provider)

   export const db = getFirestore();

   export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)
    

    if (!userSnapshot.exists()) {
      const {displayName, email} = userAuth
      const createdAt = new Date()

      try {
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt
      })
    } catch (error){
        console.log('error creating the user',error.message)
    }
}
return userDocRef

}
 