# ememo-eveberg-gidehag-malandre-HT24-Project

ememo-eveberg-gidehag-malandre-HT24-Project created for ememo-eveberg-gidehag-malandre

About the project:

This web-application matches the weather in a chosen location with the correct skincare. The skincare is supposed to be generic and for the user to use products that is already at home. To get the correct skincare the user have to search for a city where they want to see the weather and skincare recommendations thereafter the user is free to change city or navigate to the about us page in the top-bar.
The weather is retrieved by an API call where the user gets to select the city
where they want to see the weather, and the location is fetched also by an API that returnes a latitude, longitude coordinates, to make the application user friendly.
When creating an acccount the user don't need to search for a city when logging in but instead is sent to the weather and skincare recommendations with the last searched city as location. The user also gets to pick a nickname for the application to greet during the application visit.
It is also possible to use the application as a guest but, then the user always have to search for a city when logging in.

Third party components:
The third party components that is used in this application is the sun animation in the loadingView and the card in the skincareView (presented in main page presenter) that has a hover-over effect to show different skincare tips and facts. The card is third part the skincare tips and facts are not.
The sources to these third party components are: Uiverse.io by kennyotsu, and From Uiverse.io by zanina-yassine.

Project file structure:

The project file structure follows the MVP structure. In the views folder in src all the
different views are coded. In the vuejs folder all the different presenters are and also
index.js and VueRoot.js. Index.js initializes and mounts the app and vueroot.js defines the different
paths. Weathermodel.js has the main model properties of the app, this is where all the model data is
changed and retrieved from. Utilities.js has the functions which determine the skincare recommendation
depending on the weather. Weathersource.js, resolvepromise.js and apiConfig.js are all purposed to
work with the API call. All of them have different code within them, but all work with the API.
firebaseConfig.js is the initial configuration of firebase and firebaseModel.js is where the
connection to firebases is done aswell as persistance. Lastly, the styling for all the views
is located in style.css.

How to set up the app:

There is a working site that has been deployed at: https://weatherglow-9a93d.web.app/#/
