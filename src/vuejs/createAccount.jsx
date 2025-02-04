import { CreateAccountView } from "../views/createAccount";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseModel.js";

function CreateAccount(props) {
  function onCreateAccountACB() {
    createUserWithEmailAndPassword(
      auth,
      document.getElementById("emailInput").value,
      document.getElementById("passwordInput").value
    )
      .then(function handlingLogin() {
        window.location.hash = "#/selectcity";
      })
      .catch(function (error) {
        alert("Error creating account: " + error);
      });
  }

  function onNicknameACB(text) {
    props.model.setNickname(text);
  }

  return (
    <div>
      <CreateAccountView
        onCreateAccount={onCreateAccountACB}
        onNickname={onNicknameACB}
      />
    </div>
  );
}

export { CreateAccount };
