import './Login.css'

const Login = () => {
    return(
        <>
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">MatiasSocial</h3>
                    <span className="loginDesc">Join the best social media today!</span>
                </div>
                <div className="loginRight">
                <div className="loginBox">
                        <input className="loginInput" placeholder='username' />
                        <input className="loginInput" placeholder='password' />
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forgot password?</span>
                        <button className="loginRegisterButton">Sign Up</button>
                    </div>
                </div>
            </div>

        </div>
  
        </>
    )
}

export default Login