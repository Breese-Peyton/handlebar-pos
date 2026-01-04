import handlebarLogo from '../assets/handlebar-logo-bg.svg';

function Navbar(props) {
    return (
        <nav id="navbar">
            <img src={handlebarLogo} alt="Handlebar POS logo" />
            <h1>Handlebar POS</h1>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
                <li onClick={props.onSignIn}>Login</li>
            </ul>
        </nav>
    );
}

export default Navbar;