import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/signup-page/Signup";
import Signin from "../components/signin-page/Signin";
import Home from "../components/home-page/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../components/login-page/Login";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/homee",
    element: <Layout />,
    children: [
      {
        index : true,
        element : <Home/>

      },
    ],
  },
]);
