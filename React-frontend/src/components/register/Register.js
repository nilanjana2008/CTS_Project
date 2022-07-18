import React from "react";
import "./Register.css";
const Register = () => {
    return (
        <>
            <section>
                <div class="container">
                    <div class="user signinBx">
                        <div class="imgBx"><img src="https://images.unsplash.com/photo-1570554886111-e80fcca6a029?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" /></div>
                        <div class="formBx">
                            <form action="register" method="POST">

                                <h2>Create an account</h2>
                                <input type="text" name="name" placeholder="Username" />
                                <input type="email" name="email" placeholder="Email Address" />
                                <input type="password" name="password" placeholder="Create Password" />
                                <input type="submit" value="Sign Up" />
                                <p class="signup">
                                    Already have an account
                                    <a href="/login" >Sign In.</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Register;