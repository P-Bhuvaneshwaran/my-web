import React from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
// import Component from './Components/Component';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import ReactProjects from './Components/ReactProjects';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
function App() {
  const locate = useLocation();
  const hideNavPath = ['/auth-login', '/auth-signup'];
  return (
    <>
        {!hideNavPath.includes(locate.pathname) && <Navbar></Navbar>}
        <div className='Content' style={{}}>
          <Routes>
            {console.log(locate.pathname)}
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/services' element={<Services></Services>}></Route>
            <Route path='/contact-us' element={<Contact></Contact>}></Route>
            <Route path='/auth-login' element={<Login></Login>}></Route>
            <Route path='/auth-signup' element={<Signup></Signup>}></Route>
            <Route path='/react-projects' element={<ReactProjects></ReactProjects>}></Route>
            </Routes>
        </div>
    </>
  );
}

export default App;
