//The sidebar that is on top of the page

import { SideBarView } from "../views/sideBarView";
import { auth } from "../firebaseModel.js";
import { signOut } from "firebase/auth";

function Sidebar(props) {
  function onLogOutACB() {
    signOut(auth).then(function handleLogin() {
      window.location.hash = "#/";
    });
  }

  return (
    <div>
      <SideBarView onLogout={onLogOutACB} nickname={props.model.nickname} />
    </div>
  );
}

export { Sidebar };
