import React from "react";
import MyFirstComponent from "./Componant/Profile/Profile";
import MySecondComponent from "./Componant/Profile/FullName";
import MyAdress from "./Componant/Profile/Adress";
import "./style.css";
const App = () => {
  return (
    <div className="main">
      <MySecondComponent />
      <div className="twice">
        <MyFirstComponent />

        <MyAdress />
      </div>
    </div>
  );
};
export default App;
