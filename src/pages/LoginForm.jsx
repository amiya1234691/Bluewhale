// src/components/LoginForm.js
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Your authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',fontSize:'2em',
    padding: '10px',
    color: 'white',
    background: 'linear-gradient(to bottom,#1d808a,green,#1d808a)',
    borderRadius: '5px',
    transformOrigin: 'center',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',}}>
      <div style={{ margin: '10px', marginLeft:'70px' }}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '5px', marginLeft: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ margin: '10px' }}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '5px', marginLeft: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
        />
      </div>
      <button
        onClick={handleLogin}
        style={{
            backgroundColor: '#1d808a',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        }}
      >
        Login
      </button>
    </div>
  );
};
export default LoginForm;
