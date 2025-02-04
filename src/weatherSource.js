import { API2_URL, API2_KEY, API_KEY, API_URL } from "./apiConfig"

export function searchWeather(searchParams) {
    const params = new URLSearchParams(searchParams);
    const newParam = params.toString()
    const newerParam = newParam.split('=')
    const url = `${API_URL}?${API_KEY}&q=${newerParam[1]}&aqi=no`
    const object = { method: 'GET' }

    function gotResponseACB(response) {
        console.log("response is: ", response);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("could not fetch");
        }
    }

    function resultACB(result) {
        console.log("API: ", result)
        return {
            location: result.location,
            current: result.current
        };


    }

    return fetch(url, object).then(gotResponseACB).then(resultACB);
}

export function searchLocation(searchParams) {
    const params = new URLSearchParams(searchParams);
    const url2 = `${API2_URL}?address=${params}&${API2_KEY}`
    const object = { method: 'GET' }

    function gotLocationResponseACB(response) {
        console.log("response is: ", response);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("could not fetch");
        }
    }

    function locationResultACB(result) {
        console.log("location: ", result.results[0].formatted_address)
        return {
            results: result.results[0]
        };
    }

    return fetch(url2, object).then(gotLocationResponseACB).then(locationResultACB);
}

