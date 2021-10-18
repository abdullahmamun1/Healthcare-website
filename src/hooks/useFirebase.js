import { useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
import { GoogleAuthProvider,getAuth, signInWithPopup, signOut } from "firebase/auth";

initializeAuthentication();




const useFirebase = () => {
    const [user,setUser] = useState({})

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
        setUser(result.user);
    });
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
          })
    }



    return {
        user,
        signInUsingGoogle,
        logOut
                                                                                   
    };
};

export default useFirebase;