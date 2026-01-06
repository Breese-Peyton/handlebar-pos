import handlebarLogo from '../../assets/handlebar-logo-bg.svg';
import { useState } from 'react';

function AppNavbar(props) {
    return (
        <nav id="appnavbar">
            <img src={handlebarLogo} alt="Handlebar POS logo" />
            <h1>Handlebar POS</h1>
            <ul>
                <li onClick={props.onDashboard}>Dashboard</li>
                <li onClick={props.onInventory}>Inventory</li>
                <li onClick={props.onBookings}>Bookings</li>
                <li onClick={props.onSettings}>Settings</li>
                <li onClick={props.onLogout}>Logout</li>
            </ul>
        </nav>
    );
}

export default AppNavbar;