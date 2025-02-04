import "/src/style.css";

export function AboutUsView(props) {
  return (
    <div className="aboutusContainer">
        <img
          src="https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg"
          width={"100%"}
          id="myVideo"
        />

      <div className="aboutUsContent">
        <div className="descriptionWebsite">
          <h2>About Us</h2>
          <p className="textaboutUs">
            Welcome to our personalized skincare recommendation platform! Simply
            enter your city, and our smart system analyzes local weather
            conditions, such as temperature, humidity, and UV index, to suggest
            the best skincare products tailored to your environment. Whether you
            are in a sunny or dry climate, we will ensure your skin gets the
            care it needs for optimal health and glow
          </p>
          <img
            className="skincareProducts"
            src="https://img.freepik.com/premium-photo/skincare-products-plastic-bottles-skin-care-with-no-label-pink-background-side-view-photo_123207-431.jpg"
            alt="skincare"
            />
        </div>

        <div className="PictureBoxAU">
          <h2 className="welcomeHeader"> We are Weatherglow! </h2>
        <div className="aboutusBox">
          <div className="aboutUsImages">
            <div className="personalImageContainer">
              <img
                className="personalImage"
                src="https://i.imgur.com/Dz11VT3.jpeg"
                alt="           evelinas"
                />
              <span>Emelie Olers</span>
            </div>
            <div className="personalImageContainer">
              <img
                className="personalImage"
                src="https://i.imgur.com/emQUXom.jpeg"
                alt="           evelinas"
                />
              <span>Evelina Berg</span>
            </div>
            <div className="personalImageContainer">
              <img
                className="personalImage"
                src="https://i.imgur.com/khlpdmS.jpeg"
                alt="           evelinas"
                />
              <span>Henrietta Gidehag</span>
            </div>
            <div className="personalImageContainer">
              <img
                className="personalImage"
                src="https://i.imgur.com/471RO7s.jpeg"
                alt="           evelinas"
                />
              <span>Malin Andréasson</span>
            </div>
          </div>
      <div className="niceToMeetYouHeader">
        <h2 > Nice to meet you!</h2>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*https://img.freepik.com/premium-photo/skincare-products-plastic-bottles-skin-care-with-no-label-pink-background-side-view-photo_123207-431.jpg */
