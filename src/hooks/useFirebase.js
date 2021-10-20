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
    const [isLoading, setIsLoading] = useState(true)
   
    const auth = getAuth(); 


    
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
        setUser(result.user);
    })
    .catch(error => setError(error))
    .finally(()=> setIsLoading(false));
    }

    
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    },[])


    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const createNewUser = (email,password) => {

        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
        setUser(result.user);
        setUserName()
        setError('')
        })
        .catch(error => {
        setError(error.message)
    })
    .finally(()=> setIsLoading(false));
    
        
} 
    const handleRegister = e => {
    e.preventDefault();
    createNewUser(email,password)
}


    const processLogin = (email,password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
            // setUserName()
            setError('')
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(()=> setIsLoading(false))
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
        setIsLoading(true)
        signOut(auth)
        .then(() => {
            setUser({});
          })
        .finally(() => setIsLoading(false))
    }



    return {
        user,
        error,
        isLoading,
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