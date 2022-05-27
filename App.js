import React, { useState } from "react";
// import { useFonts } from "expo-font";
// import * as Font from "expo-font";
// import { AppLoading } from "expo";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Main from "./components/Main";

// const loadApplication = async () => {
//   await Font.loadAsync({
//     "DMMono-Regular": require("./assets/fonts/DMMono-Regular.ttf"),
//   });
// };

export default function App() {
  // const [loaded] = useFonts({
  //   "DMMono-Regular": require("./assets/fonts/DMMono-Regular.ttf"),
  // });

  // if (!loaded) {
  //   return null;
  // }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}