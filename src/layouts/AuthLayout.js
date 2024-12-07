import React from 'react';
import { Outlet } from 'react-router-dom'; // To render nested routes

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <header>
        <h1>Welcome to Ethiolink</h1>
      </header>

      <main>
        <div className="form-container">
          <Outlet /> {/* This will render the Login or Signup component */}
        </div>
      </main>

      <footer>
        <p>&copy; 2024 Ethiolink. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AuthLayout;
