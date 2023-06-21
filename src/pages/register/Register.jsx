import './Register.css'

const Register = () => {
    return (
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
                        <input className="loginInput" placeholder='email' />
                        <input className="loginInput" placeholder='password' />
                        <input className="loginInput" placeholder='retype password' />
                        <button className="loginButton">Sign Up</button>
                        <span className="loginForgot">Already have an account?</span>
                        <button className="loginRegisterButton">Login</button>
                    </div>
                </div>
            </div>

        </div>

        </>
    )
}

export default Register