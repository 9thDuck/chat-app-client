import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import SignUp from "./pages/user/SignUp";
import CheckEmail from "./pages/user/CheckEmail";
import CheckPassword from "./pages/user/CheckPassword";
import Message from "./pages/message/Message";
import User from "./pages/user";

export const router = createBrowserRouter([
 {
  path: "/",
  children: [
   { index: true, element: <App /> },
   {
    path: "user",
    element: <User />,
    children: [
     {
      path: "signup",
      element: <SignUp />,
     },
     { path: "check-email", element: <CheckEmail /> },
     { path: "check-password", element: <CheckPassword /> },
    ],
   },
   {
    path: "message",
    element:
    children: [{ path: ":username", element: <Message /> }],
   },
  ],
 },
]);
