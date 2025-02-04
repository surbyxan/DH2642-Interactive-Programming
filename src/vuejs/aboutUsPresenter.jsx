//Presents about us view
import { AboutUsView } from "../views/aboutUsView";
import { SideBarView } from "../views/sideBarView";
import { auth } from "../firebaseModel.js";
import { signOut } from "firebase/auth";

function AboutUs(props) {
  return (
    <div>
      <SideBarView onLogout={onLogOutACB} nickname={props.model.nickname} />
      <AboutUsView />
    </div>
  );

  function onLogOutACB() {
    signOut(auth).then(function handleLogin() {
      window.location.hash = "#/";
      window.location.reload();
    });
  }
}

export { AboutUs };
