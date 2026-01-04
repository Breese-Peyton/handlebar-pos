import { useState } from "react";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [page, setPage] = useState("landing");
  if (page === "landing") {
    return <Landing onSignIn={() => setPage("login")} />;
  }

  if (page === "login") {
    return (
      <Login
        onBack={() => setPage("landing")}
        onSignIn={() => setPage("dashboard")}
      />
    );
  }

  if (page === "dashboard") {
    return <Dashboard onLogout={() => setPage("landing")} />;
  }

  return null;
}

export default App;
