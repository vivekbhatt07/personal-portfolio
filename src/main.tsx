import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { ModeProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <ModeProvider>
      <App />
    </ModeProvider>
  </Router>
);
