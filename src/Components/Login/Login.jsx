import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../../FireBase/firebase.init';

const Login = () => {
    const [user,setUser] = useState(null)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleSignOut = () =>{
        signOut(auth)
        .then((result)=>{
            // console.log(auth);
            setUser(null)
        }).catch((error)=>{
            console.log(error)
        })
    }
    const handleGithubPop = () =>{
        const gitHubProvider = new GithubAuthProvider();
        signInWithPopup(auth,gitHubProvider)
        .then(result=>{
            const gitUser = result.user;
            console.log(gitUser)
            setUser(gitUser)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    const handleGooglePop = () =>{
        signInWithPopup(auth,provider)
        .then(result=>{
            const user1 = result.user;
            console.log(user1)
            setUser(user1)
        })
        .catch(error=>{
            console.log('error', error.message)
        })
    }
    return (
        <div>
            {
                user ?   <button onClick={handleSignOut}>Sign Out</button>: <div><button onClick={()=>handleGooglePop()}>Pop Google</button> <button onClick={handleGithubPop}>Pop GitHub</button> </div>
            }
            

            {
                user && <div>
                <p>{user?.displayName}</p>
                <p>{user?.email}</p>
                <img src={user?.photoURL} alt="" />
            </div>
            }
        </div>
    );
};

export default Login;