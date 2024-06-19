import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx"
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages imports
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Projects from "./Pages/Projects.jsx";
import Services from "./Pages/Services.jsx";
import Error from "./Pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "projects", element: <Projects /> },
      { path: "services", element: <Services /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
