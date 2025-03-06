import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const register = async () => {
    try {
      await axios.post('http://localhost:5000/register', { username, password });
      setMessage('User registered successfully');
    } catch (error) {
      setMessage('Error registering user');
    }
  };

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      setMessage(`Logged in with token: ${response.data.token}`);
    } catch (error) {
      setMessage('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login/Register</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default App; 