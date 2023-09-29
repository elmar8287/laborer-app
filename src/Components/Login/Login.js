import React from 'react';
import firebase from 'firebase';
import "../App/App.css"

const logo = require("../../images/logo-laborer-app.png")

const Login = ({email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError}) => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return (
    <section className="login">

      <div className="loginContainer">
      <div className="app-title flex justify-center">
      {/* <h2>Laborer</h2>
      <p>save your time</p> */}
      <img src={logo} className='w-[200px] rounded-lg' />
      </div>
        <input
          maxlength="50"
          placeholder="Enter your email"
          type="email"
          autoFocus
          requered
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <input
          maxlength="50"
          placeholder="Password"
          type="password"
          requered
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">

          {
            !hasAccount ? (
              <>
                <button type="button" onClick={handleLogin} className='p-3 bg-green-400'>Login</button>
                <p>Not registrated? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
              </>
            ) : (
              <>
              <button  className='p-3 bg-orange-400' type="button" onClick={handleSignup}>Sign Up</button>
              <p>Already registrated? <span className='text-green-500' onClick={() => setHasAccount(!hasAccount)}>Login</span></p>
            </>
            )
          }

        </div>
      </div>
    </section>
  );
}

export default Login;