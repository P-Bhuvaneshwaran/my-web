import React, {useEffect, useState } from 'react';
import './auth.css'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../Config';
import NetConn from '../Components/NetConn';
function Login(){
    const [email, setEmail] = useState([]);
    const [pass, setPass] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        auth.onAuthStateChanged((email)=>{
            if(email){
                console.log("logged in");
                navigate('/home');
            }
            else{
                console.log("not yet")
                navigate('/auth-login');
            }
        })
    },[])
    
    const validateEmail = (email)=>{
        const regEx = /^[^\s@]+@[^\@]+\.[^\s@]+$/;
        return regEx.test(email);
    }

    const validatePassword=(pass)=>{
        const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        return regEx.test(pass)
    }

    const validateLog = (e)=>{
        e.preventDefault();
        setErrorMsg('');


        if(email.length!==0 && pass.length !==0){

            if(!validateEmail(email)){
                setErrorMsg("Please enter a valid email address")
                return;
            }

            if(pass.length<8){
                setErrorMsg("Password length must be 8 or more")
                return
            }
            if(!validatePassword(pass)){
                setErrorMsg("Please enter a Strong password.");
                return;
            }
            
            setEmail(email)
            setEmail(pass)
            setErrorMsg('');  
            signInWithEmailAndPassword(auth,email,pass)
            .then(()=>{
                console.log("logged in");
                navigate('/home');
            }) 
            .catch((error)=>{
                console.log(error.code)
                switch(error.code){
                    case 'auth/invalid-email':
                        setErrorMsg("Please enter a valid email address")
                        break;
                    case 'auth/weak-password':
                        setErrorMsg("Strong password required");
                        break;
                    case 'auth/wrong-password':
                        setErrorMsg("Please enter a valid password");
                        break;
                    default:
                        setErrorMsg("Please enter valid email and password");
                }
                
            }); 
         }
        else{
            setErrorMsg("All fields are required.");
        }
    }
    return(
        <div>
            <div className="login-box">
                <form action="/home" name="myForm" id="myForm" onSubmit={validateLog}>
                    <h2>Continue</h2>
                    {errorMsg && <p className='errorMsg' style={{padding:'3px 5px',backgroundColor: 'rgb(243, 147, 147)',color: 'rgb(255, 1, 1)',marginTop: '3px'}}>{errorMsg}</p>}
                    <label >Email</label>
                    <input type="text" placeholder="Enter Your Email Address:" name="uEmail" onChange={(e)=>setEmail(e.target.value)} />
                    <label >Password</label>
                    <input type="password" placeholder="Enter Your Password:" name="uPass" onChange={(e)=>setPass(e.target.value)} />
                    <input type="submit" value="Login"/>
                    
                    <p>If you don't have an account ? <Link to={'/auth-signup'}>Signup</Link></p>
            <NetConn></NetConn>
                </form>
            </div>
        </div>
    )
}

export default Login;