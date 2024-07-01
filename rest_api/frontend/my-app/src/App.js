import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Components/home.js";
import { Train } from "./Components/trains.js";

function App() {
  return (
    <div className="w-screen h-screen bg-[#9EB384] p-6">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={Train} />
      </Switch>
    </div>
  );
}

export default App;
