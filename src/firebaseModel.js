import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig.js";
import { getDatabase, ref, get, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const PATH = "users";
export const auth = getAuth(app);

export default auth;

export function modelToPersistence(model) {
    console.log("saved to firebase: ", model.city + model.nickname);
    return {
        nickname: model.nickname,
        currentWeather: model.searchResultsPromiseState.data,
        city: model.city
    };
}


export function persistenceToModel(data, model) {
   
    model.setCity(data?.city || null);
    if (!model.nickname) {
        model.setNickname(data?.nickname || null);
    }
    model.searchResultsPromiseState.data = (data?.currentWeather || null);
}

export function connectToFirebase(model, watchFunction) {
    onAuthStateChanged(auth, loginOrOutACB);
    function loginOrOutACB(user) {
        if (user) {
            console.log("user logged in");
            model.user = user;
            readFromFirebase(model);
        } else {
            console.log("user logged out!");
            model.user = null;
            model.nickname = null;
        }
    }

    watchFunction(isChangeImportantACB, sideEffectACB);

    function isChangeImportantACB() {
        return {
            city: model.city,
            nickname: model.nickname,
            currentWeather: model.searchResultsPromiseState.data,
        };
    }

    function sideEffectACB() {
        saveToFirebase(model);
    }
}



export function readFromFirebase(model) {
    if (!model.user) {
        model.city = null;
        model.nickname = null;
        model.user = null;
        model.searchParams.query = null;

    } else {
        model.ready = false;
        
        const path = PATH + "/" + model.user.uid;


        return get(ref(db, path))
            .then(function convertACB(snapshot) {
                return persistenceToModel(snapshot.val(), model);
            })
            .then(function setModelReadyACB() {
                model.ready = true;
            })
            .catch(function errorHandlerACB(error) {
                model.ready = true;
            });
    }
}

export function saveToFirebase(model) {
    if (model.ready) {
        return set(ref(db, PATH + "/" + model.user.uid), modelToPersistence(model));
    }
}