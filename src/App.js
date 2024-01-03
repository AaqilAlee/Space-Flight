import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./route/AppRoute";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
};

export default App;
