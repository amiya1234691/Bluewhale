// src/components/LoginPage.js
import React from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const handleLogin = (username, password) => {
    // Here, you can implement your authentication logic
    // For simplicity, let's just log the values for now
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <main id="main">
      <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: `url('assets/img/contact1.jpg')` }}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
      <section id="login" className="login">
       <div className="container" data-aos="fade-up" data-aos-delay="100">
      <LoginForm handleLogin={handleLogin} />
      </div>
      </section>
      </div>
      </div>
      </main>
    </div>
  )
};
export default LoginPage;
