import handlebarLogo from '../assets/handlebar-logo-bg.svg';

function Navbar() {
    return (
        <nav id="navbar">
            <img src={handlebarLogo} alt="Handlebar POS logo" />
            <h1>Handlebar POS</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/orders">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;