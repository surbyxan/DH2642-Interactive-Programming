import { createApp, h } from "vue";
window.React = { createElement: h };

import { model } from "/src/WeatherModel.js";
import { reactive } from "vue";
import { VueRoot } from "./VueRoot.jsx";
import { makeRouter } from "./VueRoot";
import { connectToFirebase } from "../firebaseModel";
import { watch } from "vue";

const reactiveModel = reactive(model);

const rootJSX = <VueRoot model={reactiveModel} />;

const app = createApp(rootJSX);
app.use(makeRouter(reactiveModel));

app.mount("#root");
connectToFirebase(reactiveModel, watch);
