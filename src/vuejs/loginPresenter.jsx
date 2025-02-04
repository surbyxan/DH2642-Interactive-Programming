//displays the login page
import { LogInView } from "../views/loginView";
import { auth } from "../firebaseModel.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

function LogIn(props) {

  function onLoginGoogleACB() {
    console.log("onlogingoogleacb");
    signInWithPopup(auth, provider)
      .then(function handleLogin() {
            if (!props.model.city) {
              window.location.hash = "#/selectcity";
            } else {
              props.model.setSearchQuery(props.model.city);
              props.model.doSearch(props.model.searchParams);
              window.location.hash = "#/mainpage";
            }
          
      })
      .catch(function (error) {
        alert("Error logging in: " + error);
      });
  }

  function onLoginACB() {
    signInWithEmailAndPassword(
      auth,
      document.getElementById("emailInput").value,
      document.getElementById("passwordInput").value
    )
      .then(function handleLogin() {
        const intervalId = setInterval(function checkReady() {
          if (props.model.ready) {
            clearInterval(intervalId);
            if (!props.model.city) {
              window.location.hash = "#/selectcity";
            } else {
              props.model.setSearchQuery(props.model.city);
              props.model.doSearch(props.model.searchParams);
              window.location.hash = "#/mainpage";
            }
          }
        }, 25);
      })
      .catch(function (error) {
        alert("Error logging in: " + error);
      });
  }

  return (
    <div>
      <LogInView onLoginGoogle={onLoginGoogleACB} onLogin={onLoginACB} />
    </div>
  );
}

export { LogIn };
