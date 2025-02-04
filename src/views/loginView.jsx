import "/src/style.css";

export function LogInView(props) {
  return (
    <body className="loginContainer">
      <div className="leftSide">
        <div className="welcome">
          <h1>Welcome to Weatherglow!</h1>
        </div>
      </div>

      <div className="rightSide">
        <div className="pleaseLogIn">
          <h3>Please log in!</h3>
        </div>
        <div className="loginButtonandTextBox">
          <input
            className="loginTextBoxes"
            id="emailInput"
            placeholder="E-mail"
          ></input>

          <input
            className="loginTextBoxes"
            id="passwordInput"
            placeholder="Password"
            type="password"
          ></input>

          <button className="loginButton" onClick={loginACB}>
            Login
          </button>

          <button className="loginButton" onClick={loginGoogleACB}>
            Login with google
          </button>

          <button className="loginGuestButton" onClick={loginGuestACB}>
            Login as guest
          </button>
          <a className="registerLink" href="#/forgotpassword">
            Reset password
          </a>
          <a className="registerLink" href="#/createaccount">
            Don't have an account? Register here!
          </a>
        </div>
        <div className="appdescription">
          <p>
            Weatherglow delivers skincare tips tailored to the weather, keeping
            your skin healthy and radiant!
          </p>
        </div>
      </div>
    </body>
  );

  function loginACB() {
    props.onLogin();
  }

  function loginGoogleACB() {
    props.onLoginGoogle();
  }
  function loginGuestACB() {
    window.location.hash = "#/selectcity";
  }
}
