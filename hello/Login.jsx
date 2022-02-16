import React from 'react';
const Login = () =>{
    return <>
    <h1>로그인 폼</h1>
    <form>
        <div>
        <label><b>Username</b></label>
        <input/><br/>
        <label><b>Password</b></label>
        <input/><br/>
        <button>Login</button><br/>
        <label><input/>Remember me</label>
        </div>
        <div>
            <button>Cancel</button><br/>
            <span>Forget<a>Password?</a></span>
        </div>
    </form>
    </>
}
export default Login;