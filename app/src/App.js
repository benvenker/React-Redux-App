import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BoredActivities from "./components/BoredActivities";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <BoredActivities />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(App);
