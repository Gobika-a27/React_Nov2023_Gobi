 import Login from './components/Login';
  import Hero from './components/Hero';
//import Header from './components/Header';
import Navbar from './components/Navbar';
 import Footer from './components/Footer';
import React from 'react';
import About from './components/About';

 import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
 import Registration from './components/Registration';
import Investors from './components/Investors';
import CONTACTUS from './components/CONTACTUS';
 function App() {
  return (
     <Router>
     <div className="App">
    <Navbar/>
     <Routes>
       <Route path="/"element={<Hero/>}/>
        <Route path="/Login" element={<Login/>}/>
       <Route path="/SignUp" element={<Registration/>}/>
       <Route path="/Contact" element={<CONTACTUS/>}/>
       <Route path="/investors" element={<Investors/>}/>
       <Route path="/aboutus" element={<About/>}/>

     </Routes>
      <Footer/>
    
      </div>
     </Router>
  
   );
 }

 export default App;
 
