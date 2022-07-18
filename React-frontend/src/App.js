import React,{useState} from 'react'
import ImgCarousel from './components/carousel/ImgCarousel';
import Destinations from './components/destinations/Destinations'
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Login from './components/login/login';
import Navbar from './components/navbar/Navbar'
import Register from './components/register/Register';
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
import Home from './Home';
// import Pacakage from './components/pacakges/Pacakage';
import ListEmployeeComponent from './components/Booking/ListEmployeeComponent';
import AddEmployeeComponent from './components/Booking/Book';


import LoginForm from './components/LoginForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const adminUser={
    email:"admin@admin.com",
    password:"admin123" 
  }
  const userdata=[
    {email:"admin@admin.com",
    password:"admin123"},
    {email:"saheli@gmail.com",
    password:"admin123"},


]
  const[user,setUser]=useState({name:"",email:""});
  const[error,setError]=useState("");

  const Login1=details=>{
    console.log(details);
    const abc=userdata.filter(item=>{return (item.email===details.email && item.password===details.password)})
    if(abc.length>0){
        console.log("Logged in");
        setUser({
            name:details.name,
            email:details.email
        });
      }else{
        console.log("Details do not match!");
        setError("Details do not match!") ;                                                                      
  }
}

  const Logout=()=>{
    setUser({name:"", email:" "});
  }
  return (
    <>
    <div className="App">
        {(user.email !==" ") &&(
            <div className="Welcome">
                {/* <h2>Welcome,<span> {user.name}</span></h2> */}
                {/* <button onClick={Logout}>Logout</button> */}
                </div>
         )//:( 
        //     <LoginForm Login1={Login1} error={error}/>
        // )
}
    </div>

      <div>
        <Router>
          <Navbar Logout={Logout} user={user} />
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/login' element={< Login Login1={Login1} user={user} error={error}/>}></Route>
            <Route exact path='/register' element={< Register />}></Route>
            <Route path="/employees" element={<ListEmployeeComponent />}></Route>
            <Route path="/add-employee" element={<AddEmployeeComponent />} ></Route>
            <Route path="/edit-employee/:id" element={<AddEmployeeComponent />}></Route>
          </Routes>
          <Footer />
          {/* <LoginForm/>  */}
        </Router>

      </div>
      
    </>
  );
}

export default App;
