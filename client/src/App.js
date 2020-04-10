import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Users from "./components/Users";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <h1>welcome</h1>
      <Route exact path="/">
        <Users />
      </Route>
      <Route path="/:id/posts">
        <Posts />
      </Route>
    </div>
  );
}

export default App;
