
import { resolvePromise } from "./resolvePromise";
import { searchWeather } from "./weatherSource";
import { skincare } from "./skincareConst";
import { searchLocation } from "./weatherSource";

/* 
   The Model keeps the state of the application (Application State). 
   It is an abstract object, i.e. it knows nothing about graphics and interaction.
*/
const model = {
    city: null,
    searchParams: {},
    searchResultsPromiseState: {},
    locationPromiseState: {},
    user: [],
    long: {},
    lat: {},
    weatherFetched: false,
    searchedQuery: false,
    nickname: null,


    setNickname(text) {
        this.nickname = text;
    },

    setCity(text) {
        this.city = text;
    },

    setSearchQuery(query) {
        this.searchParams.query = query;
        this.searchedQuery = true;
        this.weatherFetched = false;
    },

    doSearch(params) {
        this.locationPromiseState.promise = searchLocation(params);
        resolvePromise(this.locationPromiseState.promise, this.locationPromiseState);
    },

    setLngLat(locationPromiseState) {
        const locationData = locationPromiseState.data.results; // Extract the results array

        this.lat = parseFloat(locationData.geometry.location.lat).toFixed(4);
        this.long = parseFloat(locationData.geometry.location.lng).toFixed(4);

    },

    weatherFetch(params) {
        this.searchResultsPromiseState.promise = searchWeather(params);
        resolvePromise(this.searchResultsPromiseState.promise, this.searchResultsPromiseState);
        this.weatherFetched = true;
    },

    getSkincare(skincareID) {
        return skincare[skincareID].information[0];
    },
};

export { model };