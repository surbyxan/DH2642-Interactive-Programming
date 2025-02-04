//function set skincare based on weather
//we get an array with all the different skincare products, compare the products to the current weather
// send it to skincare presenter
import { skincare } from "./skincareConst";


//! facelotion id 0, 1
export function compareSkincareWeather(temprature) {
	if (temprature <= 5)
		return (skincare.id = 1);
	if (temprature > 5)
		return (skincare.id = 0);

}


//! sunscreen id 2, 3, 4
export function compareSkincareUV(uv) {
	if (uv <= 3 && uv >= 1)
		return (skincare.id = 3);
	if (uv > 3)
		return (skincare.id = 4);
	if (uv < 1)
		return (skincare.id = 2);
}