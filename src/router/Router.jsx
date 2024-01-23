import React from 'react';
mport {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

export default Router;