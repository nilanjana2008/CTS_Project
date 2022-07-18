import React ,{useState}from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
const Login = ({Login1,error,user}) => {
    const[details,setDetails]=useState({name:"",email:"",password:""});

    const history=useNavigate();
    const submitHandler=e=>{
        e.preventDefault();
        Login1(details);
        history("/",{replace:true});
        console.log(user);
    }

    return (
        <>
            <section>
                <div class="container">
                    <div class="user signinBx">
                        <div class="imgBx"><img src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" /></div>
                        <div class="formBx">
                            <form  onSubmit={submitHandler}>
                                <h2>Sign In</h2>
                                <input type="text"name="name"id="name" onChange={e=>setDetails({...details,name:e.target.value})} value={details.name}/>
                                <input type="text" name="email" placeholder="Email Address"  onChange={e=>setDetails({...details,email:e.target.value})} value={details.email} />
                                <input type="password" name="password" placeholder="Password" onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}/>
                                <input type="submit" value="Login" />
                                
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Login;