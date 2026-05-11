import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound: React.FC = () => (
  <div className="min-h-screen bg-[#050816] flex items-center justify-center px-6">
    <div className="text-center max-w-lg">
      <div className="text-[120px] lg:text-[200px] font-semibold leading-none text-gradient">404</div>
      <h1 className="text-2xl lg:text-3xl font-semibold text-white mt-4">Page not found</h1>
      <p className="text-white/55 mt-3">The page you were looking for doesn't exist or has been moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn-primary"><Home className="w-4 h-4" /> Back to home</Link>
        <button onClick={() => window.history.back()} className="btn-ghost"><ArrowLeft className="w-4 h-4" /> Go back</button>
      </div>
    </div>
  </div>
);

export default NotFound;
