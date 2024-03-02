import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { router } from "./router/Router";
import { RouterProvider } from "react-router-dom";
import {HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div
        className="max-w-screen-xl mx-auto bg-white
    
    
    "
      >
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
