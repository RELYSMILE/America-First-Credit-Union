import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Sparkles, Shield, Heart, Globe2, Award } from 'lucide-react';
import Counter from '@/components/Counter';

const leaders = [
  { name: 'Helena Whitmore', role: 'Chair & CEO', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop' },
  { name: 'Marcus Tan', role: 'President, Wealth', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
  { name: 'Sofia Martinelli', role: 'Chief Investment Officer', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
  { name: 'David Okafor', role: 'Chief Risk Officer', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop' },
];

const timeline = [
  { y: '1998', t: 'Founded', d: 'Aurelis opens its doors in New York with a single conviction: clients deserve better.' },
  { y: '2006', t: 'Wealth Division', d: 'Private banking and wealth management launches, serving 1,200 founding families.' },
  { y: '2014', t: 'Global Expansion', d: 'Offices open in London, Singapore and Zurich — the start of our global franchise.' },
  { y: '2020', t: 'Digital First', d: 'Re-platformed mobile and web from the ground up, setting a new standard for fintech UX.' },
  { y: '2024', t: 'AI Era', d: 'Launched AI-driven insights, fraud monitoring and concierge services across all tiers.' },
  { y: '2026', t: 'Today', d: '$420B+ in assets, 12.4M clients, 84 countries — and only just beginning.' },
];

const values = [
  { icon: Shield, t: 'Trust', d: 'We protect what you build with seriousness and humility.' },
  { icon: Compass, t: 'Clarity', d: 'No fine print. Plain English. Always.' },
  { icon: Heart, t: 'Care', d: 'A real person, every time you need one.' },
  { icon: Sparkles, t: 'Craft', d: 'Software and service worth being proud of.' },
];

const AboutPage: React.FC = () => (
  <>
    <section className="pt-40 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40"></div>
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-[#0b24f3]/20 blur-[120px]"></div>
      <div className="relative max-w-[1100px] mx-auto px-6 lg:px-8 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-[#9aa6ff] mb-3">About Aurelis</div>
        <h1 className="text-4xl lg:text-7xl font-semibold text-white leading-[1.05]">
          Banking should serve <span className="text-gradient">people, not the other way around.</span>
        </h1>
        <p className="text-white/60 mt-7 text-lg max-w-2xl mx-auto leading-relaxed">
          We are a global private bank serving 12.4 million clients across 84 countries — built around a quiet conviction: that banking, done well, is one of the most useful things a company can be.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/careers" className="btn-primary">Join us <ArrowRight className="w-4 h-4" /></Link>
          <Link to="/contact" className="btn-ghost">Get in touch</Link>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-16">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="rounded-3xl glass border border-white/10 p-10 lg:p-14">
          <div className="text-xs uppercase tracking-[0.2em] text-[#9aa6ff] mb-3">Mission</div>
          <h2 className="text-2xl lg:text-4xl font-semibold text-white leading-snug">
            To deliver the world's most trusted, useful and beautifully crafted banking experience —
            <span className="text-gradient"> for everyone, everywhere, every day.</span>
          </h2>
        </div>
      </div>
    </section>

    {/* Metrics */}
    <section className="py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { v: 28, suffix: '', l: 'Years of operation' },
          { v: 12.4, suffix: 'M+', l: 'Active clients', decimals: 1 },
          { v: 420, suffix: 'B+', prefix: '$', l: 'Assets managed' },
          { v: 84, suffix: '', l: 'Countries served' },
        ].map((s) => (
          <div key={s.l} className="glass rounded-2xl p-7 border border-white/10 card-hover">
            <div className="text-3xl lg:text-5xl font-semibold text-white"><Counter to={s.v} prefix={s.prefix as any} suffix={s.suffix} decimals={(s.decimals as number) ?? 0} /></div>
            <div className="text-sm text-white/55 mt-2">{s.l}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Values */}
    <section className="py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-[#9aa6ff] mb-3">Values</div>
          <h2 className="text-3xl lg:text-5xl font-semibold text-white">What we hold to.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.t} className="glass rounded-2xl p-7 border border-white/10 card-hover">
                <div className="w-12 h-12 rounded-xl bg-[#0b24f3]/15 border border-[#0b24f3]/30 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#9aa6ff]" />
                </div>
                <div className="text-lg font-semibold text-white">{v.t}</div>
                <p className="text-sm text-white/55 mt-2 leading-relaxed">{v.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-16">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-[#9aa6ff] mb-3">Our Story</div>
          <h2 className="text-3xl lg:text-5xl font-semibold text-white">28 years. Six continents. <span className="text-gradient">One mission.</span></h2>
        </div>
        <div className="relative">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0b24f3]/0 via-[#0b24f3]/50 to-[#0b24f3]/0"></div>
          <div className="space-y-10">
            {timeline.map((e, i) => (
              <div key={e.y} className={`relative flex gap-6 lg:gap-0 lg:items-center ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0b24f3] brand-glow-soft"></div>
                <div className="ml-12 lg:ml-0 lg:w-1/2 lg:px-12">
                  <div className="glass rounded-2xl p-6 border border-white/10">
                    <div className="text-2xl font-semibold text-[#9aa6ff]">{e.y}</div>
                    <div className="text-lg font-semibold text-white mt-1">{e.t}</div>
                    <p className="text-sm text-white/60 mt-2 leading-relaxed">{e.d}</p>
                  </div>
                </div>
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-[#9aa6ff] mb-3">Leadership</div>
          <h2 className="text-3xl lg:text-5xl font-semibold text-white">The people <span className="text-gradient">accountable.</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {leaders.map((l) => (
            <div key={l.name} className="glass rounded-2xl overflow-hidden border border-white/10 card-hover">
              <div className="aspect-square overflow-hidden">
                <img src={l.img} alt={l.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="text-base font-semibold text-white">{l.name}</div>
                <div className="text-xs text-white/55 mt-0.5">{l.role}</div>
                <div className="flex items-center gap-1.5 text-xs text-[#9aa6ff] mt-3"><Award className="w-3.5 h-3.5" /><Globe2 className="w-3.5 h-3.5" /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl border border-white/10 p-10 lg:p-16 text-center overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(11,36,243,0.25), rgba(11,16,32,0.6))' }}>
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#0b24f3]/30 blur-[100px]"></div>
          <div className="relative">
            <h3 className="text-3xl lg:text-5xl font-semibold text-white">Build your future <span className="text-gradient">with us.</span></h3>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/open-account" className="btn-primary">Open Account <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/careers" className="btn-ghost">View open roles</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
