import { useState } from "react";
import Landing from "./components/public/Landing";
import Login from "./components/public/Login";
import AppShell from "./components/app/AppShell";

function App() {
  const [page, setPage] = useState("landing");
  if (page === "landing") {
    return <Landing onSignIn={() => setPage("login")} />;
  }

  if (page === "login") {
    return (
      <Login
        onBack={() => setPage("landing")}
        onSignIn={() => setPage("appshell")}
      />
    );
  }

  if (page === "appshell") {
    return <AppShell onLogout={() => setPage("landing")} />;
  }

}

export default App;
