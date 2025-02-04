import "/src/style.css";

export function loadingView() {
  /* From Uiverse.io by zanina-yassine */
  return (
    <body className="loadingBox">
      <div class="loadingContainer">
        <div class="cloud front">
          <span class="left-front"></span>
          <span class="right-front"></span>
        </div>
        <span class="sun sunshine"></span>
        <span class="sun"></span>
        <div class="cloud back">
          <span class="left-back"></span>
          <span class="right-back"></span>
        </div>
        <div className="loadingText">
          <h6>
            Fetching Weather,
            <br />
            Matching Skincare
          </h6>
        </div>
      </div>
    </body>
  );
}
