import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const PageShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); }, [pathname]);
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <main key={pathname} className="animate-fade-up">{children}</main>
      <Footer />
    </div>
  );
};

export default PageShell;
