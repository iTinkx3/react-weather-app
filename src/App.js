import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by <a href="https://magenta-khapse-6f3ded.netlify.app" target="_blank">Sam Collins</a> and is{" "}
        <a href="https://github.com/iTinkx3/react-weather-app" target="_blank">open-sourced on GitHub</a>
        </footer>
        </div>
    </div>
  );
}
