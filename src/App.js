import React from "react";
import Toplearn from "./containers/Toplearn";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <Toplearn />
    </BrowserRouter>
  );
}
export default App;
