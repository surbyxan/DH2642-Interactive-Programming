import { Sidebar } from "./sideBarPresenter.jsx";
import { AboutUs } from "./aboutUsPresenter.jsx";
import { LogIn } from "./loginPresenter.jsx";
import { MainPage } from "./mainPagePresenter.jsx";
import { SelectCity } from "./selectCityPresenter.jsx";
import { CreateAccount } from "./createAccount.jsx";
import { ForgotPassword } from "./forgotPasswordPresenter.jsx";

import { createRouter, createWebHashHistory, RouterView } from "vue-router";
//import "/src/style.css";

export function makeRouter(model) {
  return createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: "/sidebar",
        component: <Sidebar model={model} />,
      },
      {
        path: "/forgotpassword",
        component: <ForgotPassword model={model} />,
      },
      {
        path: "/",
        component: <LogIn model={model} />,
      },

      {
        path: "/aboutus",
        component: <AboutUs model={model} />,
      },

      {
        path: "/selectcity",
        component: <SelectCity model={model} />,
      },

      {
        path: "/mainpage",
        component: <MainPage model={model} />,
      },
      {
        path: "/createaccount",
        component: <CreateAccount model={model} />,
      },
    ],
  });
}

function VueRoot(props) {
  return (
    <div>
      <RouterView />
    </div>
  );
}

export { VueRoot };
