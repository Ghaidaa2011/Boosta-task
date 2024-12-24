import { createRoot } from "react-dom/client";
import MainLayout from "./layouts/MainLayout.tsx";
// redux
import { store} from "../src/store/index";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// axios
import "./services/axios-global.js";
//styles
import "./styles/global.css";
//Languages
import { I18nextProvider } from "react-i18next";
import i18next from "./i18n.ts";
import { TranslateProvider } from "./context/TranslateContext.tsx";
//flowbite
import "flowbite";

createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18next}>
    <TranslateProvider>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <MainLayout />
        {/* </PersistGate> */}
      </Provider>
    </TranslateProvider>
  </I18nextProvider>
);
