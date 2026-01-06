import { useState } from "react";
import AppNavbar from "./AppNavbar.jsx";
import Dashboard from "./Dashboard.jsx";
import Inventory from "./Inventory.jsx";
import Bookings from "./Bookings.jsx";
import Settings from "./Settings.jsx";

function AppShell() {
    

  const [page, setPage] = useState("dashboard");
console.log("AppShell page:", page);
  const navHandlers = {
    onDashboard: () => setPage("dashboard"),
    onInventory: () => setPage("inventory"),
    onBookings: () => setPage("bookings"),
    onSettings: () => setPage("settings"),
  };

  let content = <Dashboard />;

  if (page === "inventory") content = <Inventory />;
  if (page === "bookings") content = <Bookings />;
  if (page === "settings") content = <Settings />;

  return (
    <div>
      <AppNavbar {...navHandlers} />
      {content}
    </div>
  );
}

export default AppShell;
