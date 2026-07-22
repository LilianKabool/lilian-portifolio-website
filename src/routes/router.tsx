import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout.tsx";

import Home from "../components/pages/Home.tsx";
import Projects from "../components/pages/Projects.tsx";
import Contact from "../components/pages/Contact.tsx";
import About from "../components/pages/About.tsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);