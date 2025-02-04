//Pictures and information about the suitable product
import "/src/style.css";

export function SkinCareView(props) {
  return (
    <div className="SkinCareView">
      <div className="skincareHeader">
        <h2>Skincare recommendations</h2>
      </div>
      <div>
        <div className="skincare">
          <div className="skincarefacts">
            <h4>
              Based on the temperature you need a {props.skincare.product}{" "} 
              today,
            </h4>
            <p>{props.skincare.facts}</p>
          </div>
          <div className="skincarefacts">
            <h4>
              Based on this UV-Index you need SPF {props.sunscreen.product},
            </h4>
            <p>{props.sunscreen.facts}</p>
          </div>

          <div class="container noselect">
            <div class="canvas">
              <div class="tracker tr-1"></div>
              <div class="tracker tr-2"></div>
              <div class="tracker tr-3"></div>
              <div class="tracker tr-4"></div>
              <div class="tracker tr-5"></div>
              <div class="tracker tr-6"></div>
              <div class="tracker tr-7"></div>
              <div class="tracker tr-8"></div>
              <div class="tracker tr-9"></div>
              <div class="tracker tr-10"></div>
              <div class="tracker tr-11"></div>
              <div class="tracker tr-12"></div>
              <div class="tracker tr-13"></div>
              <div class="tracker tr-14"></div>
              <div class="tracker tr-15"></div>
              <div class="tracker tr-16"></div>
              <div class="tracker tr-17"></div>
              <div class="tracker tr-18"></div>
              <div class="tracker tr-19"></div>
              <div class="tracker tr-20"></div>
              <div class="tracker tr-21"></div>
              <div class="tracker tr-22"></div>
              <div class="tracker tr-23"></div>
              <div class="tracker tr-24"></div>
              <div class="tracker tr-25"></div>
              <div id="card">
                <p id="prompt">{props.skincare.advice}</p>
                <div class="title">{props.sunscreen.advice}</div>
                <div class="subtitle">hover me</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
