import React, { useState }from 'react';
import './Login.css';
import img5 from './Images/login.png';
import FaceIcon from '@material-ui/icons/Face';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";





function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signIn = e => {

        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
            history.push('/')
            })
        .catch(error => alert(error.message))

        // some fancy firebase login
    }




    const register = e => {
        e.preventDefault();

        //do some fancy firebase register

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            }
        )
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__card">
                <Link to='/'>
                    <img className="login__logo" src={img5} />
                    </Link>
                
                    <div className="login__title">
                        SPARX
                </div>
                <div className="login__subtitle">
                    Please Login
                </div>



                <form>



                <div className="login__fields">
                    <div className="login__username">
                            < FaceIcon className="login__fields__icons" />
                            
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} className="login__userinput" placeholder="E-mail" />
                            
                    </div>
                    <div className="login__password">
                            < VpnKeyIcon className="login__fields__icons" />
                            
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)}className="login__passinput" placeholder="password" />
                            
                    </div>
                </div>
                    <button type="submit" onClick={signIn} className="login__signin">LogIn</button>


                </form>
                <div className="login__terms">
                    By Signing-in you agree to our Terms and Conditions.
                </div>


                <button className="login__register" onClick={register}>
                    Create new account
                </button>
            </div>
        </div>
    )
}

export default Login
