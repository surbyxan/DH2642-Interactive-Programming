//the place where the location get set
import { SelectCityView } from "../views/selectCityView";
import { SideBarView } from "../views/sideBarView";
import { auth } from "../firebaseModel.js";
import { signOut } from "firebase/auth";

function SelectCity(props) {
  function searchTextACB(text) {
    console.log("Selected: ", text);
    props.model.setSearchQuery(text);
    props.model.setCity(text);
  }

  async function searchingForCityACB() {
    props.model.doSearch(props.model.searchParams);
  }

  function onLogOutACB() {
    signOut(auth).then(function handleLogin() {
      window.location.hash = "#/";
      window.location.reload();
    });
  }

  return (
    <div>
      <SideBarView onLogout={onLogOutACB} nickname={props.model.nickname} />
      <SelectCityView
        text={props.model.city}
        inputText={searchTextACB}
        selectingCity={searchingForCityACB}
      />
    </div>
  );
}

export { SelectCity };
