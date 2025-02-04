import "/src/style.css";

export function ForgotPasswordView(props) {
  return (
    <body className="createAccountContainer">
      <div className="createAccountBox">
        <div className="loginButtonandTextBox">
          <input
            className="loginTextBoxes"
            id="emailInput"
            placeholder="Enter E-mail"
          ></input>

          <button className="loginButton" onClick={forgotPasswordACB}>
            Send Password Reset Email
          </button>
          <a className="registerLink" href="#/">
            Go back to Login page
          </a>
        </div>
      </div>
    </body>
  );

  function forgotPasswordACB() {
    props.onForgotPassword();
  }
}
