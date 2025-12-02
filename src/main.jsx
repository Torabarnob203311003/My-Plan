import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App.jsx";
import { persistor, store } from "./redux/store.js";
import { Toaster } from "sonner";

  // <-- your persistor

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster position="bottom-right" />
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
