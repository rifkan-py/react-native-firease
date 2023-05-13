// react
import { useState } from "react";

// screens
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";

const getFonts = () =>
  Font.loadAsync({
    "roboto-light": require("./assets/fonts/Roboto-Light.ttf"),
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

export default function App() {
  return <Home />;
}
