import Navbar from './Navbar.jsx';

function Landing(props) {
    return (
        <>
            <Navbar onSignIn={props.onSignIn} />
            <main>
                <section id="hero">
                    <h1>Welcome to Handlebar POS</h1>
                    <p>Simple rental management for local operators</p>
                </section>

                <section id="built-for">
                    <h2>Built for</h2>
                    <ul>
                        <li>Bike Rentals</li>
                        <li>Beach Rentals</li>
                        <li>Equipment Rentals</li>
                    </ul>
                </section>

                <section id="features">
                    <h2>Features</h2>
                    <ul>
                        <li>Easy-to-use interface</li>
                        <li>Inventory management</li>
                        <li>Track Bookings</li>
                        <li>Sales reporting</li>
                    </ul>
                </section>
            </main>
        </>
    )
}





export default Landing;