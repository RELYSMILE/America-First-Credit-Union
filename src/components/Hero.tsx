import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, TrendingUp, ShieldCheck, Sparkles, ArrowUpRight, ArrowDownRight, Zap } from 'lucide-react';
import heroVideo from '@/assets/hero-video.mp4';
import heroBg from '@/assets/background.webp';

const Hero: React.FC = () => {
  const videoArchive = [
    {id: 1, url: 'https://www.pexels.com/download/video/4373314/'},
  ]
  return (
    <section className="relative min-h-[100svh] flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay muted loop playsInline
          poster={heroBg}
          className="w-full h-full object-cover opacity-100"
        >
          <source src={'https://www.pexels.com/download/video/35886563/'} type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(5,8,22,0.6) 0%, rgba(5,8,22,0.85) 60%, rgba(5,8,22,1) 100%)' }} />
        <div className="absolute inset-0 grid-bg opacity-100"></div>
        <div className="absolute top-1/3 -left-40 w-[520px] h-[520px] rounded-full bg-[#0b24f3]/30 blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-indigo-600/20 blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-12 gap-10 items-center">
        {/* Left content */}
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-white/10 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs text-white/75">Now licensed in 84 countries · Member FDIC</span>
          </div>

          <h1 className="text-[44px] sm:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
            <span className="text-gradient">Banking built around</span><br />
            <span className="text-white">your future.</span>
          </h1>
          <p className="mt-7 text-lg lg:text-xl text-white/65 max-w-2xl leading-relaxed">
            Secure banking, wealth management, and business solutions designed for modern individuals and enterprises — engineered with intelligence, delivered with care.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/open-account" className="btn-primary text-base">
              Open Account <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/personal/checking" className="btn-ghost text-base">
              <Compass className="w-4 h-4" /> Explore Services
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 max-w-xl gap-6">
            {[
              { v: '$420B+', l: 'Assets managed' },
              { v: '12M+', l: 'Active clients' },
              { v: 'AAA', l: 'Credit rating' },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl lg:text-3xl font-semibold text-white">{s.v}</div>
                <div className="text-xs text-white/50 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right floating widgets */}
        <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
          {/* Portfolio card */}
          <div className="absolute top-0 right-0 w-72 glass-strong rounded-2xl p-5 border border-white/10 brand-glow-soft animate-float-slow">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs text-white/50">Portfolio Value</div>
                <div className="text-2xl font-semibold text-white mt-0.5">$248,560.40</div>
              </div>
              <div className="text-emerald-400 text-xs flex items-center gap-1 bg-emerald-400/10 px-2 py-1 rounded-md">
                <ArrowUpRight className="w-3 h-3" /> 12.4%
              </div>
            </div>
            <svg viewBox="0 0 200 60" className="w-full mt-4 h-16">
              <defs>
                <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0b24f3" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#0b24f3" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,45 C30,38 50,50 80,30 C110,10 140,28 170,18 L200,12 L200,60 L0,60 Z" fill="url(#g1)" />
              <path d="M0,45 C30,38 50,50 80,30 C110,10 140,28 170,18 L200,12" stroke="#0b24f3" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* AI insight */}
          <div className="absolute top-44 -left-4 w-64 glass-strong rounded-2xl p-4 border border-white/10 animate-float-med">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#0b24f3]/20 border border-[#0b24f3]/40 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-[#9aa6ff]" />
              </div>
              <div className="text-xs uppercase tracking-wider text-white/50">AI Insight</div>
            </div>
            <p className="text-sm text-white/85 leading-snug">Reallocating 4% to bonds may reduce volatility by ~18% based on your goals.</p>
          </div>

          {/* Security badge */}
          <div className="absolute top-72 right-4 w-56 glass-strong rounded-2xl p-4 border border-white/10 animate-float-slow">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Secured</div>
                <div className="text-xs text-white/50">Biometric · 2FA active</div>
              </div>
            </div>
          </div>

          {/* FX */}
          <div className="absolute bottom-10 left-6 w-64 glass-strong rounded-2xl p-4 border border-white/10 animate-float-med">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs uppercase tracking-wider text-white/50">FX Markets</div>
              <Zap className="w-3.5 h-3.5 text-[#9aa6ff]" />
            </div>
            <div className="space-y-2 text-sm">
              {[
                { p: 'EUR/USD', v: '1.0842', d: '+0.21%', up: true },
                { p: 'GBP/USD', v: '1.2614', d: '-0.08%', up: false },
                { p: 'USD/JPY', v: '154.20', d: '+0.34%', up: true },
              ].map((r) => (
                <div key={r.p} className="flex justify-between items-center">
                  <span className="text-white/70">{r.p}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">{r.v}</span>
                    <span className={`text-xs flex items-center ${r.up ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {r.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}{r.d}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market stat */}
          <div className="absolute bottom-44 right-0 w-52 glass-strong rounded-2xl p-4 border border-white/10 animate-float-slow">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-3.5 h-3.5 text-[#9aa6ff]" />
              <div className="text-xs text-white/50">S&P 500</div>
            </div>
            <div className="text-xl font-semibold text-white">5,238.42</div>
            <div className="text-emerald-400 text-xs mt-0.5">+0.84% today</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
