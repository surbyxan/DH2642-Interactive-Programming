import "/src/style.css";

export function CreateAccountView(props) {
  return (
    <body className="createAccountContainer">
      <div className="createAccountBox">
        <h3>Create Account!</h3>
        <div className="loginButtonandTextBox">
          <input
            className="loginTextBoxes"
            onChange={nicknameACB}
            placeholder="Enter Nickname"
          ></input>
          <input
            className="loginTextBoxes"
            id="emailInput"
            placeholder="Enter E-mail"
          ></input>

          <input
            className="loginTextBoxes"
            id="passwordInput"
            placeholder="Enter password"
            type="password"
          ></input>

          <button className="loginButton" onClick={createAccountACB}>
            Create Account!
          </button>
          <a className="registerLink" href="#/">
            Already have an account? Login here!
          </a>
        </div>
      </div>
    </body>
  );

  function nicknameACB(evt) {
    props.onNickname(evt.target.value);
  }

  function createAccountACB() {
    props.onCreateAccount();
  }
}
