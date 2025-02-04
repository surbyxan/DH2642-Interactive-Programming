//Views the wheather

export function WeatherView(props) {
  return (
    <div className="weatherViewBody">
      <img
        src="https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg"
        width={"100%"}
      />
      <div className="weatherbox">
        <div className="weatherCity">
          <h2>Weather in {props.location} </h2>
          <div className="weatherIcon">
            <img src={`https:${props.weatherData.current.condition.icon}`} />
          </div>
        </div>
        <div className="weatherDetails">
          <h3>Temperature: {props.weatherData.current.temp_c} °C</h3>
          <h3>Humidity: {props.weatherData.current.humidity} %</h3>
          <h3>UV-index: {props.weatherData.current.uv}</h3>
        </div>
      </div>
    </div>
  );
}
