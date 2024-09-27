import React from "react";
import Loyout from "./components/Layout/Loyout";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Loyout />
    </div>
  );
};

export default App;
