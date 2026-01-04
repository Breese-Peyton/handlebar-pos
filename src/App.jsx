import { useState } from 'react'
import './App.css'
import Landing from './components/Landing.jsx'
import Login from './components/Login.jsx'

function App() {
  const [page, setPage] = useState("landing");
  if (page === "login") {
    return <Login onBack={() => setPage("landing")} />;
  }
  return (
    <div>
      <Landing onSignIn={() => setPage("login")} />
    </div>
  );
}

export default App
