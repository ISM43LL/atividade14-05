import React from 'react';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;