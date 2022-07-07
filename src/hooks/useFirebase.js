import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged, FacebookAuthProvider, signInWithPopup, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../Firebase/firebaseConfig";


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    //social media providers
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();



    //facebook login
    const handleFacebookLogin = () => {
        signInWithPopup(auth, facebookProvider)
            .then(res => {
            })
            .catch(error => {
                setError(error.message);
            })
    };

    //github login
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(res => {
            })
            .catch(error => {
                setError(error.message);
            });
    };

    //google login
    const handleGoogleLogin = (from) => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
            })
            .catch(error => {
                setError(error.message);
            })
    };


    // get current user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // ...
            } else {
                setUser({});
            }
        });
    }, []);

    //login user with email and pass
    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // creating user with email and pass
    const handleCreateUser = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                handleUserUpdate(name);
                setUser(res.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handleUserUpdate = name => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            setError(error.message);
        });
    };

    // logout user
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch((error) => {
                // An error happened.
            });
    }
    return {
        user,
        handleCreateUser,
        handleUserLogin,
        handleLogout,
        handleFacebookLogin,
        handleGithubLogin,
        handleGoogleLogin,
        error
    };
};

export default useFirebase;