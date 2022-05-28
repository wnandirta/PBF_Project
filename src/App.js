import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes, //in the new router-dom version, Switch is used
} from "react-router-dom";
import "./styles.css";
import Home from "./home";
import About from "./about";
import Kegiatan from "./kegiatan";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) => name === errorMessages.name && <div className="error">{errorMessages.message}</div>;

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? (
          <div>
            <>
              <Router>
                <div>
                  <ul className="header">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/kegiatan">Kegiatan</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                  </ul>
                  <hr />
                  <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/kegiatan" element={<Kegiatan />} />
                    <Route path="/about" element={<About />} />
                  </Routes>
                </div>
              </Router>
            </>
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default App;
