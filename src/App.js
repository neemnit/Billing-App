import "./App.css";

import React, { useEffect, useState } from "react";

import NavBar from "./components/NavBar";

const App=()=> {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleAuth = () => {
    setLoggedIn(!loggedIn);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      handleAuth();
    }
  }, []);
  return (
    <div>
      <NavBar loggedIn={loggedIn} handleAuth={handleAuth} />
    </div>
  );
}

export default App;
