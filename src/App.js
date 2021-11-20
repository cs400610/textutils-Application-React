import './App_a.css';
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const removeClassList=()=>{
  document.body.classList.remove('bg-primary');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-warning');
}
function App() {
  const radioMode = (cls) => {
    removeClassList();
    document.body.classList.add('bg-'+cls);
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
        alert={alert}
      />

      <div className="container my-3">
          <Switch>
            <Route exact path="/About">
              <About exact heading="About TextUtils" mode={mode}/>
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
    </>
  );
}

export default App;