import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
import { GoogleAuthProvider,getAuth, signInWithPopup,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile,  signOut } from "firebase/auth";

initializeAuthentication();




const useFirebase = () => {
    const [user,setUser] = useState({})
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState('')
    const [name, setName] = useState('');
   
    const auth = getAuth(); 


    
    const signInUsingGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
        setUser(result.user);
    })
    .catch(error => setError(error));
    }
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        })
    },[])


    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const createNewUser = (email,password) => {
    
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
        setUser(result.user);
        setUserName()
        setError('')
        })
        .catch(error => {
        setError(error.message)
    });
    
        
} 
    const handleRegister = e => {
    e.preventDefault();
    createNewUser(email,password)
}


    const processLogin = (email,password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
            // setUserName()
            setError('')
        })
        .catch(error => {
            setError(error.message)
        })
    }
    const handleLogin = e => {
        e.preventDefault();
        processLogin(email,password)
    }

    const handleNameChange = e => {
        setName(e.target.value)
        console.log(e.target.value);
    }
    
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          }).catch((error) => {
           setError(error.message)
          });
    }
    
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({});
          })
    }



    return {
        user,
        error,
        handleRegister,
        handleEmailChange,
        handlePasswordChange,
        handleNameChange,
        handleLogin,
        signInUsingGoogle,
        logOut
                                                                                   
    };
};

export default useFirebase;