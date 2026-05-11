import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Diamond, Twitter, Linkedin, Facebook, Instagram, Youtube, ArrowRight, ShieldCheck, Globe } from 'lucide-react';

const cols = [
  {
    title: 'Personal',
    links: [
      { label: 'Checking', to: '/personal/checking' },
      { label: 'Savings', to: '/personal/savings' },
      { label: 'Credit Cards', to: '/personal/credit-cards' },
      { label: 'Loans', to: '/personal/loans' },
      { label: 'Mortgages', to: '/personal/mortgages' },
      { label: 'Investments', to: '/personal/investments' },
    ],
  },
  {
    title: 'Business',
    links: [
      { label: 'Cash Management', to: '/business/cash-management' },
      { label: 'Payroll', to: '/business/payroll' },
      { label: 'Merchant Services', to: '/business/merchant' },
      { label: 'International', to: '/business/international' },
      { label: 'Treasury', to: '/commercial/treasury' },
      { label: 'Industry Solutions', to: '/commercial/industry' },
    ],
  },
  {
    title: 'Wealth',
    links: [
      { label: 'Private Banking', to: '/wealth/private-banking' },
      { label: 'Estate Planning', to: '/wealth/estate' },
      { label: 'Family Wealth', to: '/wealth/family' },
      { label: 'Market Outlook', to: '/wealth/outlook' },
      { label: 'Investor Relations', to: '/investors' },
      { label: 'Insights', to: '/wealth/insights' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'Press', to: '/press' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
      { label: 'Help Center', to: '/help' },
    ],
  },
  {
    title: 'Trust',
    links: [
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
      { label: 'Security', to: '/security' },
      { label: 'Cookies', to: '/cookies' },
      { label: 'Fraud Protection', to: '/fraud-protection' },
      { label: 'Security Center', to: '/security-center' },
    ],
  },
];

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { settings } = useAuth();

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) { setStatus('error'); return; }
    setStatus('loading');
    try {
      await fetch('/api/crm/69fdac0e139b7eaf910d2a30/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setStatus('success'); setEmail('');
    } catch { setStatus('error'); }
  };

  return (
    <footer className="relative mt-32 border-t border-white/5 bg-[#050816]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16">
        {/* Newsletter */}
        <div className="rounded-3xl p-8 lg:p-12 mb-16 border border-white/10 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(11,36,243,0.18), rgba(11,16,32,0.6))' }}>
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#0b24f3]/30 blur-3xl"></div>
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-white">Stay ahead of the markets.</h3>
              <p className="text-white/60 mt-2 max-w-md">Weekly intelligence from our research desk — concise, considered, delivered Monday morning.</p>
            </div>
            <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-3">
              <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
                placeholder="you@example.com"
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#0b24f3]" />
              <button type="submit" className="btn-primary whitespace-nowrap">
                {status === 'loading' ? 'Subscribing…' : status === 'success' ? 'Subscribed' : 'Subscribe'} <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            {status === 'error' && <p className="text-red-400 text-sm lg:col-span-2">Please enter a valid email address.</p>}
            {status === 'success' && <p className="text-emerald-400 text-sm lg:col-span-2">Welcome aboard. Look out for our next briefing.</p>}
          </div>
        </div>

        {/* Cols */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden"
              >
                {settings?.avatar ? (
                  <img
                    src={settings.avatar}
                    alt="logo"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Diamond className="w-5 h-5 text-white" />
                )}
              </div>

              <div>
                <div className="font-semibold text-white">
                  {settings?.app_name || ''}
                </div>

                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Private Bank
                </div>
              </div>
            </Link>
            <p className="text-sm text-white/55 mt-4 leading-relaxed">Banking built around your future. Member FDIC. Equal Housing Lender.</p>
            <div className="flex gap-2 mt-5">
              {[Twitter, Linkedin, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-[#0b24f3]/60 transition">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-xs uppercase tracking-[0.18em] text-white/40 mb-4">{col.title}</div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.to}><Link to={l.to} className="text-sm text-white/70 hover:text-white transition">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} {settings?.app_name} Private Bank, N.A. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#9aa6ff]" /> 256-bit encryption</span>
            <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-[#9aa6ff]" /> Serving 84 countries</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
