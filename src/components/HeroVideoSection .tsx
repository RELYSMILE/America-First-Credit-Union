import React from 'react';
import heroVideo from '@/assets/hero-video.mp4';
import heroBg from '@/assets/background.webp';
import { ArrowRight, ShieldCheck, Sparkles, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroVideoSection: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] overflow-hidden flex items-center justify-center px-6 lg:px-12 py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/70" />

      {/* Neon glow effects */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#0b24f3]/30 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur text-white/80 text-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#0b24f3]" />
            Modern Digital Banking Experience
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] text-white tracking-tight">
            Banking Built
            <br />
            for the
            <span className="block bg-gradient-to-r from-white via-[#9aa6ff] to-[#0b24f3] bg-clip-text text-transparent">
              Modern World.
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
            Experience premium banking with lightning-fast transfers,
            AI-powered insights, smart investments, and enterprise-grade
            security — all in one beautifully crafted platform.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-[#0b24f3] hover:bg-blue-600 text-white font-semibold shadow-2xl shadow-[#0b24f3]/40 hover:scale-[1.02] transition-all duration-300"
            >
              Create Account
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur text-white hover:bg-white/10 transition-all duration-300"
            >
              Sign In
            </Link>
          </div>

          {/* Features */}
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: ShieldCheck,
                title: 'Bank-grade Security',
              },
              {
                icon: Globe2,
                title: 'Global Transfers',
              },
              {
                icon: Sparkles,
                title: 'AI Insights',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 hover:bg-white/[0.07] transition"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0b24f3]/20 flex items-center justify-center mb-3 border border-[#0b24f3]/30">
                    <Icon className="w-5 h-5 text-[#9aa6ff]" />
                  </div>

                  <p className="text-sm font-medium text-white">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Video Side */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Outer glow */}
          <div className="absolute inset-0 bg-[#0b24f3]/20 blur-[90px] rounded-[40px] scale-90" />

          {/* Gradient Border */}
          <div className="relative p-[2px] rounded-[32px] bg-gradient-to-br from-[#0b24f3] via-cyan-400 to-[#0b24f3] shadow-[0_0_60px_rgba(11,36,243,0.35)] max-w-3xl w-full">
            <div className="rounded-[30px] overflow-hidden bg-slate-950/90 backdrop-blur-xl border border-white/10">
              <video
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 left-6 lg:left-auto lg:-right-10 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-5 shadow-2xl max-w-[260px]">
            <div className="text-xs uppercase tracking-[0.2em] text-[#9aa6ff] mb-2">
              Trusted Worldwide
            </div>

            <div className="text-3xl font-black text-white">
              12.4M+
            </div>

            <p className="mt-1 text-sm text-slate-300 leading-relaxed">
              Customers across 84 countries trust our platform for secure banking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVideoSection;
