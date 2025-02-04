import { ForgotPasswordView } from "../views/forgotPasswordView.jsx";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword(props) {
  const auth = getAuth();

  function onforgotPasswordACB() {
    sendPasswordResetEmail(auth, document.getElementById("emailInput").value)
      .then(function sentEmail() {
        alert(
          "Passage reset email has been sent! Check your email and navigate back to login and login with the new credentials!"
        );
      })
      .catch(function (error) {
        alert(
          "There was an error in sending the email. Error: " + error.message
        );
      });
  }

  return (
    <div>
      <ForgotPasswordView onForgotPassword={onforgotPasswordACB} />
    </div>
  );
}

export { ForgotPassword };
