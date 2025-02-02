import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import { wait } from "./utilities/wait";
import ErrorElement from "./components/ErrorElement";
import AboutErrorElement from "./components/AboutErrorElement";
// import About from "./components/About";
// import Contact from "./components/Contact";

const About = lazy(() => wait(2000).then(() => import("./components/About")));
const Contact = lazy(() =>
  wait(2000).then(() => import("./components/Contact"))
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorElement />}>
      <Route path="" element={<Home />}></Route>
      <Route
        path="/about"
        errorElement={<AboutErrorElement />}
        element={<About />}
      ></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Route>
  )
);
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
