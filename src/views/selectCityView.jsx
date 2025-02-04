import "/src/style.css";

export function SelectCityView(props) {
  return (
    <div className="selectCity">
      <img
        classname="background-video"
        src="https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg"
        id="myVideo"
        width={"100%"}
      />

      <div className="Citybody">
        <h2 className="cityheader">Select City</h2>
        <div>
          <input
            className="SelectCitytextBox"
            size="20"
            value={props.text || ""}
            onChange={textInputACB}
            placeholder="   Where are you today?"
          ></input>
          <button
            className="enterCityButton"
            onClick={clickSearchACB}
            disabled={props.text === undefined}
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );

  function textInputACB(evt) {
    console.log("location choosed", evt);
    props.inputText(evt.target.value);
  }

  function clickSearchACB(evt) {
    console.log("clicked enter", evt);
    props.selectingCity();
    window.location.hash = "#/mainpage";
  }
}
