import React, { useEffect } from 'react';
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import auth from '../Config';
function Navbar(){

    const isUserLoged = auth.currentUser;
    
    useEffect(()=>{
        auth.onAuthStateChanged((email)=>{
            if(email){
                console.log("logged in");
               }
            else{
                console.log("not yet")
            }
        })
    },[])


    const signOutFunc = ()=>{
        signOut(auth)
    }
    function sliderFunc(){
        let userDetailsBox = document.querySelector('.userDetails');
        userDetailsBox.classList.toggle("active-user");

        let hambIcon = document.getElementById('userIcon');
        hambIcon.classList.toggle('hambCol');
    }
    function checkNet(){
        if(!navigator.onLine){
            alert("l");
        }
    }

    setInterval(checkNet,5000);

    return(
        <div className='header'>
            <nav>
                <h1>Bhuvi.11</h1>

                <ul id='navUl'>
                    <li><NavLink to={'/home'} style={({isActive})=>({color: isActive ? 'blue' : 'black'})} end>Home</NavLink></li>
                    <li ><NavLink to={'/about'} style={({isActive})=>({color: isActive ? 'blue' : 'black'})}>About</NavLink></li>
                    <li>Projects
                        <div id='project-list'>
                            <li><a style={{color:'black'}} href='https://p-bhuvaneshwaran.github.io/portfolio/scroll.html#portfolio' target='_blank' rel='nooperner norefferer'>Js</a></li>
                            <li><NavLink to={'/react-projects'} style={({isActive})=>({color: isActive ? 'blue' : 'black'})}>React</NavLink></li>
                        </div>
                    </li>
                    <li><NavLink to={'/services'} style={({isActive})=>({color: isActive ? 'blue' : 'black'})}>Services</NavLink></li>
                    <li><NavLink to={'/contact-us'} style={({isActive})=>({color: isActive ? 'blue' : 'black'})}>Contact</NavLink></li>
                </ul>
                <div id='first' >
                    <input type="text" placeholder='search...'></input>
                    <span><i id='hamb' class="fa-solid fa-bars"></i></span>
                </div>
                <div id='end'>
                    <i id='userIcon' class="fa-solid fa-user" onClick={sliderFunc}></i>
                        <div className='userDetails' >
                        <ul id='navUl2'>
                            <li><NavLink to={'/home'} end>Home</NavLink></li>
                            <li><NavLink to={'/about'}>About</NavLink></li>
                            
                            <li>Projects
                                <div id='project-list'>
                                    <li><a href='https://p-bhuvaneshwaran.github.io/portfolio/scroll.html#portfolio' target='_blank' rel='nooperner norefferer'>Js</a></li>
                                    <li><NavLink to={'/react-projects'}>React</NavLink></li>
                                </div>
                            </li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                        {isUserLoged ? <button onClick={signOutFunc}>Logout</button>:  <button><Link style={{color:'white'}} to={'/auth-login'}>Login</Link></button>
                       }
                        
                    </div>
                </div>
            </nav>
            {   
            }
        </div>
    )
}
export default Navbar;
