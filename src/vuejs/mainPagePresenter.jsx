//presents both weather and skincare
import { SkinCareView } from "../views/skinCareView";
import { WeatherView } from "../views/weatherView";
import { SideBarView } from "../views/sideBarView";
import { compareSkincareWeather } from "../utilities";
import { compareSkincareUV } from "../utilities";
import { auth } from "../firebaseModel.js";
import { signOut } from "firebase/auth";
import "/src/style.css";
import { loadingView } from "../views/loadingView.jsx";

function MainPage(props) {
  function changeCityACB() {
    window.location.hash = "#/selectCity";
  }

  if (
    props.model.locationPromiseState?.error ||
    props.model.searchResultsPromiseState?.error
  ) {
    return (
      <div className="errorMessage">
        <h2 className="notFound">City Not Found.</h2>
        <h3 className="pleaseCheck">
          Please check the spelling or try searching for a different city.
        </h3>
        <span className="noDataText" onClick={changeCityACB}>
          Retry Search
        </span>
      </div>
    );
  }

  if (props.model.locationPromiseState?.data && !props.model.weatherFetched) {
    props.model.setLngLat(props.model.locationPromiseState);
    const latlng = `${props.model.lat},${props.model.long}`;
    console.log("check", latlng);
    props.model.setSearchQuery(latlng);
    props.model.weatherFetch(props.model.searchParams);

    props.model.weatherFetched = true;
  }

  if (
    props.model.searchResultsPromiseState.promise &&
    !props.model.searchResultsPromiseState.data
  ) {
    return (
      <div>
        <loadingView />
      </div>
    );
  } else if (
    props.model.searchResultsPromiseState.error &&
    !props.model.searchResultsPromiseState.promise
  ) {
    return <div>{props.model.searchResultsPromiseState.error.toString()}</div>;
  } else if (
    !props.model.searchResultsPromiseState.promise &&
    !props.model.searchResultsPromiseState.data
  ) {
    return (
      <div className="noDataMessage">
        <h2 className="notAvailable">No Weather Data Available.</h2>
        <h3 className="pleaseTryAgain">Please try again</h3>
        <span className="tryAgain" onClick={changeCityACB}>
          Try Again
        </span>
      </div>
    );
  }

  if (
    props.model.searchResultsPromiseState &&
    props.model.searchResultsPromiseState.data
  ) {
    var currentWeather = props.model.searchResultsPromiseState.data.current;

    if (currentWeather) {
      var temperature = currentWeather.temp_c;
      var uvIndex = currentWeather.uv;
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
        <div className="mainbody">
          <WeatherView
            weatherData={props.model.searchResultsPromiseState.data}
            location={props.model.city}
          />
          <SkinCareView
            skincare={props.model.getSkincare(
              compareSkincareWeather(temperature)
            )}
            sunscreen={props.model.getSkincare(compareSkincareUV(uvIndex))}
          />
        </div>
      </div>
    );
  }
}

export { MainPage };
