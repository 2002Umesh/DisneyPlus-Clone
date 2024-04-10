import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from "./store/index.jsx";
import { AuthProvider } from "./mystore/auth.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-vuej525bcqstxdby.us.auth0.com"
      clientId="ldYWbagGd6CZQ3F8vS7MryF0wOMSC5Nb"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <GoogleOAuthProvider clientId="268812847810-kld0gv24sbdvjkljmqa65fchknv9hihu.apps.googleusercontent.com">
        <BrowserRouter>
          <Provider store={store}>
            <AuthProvider>
              <App />
              <ToastContainer/>
            </AuthProvider>
          </Provider>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Auth0Provider>
  </React.StrictMode>
);
