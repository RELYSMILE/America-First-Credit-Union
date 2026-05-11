import React from 'react';
import { useAuth } from '@/contexts/AuthContext';

const SplashScreen: React.FC = () => {
  const { settings } = useAuth();

  const appName = settings?.app_name || 'American First Credit Union';
  const tagline = 'Secure Digital Banking';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-[#06104a] to-slate-950">
      {/* Animated background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#0b24f3]/30 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Logo image or fallback */}
        {settings?.avatar ? (
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0b24f3] to-cyan-400 blur-2xl opacity-40 animate-pulse" />
            <img
              src={settings.avatar}
              alt={appName}
              className="relative w-24 h-24 rounded-3xl object-cover border border-white/10 shadow-2xl"
            />
          </div>
        ) : (
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0b24f3] to-cyan-400 blur-2xl opacity-40 animate-pulse" />
            <div className="relative w-24 h-24 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl" />
          </div>
        )}

        {/* App name */}
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
          {appName}
        </h1>

        {/* Tagline */}
        <p className="mt-3 text-sm sm:text-base tracking-[0.2em] uppercase text-white/60">
          {tagline}
        </p>

        {/* Loading bar */}
        <div className="mt-8 w-56 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#0b24f3] to-cyan-400 animate-[loading_1.8s_ease-in-out_infinite]" />
        </div>

        {/* Loading text */}
        <p className="mt-4 text-xs tracking-[0.25em] uppercase text-white/40">
          Initializing Secure Session...
        </p>
      </div>

      {/* Custom animation */}
      <style>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
            width: 30%;
          }
          50% {
            width: 70%;
          }
          100% {
            transform: translateX(250%);
            width: 30%;
          }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;