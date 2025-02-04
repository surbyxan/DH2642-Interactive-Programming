export function SideBarView(props) {
  return (
    <div className="sideBarBody">
      {props.nickname && (
        <span className="nickname">Welcome {props.nickname}!</span>
      )}
      <div className="sidebarLinkContainer">
        <span className="sidebarLink" onClick={changeCityACB}>
          Change City
        </span>
        <span className="sidebarLink" onClick={mainPageACB}>
          Main Page
        </span>
        <span className="sidebarLink" onClick={aboutUsACB}>
          About Us
        </span>
      </div>
      <button className="sidebarLogout" onClick={logoutACB}>
        Logout
      </button>
    </div>
  );

  function logoutACB() {
    props.onLogout();
    window.location.reload();
  }

  function aboutUsACB() {
    window.location.hash = "#/aboutUs";
  }
  function mainPageACB() {
    window.location.hash = "#/mainpage";
  }

  function changeCityACB() {
    window.location.hash = "#/selectCity";
  }
}
