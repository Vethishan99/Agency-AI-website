import React, { useState } from "react";
import NavBar from "./components/NavBar";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className="dark:bg-black relative">
      <NavBar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
