import "./App_a.css";
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const radioMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "Dark Mode -TextUtils";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
      document.title = "Light Mode -TextUtils";
    }
  };
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };
  return (
    <>
    <Router>
      <Navbar
        title="Text-Utils"
        about_text="About TextUtils"
        search="Search"
        mode={mode}
        radioMode={radioMode}
      />
      {/* <Navbar/> */}
      {/* <TextForm name="Hello Guys in React Course!"/> */}
      <Alert
        alert="Text Utils Application is very Useful Application in which we can operate various types of operations. It has the feature of Dark mode and light mode too. Try Once, You will defenitely Like this app"
        alert={alert}
      />

      <div className="container my-3">
          <Switch>
            <Route exact path="/About">
              <About exact heading="About TextUtils"/>
            </Route>
            <Route path="/">
              <TextForm
                name="Enter The Text To Analyze"
                text1="Write your queries here...!"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
      </div>
    </Router>
    </> /*jsx fragments*/
  );
}
export default App;

