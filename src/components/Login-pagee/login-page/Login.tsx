

import React from "react";
import { useLocation } from "react-router";
import Signup from "../signup-page/Signup";
import Signin from "../signin-page/Signin";
import { Grid } from "@mui/material";

function LoginPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const mode = searchParams.get("mode");

  return <> {mode === "signup" ? <Signup /> : <Signin />}</>;
}

export default LoginPage;
