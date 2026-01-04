import { useState } from 'react';

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill out all fields");
      return;
    }
    props.onLogin(); 
  }

    return (
        <div id="login-page">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;