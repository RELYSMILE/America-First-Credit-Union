import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Building2, Briefcase, Crown, Headphones, MessagesSquare, Globe2 } from 'lucide-react';

const offices = [
  { city: 'New York', addr: '420 Park Avenue, Floor 38', tag: 'Global HQ' },
  { city: 'London', addr: '14 Cornhill, Bishopsgate', tag: 'EMEA HQ' },
  { city: 'Singapore', addr: '50 Raffles Place, Level 30', tag: 'APAC HQ' },
  { city: 'Zurich', addr: 'Bahnhofstrasse 24', tag: 'Wealth' },
];

const categories = [
  { icon: Building2, title: 'Personal Banking', desc: 'Accounts, cards, loans and mortgages.' },
  { icon: Briefcase, title: 'Business Banking', desc: 'Cash management, lending, payroll.' },
  { icon: Crown, title: 'Private Wealth', desc: 'Bespoke solutions for principal clients.' },
  { icon: Headphones, title: 'Customer Support', desc: 'Existing clients — 24/7 assistance.' },
  { icon: MessagesSquare, title: 'Press & Media', desc: 'Communications and media inquiries.' },
  { icon: Globe2, title: 'International', desc: 'Cross-border banking and FX.' },
];

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', topic: 'Personal Banking', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email.includes('@') || !form.name) { setStatus('error'); return; }
    setStatus('loading');
    try {
      await fetch('/api/crm/69fdac0e139b7eaf910d2a30/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, name: form.name, message: form.message, topic: form.topic }),
      });
      setStatus('sent');
      setForm({ name: '', email: '', topic: 'Personal Banking', message: '' });
    } catch { setStatus('error'); }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40"></div>
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-[#0b24f3]/20 blur-[120px]"></div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-[#9aa6ff] mb-3">Contact</div>
          <h1 className="text-4xl lg:text-6xl font-semibold text-white">Talk to <span className="text-gradient">a real person.</span></h1>
          <p className="text-white/60 mt-5 text-lg max-w-xl mx-auto">From a quick question to a complex relationship — we're easy to reach, and quick to reply.</p>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="glass rounded-2xl p-6 border border-white/10 card-hover">
                <div className="w-11 h-11 rounded-xl bg-[#0b24f3]/15 border border-[#0b24f3]/30 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#9aa6ff]" />
                </div>
                <div className="text-base font-semibold text-white">{c.title}</div>
                <p className="text-sm text-white/55 mt-1">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form + offices */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="glass rounded-3xl p-8 lg:p-10 border border-white/10">
              <h3 className="text-2xl font-semibold text-white">Send us a message</h3>
              <p className="text-white/55 mt-2 text-sm">A senior associate will reply within one business day.</p>
              <form onSubmit={submit} className="mt-8 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-white/50">Full name</label>
                    <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#0b24f3]" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-white/50">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#0b24f3]" />
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-white/50">Topic</label>
                  <select value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })} className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#0b24f3]">
                    {categories.map((c) => <option key={c.title} className="bg-[#0b1020]">{c.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-white/50">Message</label>
                  <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#0b24f3]" />
                </div>
                <button type="submit" className="btn-primary">
                  {status === 'loading' ? 'Sending…' : status === 'sent' ? 'Message sent' : 'Send message'} <ArrowRight className="w-4 h-4" />
                </button>
                {status === 'error' && <p className="text-rose-400 text-sm">Please complete the form correctly.</p>}
              </form>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="glass rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-3"><Phone className="w-5 h-5 text-[#9aa6ff]" /><div><div className="text-sm text-white">24/7 Client Service</div><div className="text-white/60 text-sm"></div></div></div>
              <div className="flex items-start gap-3 mt-5"><Mail className="w-5 h-5 text-[#9aa6ff]" /><div><div className="text-sm text-white">Email</div><div className="text-white/60 text-sm">support.trustbankplc@gmail.com</div></div></div>
              <div className="flex items-start gap-3 mt-5"><Clock className="w-5 h-5 text-[#9aa6ff]" /><div><div className="text-sm text-white">Hours</div><div className="text-white/60 text-sm">Always — every day, every timezone</div></div></div>
            </div>
            {offices.map((o) => (
              <div key={o.city} className="glass rounded-2xl p-5 border border-white/10 card-hover">
                <div className="flex items-center justify-between">
                  <div className="text-base font-semibold text-white">{o.city}</div>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-[#0b24f3]/15 border border-[#0b24f3]/30 text-[#9aa6ff]">{o.tag}</span>
                </div>
                <div className="flex items-start gap-2 mt-3 text-sm text-white/65"><MapPin className="w-4 h-4 mt-0.5 text-[#9aa6ff]" /><span>{o.addr}</span></div>
                {/* <div className="flex items-center gap-2 mt-2 text-sm text-white/65"><Phone className="w-4 h-4 text-[#9aa6ff]" /><span>{o.phone}</span></div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 overflow-hidden h-72 lg:h-96 relative grid-bg" style={{ background: 'linear-gradient(135deg, rgba(11,36,243,0.15), rgba(11,16,32,0.6))' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Globe2 className="w-12 h-12 text-[#9aa6ff] mx-auto" />
                <div className="text-white mt-3 font-medium">84 offices · 6 continents</div>
                <div className="text-white/55 text-sm mt-1">Find a branch near you</div>
              </div>
            </div>
            {[...Array(20)].map((_, i) => (
              <div key={i} className="absolute w-2 h-2 rounded-full bg-[#0b24f3] animate-pulse-glow" style={{ left: `${(i * 7 + 5) % 95}%`, top: `${(i * 11 + 10) % 80}%`, animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
