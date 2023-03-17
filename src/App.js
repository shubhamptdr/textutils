import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

export function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    console.log("dark");
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - DarkMode";
      // setInterval(() => {
      //   document.title = "TextUtils is the best";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils app now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "White";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUlits"
        // aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze"
          mode={mode}
          showAlert={showAlert}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

// export default App;
