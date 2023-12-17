import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-w6ncwz3db6fkw2hx.us.auth0.com"
     clientId="QDRXfMSAlxyuLldYz2NIQXeLsacx4SRI"
    // domain="dev-w6ncwz3db6fkw2hx.us.auth0.com"
    //  clientId="sY7FncZs9ZoqYULPRZz9an5iUdXKZEzD"
     authorizationParams={{
      redirect_uri: "https://minor-real-estate-frontend.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <MantineProvider>
      <App />
      </MantineProvider>
    </Auth0Provider>
  </React.StrictMode>
);
