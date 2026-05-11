import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, Wallet, Briefcase, Crown, ArrowRight, ShieldCheck, Lock, Eye, Fingerprint,
  TrendingUp, BarChart3, LineChart, Newspaper, ChevronDown, Quote, Sparkles, Zap, Globe2, KeyRound
} from 'lucide-react';
import Counter from './Counter';


export const TrustSection: React.FC = () => (
  <section className="relative py-24 lg:py-32">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div data-aos="fade-up" className="text-xs uppercase tracking-[0.2em] text-[#9aa6ff] mb-3">Trusted globally</div>
        <h2 data-aos="fade-up" className="text-3xl lg:text-5xl font-semibold text-white">A bank measured in <span className="text-gradient">decades, not quarters.</span></h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {[
          { v: 12.4, suffix: 'M+', l: 'Active Customers', decimals: 1 },
          { v: 8.9, suffix: 'B', prefix: '$', l: 'Daily Transactions', decimals: 1 },
          { v: 84, suffix: '', l: 'Countries Served', decimals: 0 },
          { v: 420, suffix: 'B+', prefix: '$', l: 'Assets Managed', decimals: 0 },
        ].map((s) => (
          <div key={s.l} className="glass rounded-2xl p-6 lg:p-8 border border-white/10 card-hover">
            <div className="text-3xl lg:text-5xl font-semibold text-white">
              <Counter to={s.v} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals as number} />
            </div>
            <div className="text-sm text-white/55 mt-2">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const solutions = [
  { icon: Users, title: 'Personal Banking', desc: 'Everyday accounts, premium cards, smart savings, and tools that adapt to your life.', to: '/personal/checking', tags: ['Checking', 'Savings', 'Cards'] },
  { icon: Wallet, title: 'Small Business', desc: 'Cash flow, payroll, lending, and merchant tools to help your business move faster.', to: '/business/cash-management', tags: ['Payroll', 'POS', 'Credit'] },
  { icon: Briefcase, title: 'Commercial Banking', desc: 'Treasury, real estate finance, and industry-specific solutions for enterprises.', to: '/commercial/solutions', tags: ['Treasury', 'CRE', 'FX'] },
  { icon: Crown, title: 'Wealth Management', desc: 'Private banking, estate planning, and family office services for principal clients.', to: '/wealth/private-banking', tags: ['Private', 'Estate', 'Family'] },
];

export const SolutionsGrid: React.FC = () => (
  <>
  <section className="relative py-24 lg:py-32">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
        <div className="max-w-2xl">
          <div data-aos="fade-right" className="text-xs uppercase tracking-[0.2em] text-[#9aa6ff] mb-3">Solutions</div>
          <h2 data-aos="fade-right" className="text-3xl lg:text-5xl font-semibold text-white">Four divisions. <span className="text-gradient">One standard of excellence.</span></h2>
        </div>
        <p data-aos="fade-left" className="text-white/55 max-w-md">From everyday accounts to family offices — choose the level of service that fits the moment.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {solutions.map((s, i) => {
          const Icon = s.icon;
          return (
            <Link data-aos="fade-up" data-aos-delay={i * 80} key={s.title} to={s.to} style={{ animationDelay: `${i * 80}ms` }} className="group relative glass rounded-2xl p-7 border border-white/10 card-hover overflow-hidden">
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#0b24f3]/0 group-hover:bg-[#0b24f3]/20 blur-3xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#0b24f3]/15 border border-[#0b24f3]/30 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#9aa6ff]" />
                </div>
                <div className="text-lg font-semibold text-white">{s.title}</div>
                <p className="text-sm text-white/55 mt-2 leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/65">{t}</span>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-white/85 group-hover:text-white">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
  </>
);

export const MobileShowcase: React.FC = () => (
  <section className="relative py-24 lg:py-32">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div data-aos="fade-right">
        <div className="text-xs uppercase tracking-[0.2em] text-[#9aa6ff] mb-3">Mobile Banking</div>
        <h2 className="text-3xl lg:text-5xl font-semibold text-white leading-tight">Your bank, <span className="text-gradient">in your pocket.</span></h2>
        <p className="text-white/60 mt-5 text-lg leading-relaxed max-w-lg">Move money in seconds, freeze cards instantly, and read AI-powered insights about your spending — all from a single, beautifully crafted app.</p>
        <div className="grid sm:grid-cols-2 gap-4 mt-10">
          {[
            { icon: Fingerprint, t: 'Biometric Login', d: 'Face ID & Touch ID' },
            { icon: BarChart3, t: 'Spending Insights', d: 'AI-powered analytics' },
            { icon: Zap, t: 'Instant Transfers', d: 'Real-time payments' },
            { icon: Lock, t: 'Card Controls', d: 'Freeze, limit, locate' },
          ].map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.t} className="glass rounded-xl p-4 border border-white/10">
                <div className="w-9 h-9 rounded-lg bg-[#0b24f3]/15 border border-[#0b24f3]/30 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-[#9aa6ff]" />
                </div>
                <div className="text-sm font-medium text-white">{f.t}</div>
                <div className="text-xs text-white/50 mt-0.5">{f.d}</div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-3 mt-10">
          <Link to="/mobile-banking" className="btn-primary">Download the app <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
      <div data-aos="fade-left" className="relative flex justify-center">
        <div className="absolute inset-0 bg-[#0b24f3]/15 blur-[80px] rounded-full"></div>
        <div className="relative animate-float-slow">
          <img src="https://d64gsuwffb70l.cloudfront.net/69fdac0e139b7eaf910d2a30_1778232485840_be940f95.jpg" alt="Mobile banking" className="rounded-3xl border border-white/10 shadow-2xl max-h-[600px]" />
        </div>
        <div className="absolute -left-4 top-12 glass-strong rounded-xl p-3 border border-white/10 animate-float-med">
          <div className="text-[10px] text-white/50">Today</div>
          <div className="text-sm text-white font-medium">+$1,420.00</div>
          <div className="text-[10px] text-emerald-400">Salary deposit</div>
        </div>
        <div className="absolute -right-2 bottom-20 glass-strong rounded-xl p-3 border border-white/10 animate-float-slow">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <div>
              <div className="text-xs text-white">Card Frozen</div>
              <div className="text-[10px] text-white/50">•••• 4821</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const SecuritySection: React.FC = () => (
  <section className="relative py-24 lg:py-32">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div data-aos="fade-up" className="text-xs uppercase tracking-[0.2em] text-[#9aa6ff] mb-3">Security First</div>
        <h2 data-aos="fade-up" className="text-3xl lg:text-5xl font-semibold text-white">Security designed into <span className="text-gradient">every transaction.</span></h2>
        <p data-aos="fade-up" className="text-white/55 mt-5 text-lg">From hardware-rooted encryption to AI-driven fraud monitoring, we build trust into the bedrock of every product.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {[
          { icon: ShieldCheck, t: '256-bit Encryption', d: 'End-to-end encryption protects every byte of your data, in transit and at rest.' },
          { icon: Eye, t: 'Real-time Fraud AI', d: 'Machine learning models flag anomalous behavior before it costs you a cent.' },
          { icon: KeyRound, t: 'Hardware Keys', d: 'Optional FIDO2 security keys add an unbreakable second factor.' },
          { icon: Fingerprint, t: 'Biometric Access', d: 'Face ID and fingerprint sensors replace passwords — no phishing possible.' },
          { icon: Lock, t: 'Zero-Trust Network', d: 'Every internal request is verified, logged and audited continuously.' },
          { icon: Globe2, t: 'Global SOC', d: '24/7 security operations across three continents — never offline.' },
        ].map((f, i) => {
          const Icon = f.icon;
          return (
            <div data-aos="fade-up" data-aos-delay={i * 80} key={f.t} style={{ animationDelay: `${i * 80}ms` }} className="glass rounded-2xl p-7 border border-white/10 card-hover">
              <div className="w-12 h-12 rounded-xl bg-[#0b24f3]/15 border border-[#0b24f3]/30 flex items-center justify-center mb-5 animate-pulse-glow">
                <Icon className="w-5 h-5 text-[#9aa6ff]" />
              </div>
              <div className="text-lg font-semibold text-white">{f.t}</div>
              <p className="text-sm text-white/55 mt-2 leading-relaxed">{f.d}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export const InsightsSection: React.FC = () => {
  const insights = [
    { tag: 'Markets', title: 'Why credit spreads still matter in late-cycle portfolios', date: 'May 6, 2026', icon: LineChart },
    { tag: 'Wealth', title: 'A practical framework for inter-generational wealth transfer', date: 'May 4, 2026', icon: TrendingUp },
    { tag: 'Economy', title: 'The Fed\'s new playbook: implications for fixed income allocators', date: 'May 1, 2026', icon: BarChart3 },
    { tag: 'Strategy', title: 'How AI is reshaping treasury risk management for mid-market firms', date: 'Apr 28, 2026', icon: Sparkles },
  ];
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div data-aos="fade-up" className="text-xs uppercase tracking-[0.2em] text-[#9aa6ff] mb-3">Market Insights</div>
            <h2 data-aos="fade-up" className="text-3xl lg:text-5xl font-semibold text-white">Research from <span className="text-gradient">our desks to yours.</span></h2>
          </div>
          <Link data-aos="fade-left" to="/personal/insights" className="btn-ghost text-sm">View all insights <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {insights.map((i, idx) => {
            const Icon = i.icon;
            return (
              <article data-aos="fade-up" data-aos-delay={idx * 80} style={{ animationDelay: `${idx * 80}ms` }} key={i.title} className="glass rounded-2xl p-6 border border-white/10 card-hover h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-[#0b24f3]/15 border border-[#0b24f3]/30 text-[#9aa6ff]">{i.tag}</span>
                  <Icon className="w-4 h-4 text-white/40" />
                </div>
                <h3 className="text-base font-semibold text-white leading-snug flex-1">{i.title}</h3>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                  <span className="text-xs text-white/45">{i.date}</span>
                  <Newspaper className="w-3.5 h-3.5 text-[#9aa6ff]" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const Testimonials: React.FC = () => {
  const items = [
    { name: 'Amelia Hartwell', role: 'CFO, Northbridge Industries', quote: 'Aurelis gave us treasury infrastructure we used to think only the largest banks could deliver. The difference is night and day.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop' },
    { name: 'Jonathan Reyes', role: 'Founder, Lumen AI', quote: 'They funded our seed round, opened our payroll on day one, and our private banker still answers within an hour. Unmatched.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop' },
    { name: 'Priya Krishnan', role: 'Family Office Principal', quote: 'Their estate planning team coordinated five jurisdictions seamlessly. It changed how our family thinks about long-term wealth.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' },
  ];
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div data-aos="fade-left" className="text-xs uppercase tracking-[0.2em] text-[#9aa6ff] mb-3">Client Voices</div>
          <h2 data-aos="fade-right" className="text-3xl lg:text-5xl font-semibold text-white">Quietly preferred by <span className="text-gradient">people who choose carefully.</span></h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
          {items.map((t, idx) => (
            <div data-aos="fade-up" data-aos-delay={idx * 80} style={{ animationDelay: `${idx * 80}ms` }} key={t.name} className="glass rounded-2xl p-7 border border-white/10 card-hover relative">
              <Quote className="absolute top-6 right-6 w-6 h-6 text-[#0b24f3]/40" />
              <p className="text-white/80 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-3 mt-7 pt-6 border-t border-white/5">
                <img src={t.img} alt={t.name} className="w-11 h-11 rounded-full object-cover border border-white/20" />
                <div>
                  <div className="text-sm font-medium text-white">{t.name}</div>
                  <div className="text-xs text-white/50">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: 'How long does it take to open an account?', a: 'Most personal accounts are opened in under 3 minutes online with a valid ID. Business and private banking accounts are typically activated within one business day.' },
    { q: 'Are deposits insured?', a: 'Yes — deposits are insured by the FDIC up to applicable limits, and we offer additional sweep coverage for balances above the standard limit.' },
    { q: 'Do you charge monthly fees?', a: 'Our flagship Checking account has zero monthly fees. Premium and private banking tiers waive fees with qualifying balances.' },
    { q: 'Can I bank internationally?', a: 'Yes. We hold operating licenses in 84 countries and support multi-currency accounts, FX, and global wire transfers as standard.' },
    { q: 'How is my money protected from fraud?', a: 'Real-time AI fraud monitoring, biometric authentication, hardware-backed keys, and a 24/7 global security operations center protect every transaction.' },
    { q: 'How do I speak with a private banker?', a: 'Wealth and Commercial clients are paired with a dedicated banker reachable by phone, secure message, or in-branch by appointment.' },
  ];
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <div data-aos="fade-left" className="text-xs uppercase tracking-[0.2em] text-[#9aa6ff] mb-3">FAQ</div>
          <h2 data-aos="fade-right" className="text-3xl lg:text-5xl font-semibold text-white">Questions, answered.</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <button data-aos="fade-up" data-aos-delay={i * 80} style={{ animationDelay: `${i * 80}ms` }} key={f.q} onClick={() => setOpen(open === i ? null : i)} className="w-full text-left glass rounded-xl border border-white/10 overflow-hidden block">
              <div className="flex items-center justify-between p-5">
                <span className="text-base font-medium text-white pr-6">{f.q}</span>
                <ChevronDown className={`w-5 h-5 text-white/60 transition-transform shrink-0 ${open === i ? 'rotate-180' : ''}`} />
              </div>
              <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-white/65 leading-relaxed">{f.a}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FinalCTA: React.FC = () => (
  <section className="relative py-24 lg:py-32">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
      <div className="relative rounded-3xl p-10 lg:p-20 border border-white/10 overflow-hidden text-center" style={{ background: 'linear-gradient(135deg, rgba(11,36,243,0.3), rgba(11,16,32,0.6))' }}>
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-[#0b24f3]/40 blur-[100px]"></div>
        <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-indigo-500/30 blur-[100px]"></div>
        <div className="relative">
          <h2 className="text-4xl lg:text-6xl font-semibold text-white max-w-3xl mx-auto leading-[1.05]">
            Begin your relationship with <span className="text-gradient">the bank of tomorrow.</span>
          </h2>
          <p className="text-white/65 mt-6 text-lg max-w-xl mx-auto">Open an account in minutes. Speak with a banker today. Or simply explore what we build.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/open-account" className="btn-primary text-base">Open Account <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/contact" className="btn-ghost text-base">Speak with a banker</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);
