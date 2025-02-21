// Install Vite
// npm create vite@latest my-vite-app --template react

// Inside src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./nexus";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Inside src/App.jsx
function App() {
  return (
    <div>
      <h1>Welcome to My Vite Website</h1>
      <p>Fast and minimal setup!</p>
    </div>
  );
}

export default App;

// Inside index.css
