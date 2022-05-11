import React from "react";
import Review from "./Review";
import Forecast from "./Forecast";
import Card from "./Card";
function App() {
  return (
    <main>
      <br/>
      <div className="container">
        <div className="title">
          <h2>TEMPERATURE</h2>
          <Review/>
        </div>
      </div>
      <div>
        <Card />
        <h2>DAILY FORECAST</h2>
        <Forecast />
      </div>
    </main>
  );
}

export default App;
