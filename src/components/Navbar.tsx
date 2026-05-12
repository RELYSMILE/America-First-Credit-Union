import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Bell, Search, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { personalItems, businessItems, commercialItems, wealthItems, NavItem } from '@/data/navigation';
import { useAuth } from '@/contexts/AuthContext';
import logo from '../assets/logo.png';

const menus: { key: string; label: string; items: NavItem[]; featured: { title: string; text: string; cta: string; to: string } }[] = [
  { key: 'personal', label: 'Personal', items: personalItems, featured: { title: 'Premium Checking', text: 'Zero fees, global ATM access, and instant transfers.', cta: 'Open in 3 minutes', to: '/personal/checking' } },
  { key: 'business', label: 'Small Business', items: businessItems, featured: { title: 'Grow Your Business', text: 'Smarter banking with cash flow tools and capital on demand.', cta: 'Explore solutions', to: '/business/cash-management' } },
  { key: 'commercial', label: 'Commercial', items: commercialItems, featured: { title: 'Enterprise Treasury', text: 'Industry-leading liquidity, FX and payment infrastructure.', cta: 'Speak with a banker', to: '/commercial/treasury' } },
  { key: 'wealth', label: 'Wealth', items: wealthItems, featured: { title: 'Private Banking', text: 'Discreet, bespoke wealth management for principal clients.', cta: 'Meet your advisor', to: '/wealth/private-banking' } },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const location = useLocation();
  const { settings } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(null); setMobile(false); }, [location.pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'glass-strong border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
       <Link to="/" className="flex items-center gap-2.5 group">
        <div className="relative w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">

          {settings?.avatar ? (
            <img
              src={settings.avatar}
              alt="logo"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="leading-tight">
          <div className="font-semibold tracking-tight text-white">
            {settings?.app_name ?? 'TrustBankPlc'}
          </div>

          <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
            Private Bank
          </div>
        </div>
      </Link>

        {/* Center menu */}
        <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setOpen(null)}>
          {menus.map((m) => (
            <div key={m.key} className="relative" onMouseEnter={() => setOpen(m.key)}>
              <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${open === m.key ? 'text-white bg-white/5' : 'text-white/75 hover:text-white'}`}>
                {m.label}
                <ChevronDown className={`w-4 h-4 transition-transform ${open === m.key ? 'rotate-180' : ''}`} />
              </button>
              {open === m.key && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[760px] animate-fade-up">
                  <div className="glass-strong rounded-2xl p-6 grid grid-cols-3 gap-4 shadow-2xl">
                    <div className="col-span-2 grid grid-cols-2 gap-1.5">
                      {m.items.map((it) => {
                        const Icon = it.icon;
                        return (
                          <NavLink key={it.to} to={it.to} className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-[#0b24f3]/60 group-hover:bg-[#0b24f3]/15 transition">
                              <Icon className="w-4 h-4 text-[#9aa6ff] group-hover:text-white" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-medium text-white">{it.label}</div>
                              <div className="text-xs text-white/50 truncate">{it.desc}</div>
                            </div>
                          </NavLink>
                        );
                      })}
                    </div>
                    <Link to={m.featured.to} className="rounded-xl p-5 flex flex-col justify-between border border-white/10 brand-glow-soft" style={{ background: 'linear-gradient(160deg, rgba(11,36,243,0.25), rgba(11,16,32,0.6))' }}>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.18em] text-[#9aa6ff] mb-2">Featured</div>
                        <div className="text-base font-semibold text-white">{m.featured.title}</div>
                        <p className="text-xs text-white/60 mt-2 leading-relaxed">{m.featured.text}</p>
                      </div>
                      <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-white">
                        {m.featured.cta} <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-2">
          <button className="w-10 h-10 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 transition" aria-label="Search"><Search className="w-4 h-4" /></button>
          <button className="w-10 h-10 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 transition relative" aria-label="Notifications">
            <Bell className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#0b24f3]"></span>
          </button>
          <Link to="/login-page" className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white">Login</Link>
          <Link to="/open-account" className="btn-primary text-sm py-2.5 px-5 animate-pulse-glow">Open Account</Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobile(!mobile)}>
          {mobile ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobile && (
        <div className="lg:hidden glass-strong border-t border-white/5 max-h-[80vh] overflow-y-auto">
          <div className="px-5 py-6 space-y-6">
            {menus.map((m) => (
              <div key={m.key}>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">{m.label}</div>
                <div className="grid grid-cols-2 gap-2">
                  {m.items.map((it) => {
                    const Icon = it.icon;
                    return (
                      <Link key={it.to} to={it.to} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/5">
                        <Icon className="w-4 h-4 text-[#9aa6ff]" />
                        <span className="text-sm text-white/85">{it.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
            <div className="flex gap-2 pt-2">
              <Link to="/login-page" className="btn-ghost flex-1 py-2.5 text-sm">Login</Link>
              <Link to="/open-account" className="btn-primary flex-1 py-2.5 text-sm">Open Account</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
