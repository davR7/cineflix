import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalProvider } from "./contexts";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Router>
  </StrictMode>
);
