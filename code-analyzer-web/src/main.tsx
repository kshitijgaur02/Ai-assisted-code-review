import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import { RouterProvider }
  from "react-router-dom";

import { router }
  from "./app/router";

import "./index.css";

ReactDOM
  .createRoot(
    document.getElementById(
      "root"
    )!
  )
  .render(
    <React.StrictMode>
       <Auth0Provider
  domain={
    import.meta.env
      .VITE_AUTH0_DOMAIN
  }
  clientId={
    import.meta.env
      .VITE_AUTH0_CLIENT_ID
  }
  authorizationParams={{
    redirect_uri:
      window.location.origin,

    audience:
      "https://code-analyzer-api",
  }}
>
      <RouterProvider
        router={router}
      />
    </Auth0Provider>
      
    </React.StrictMode>
  );