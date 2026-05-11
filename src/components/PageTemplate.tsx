import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export type PageFeature = { icon: LucideIcon; title: string; desc: string };

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  Icon: LucideIcon;
  features: PageFeature[];
  bullets?: string[];
  ctaPrimary?: { label: string; to: string };
  ctaSecondary?: { label: string; to: string };
  metric?: { value: string; label: string }[];
};

const PageTemplate: React.FC<Props> = ({ eyebrow, title, subtitle, Icon, features, bullets, ctaPrimary, ctaSecondary, metric }) => {
  const location = useLocation();
  const path = location.pathname.replace(/^\//, '').replace(/\/$/, '');
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40"></div>
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-[#0b24f3]/20 blur-[120px]"></div>
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-indigo-500/15 blur-[120px]"></div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-white/10 mb-6">
              <Icon className="w-3.5 h-3.5 text-[#9aa6ff]" />
              <span className="text-xs text-white/75">{eyebrow}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">{title}</h1>
            <p className="mt-6 text-lg text-white/65 max-w-2xl leading-relaxed">{subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to={
                  ctaPrimary?.to ??
                  (path === 'login-page'
                    ? '/login'
                    : path === 'signup'
                    ? '/signup'
                    : '/signup')
                }
                className="btn-primary"
              >
                {
                  ctaPrimary?.label ??
                  (path === 'login-page'
                    ? 'Login'
                    : path === 'signup'
                    ? 'Create Account'
                    : 'Create Account')
                }

                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to={ctaSecondary?.to ?? '/contact'} className="btn-ghost">{ctaSecondary?.label ?? 'Speak with a banker'}</Link>
            </div>
            {metric && (
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
                {metric.map((m) => (
                  <div key={m.label}>
                    <div className="text-2xl lg:text-3xl font-semibold text-white">{m.value}</div>
                    <div className="text-xs text-white/50 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="lg:col-span-5 hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#0b24f3]/30 blur-[80px] rounded-full"></div>
              <div className="relative w-72 h-72 rounded-3xl glass-strong border border-white/10 flex items-center justify-center animate-float-slow">
                <div className="w-32 h-32 rounded-2xl flex items-center justify-center brand-glow animate-pulse-glow" style={{ background: 'linear-gradient(135deg,#0b24f3,#4f46e5)' }}>
                  <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <div className="absolute -top-4 -right-6 glass-strong rounded-xl px-3 py-2 border border-white/10 animate-float-med">
                <div className="text-[10px] uppercase tracking-wider text-white/50">Live</div>
                <div className="text-sm text-white font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Connected
                </div>
              </div>
              <div className="absolute -bottom-4 -left-6 glass-strong rounded-xl px-3 py-2 border border-white/10 animate-float-slow">
                <div className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 text-[#9aa6ff]" /><span className="text-sm text-white">AI-Powered</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-[#9aa6ff] mb-3">What's included</div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white">Built with the details that <span className="text-gradient">matter most.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => {
              const FI = f.icon;
              return (
                <div key={f.title} className="glass rounded-2xl p-7 border border-white/10 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-[#0b24f3]/15 border border-[#0b24f3]/30 flex items-center justify-center mb-5">
                    <FI className="w-5 h-5 text-[#9aa6ff]" />
                  </div>
                  <div className="text-lg font-semibold text-white">{f.title}</div>
                  <p className="text-sm text-white/55 mt-2 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bullets / benefits */}
      {bullets && bullets.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 p-8 lg:p-14 glass">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#9aa6ff] mb-3">Highlights</div>
                  <h3 className="text-2xl lg:text-4xl font-semibold text-white">Everything you need, <span className="text-gradient">nothing you don't.</span></h3>
                  <p className="text-white/55 mt-4 leading-relaxed">A focused toolkit, refined over decades, delivered without the noise.</p>
                </div>
                <ul className="space-y-3.5">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#9aa6ff] mt-0.5 shrink-0" />
                      <span className="text-white/80">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl border border-white/10 p-10 lg:p-16 text-center overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(11,36,243,0.25), rgba(11,16,32,0.6))' }}>
            <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-[#0b24f3]/30 blur-[100px]"></div>
            <div className="relative">
              <h3 className="text-3xl lg:text-5xl font-semibold text-white">Ready when you are.</h3>
              <p className="text-white/65 mt-4 max-w-xl mx-auto">Open an account online in minutes, or speak with a senior banker about a tailored solution.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/open-account" className="btn-primary">Open Account <ArrowRight className="w-4 h-4" /></Link>
                <Link to="/contact" className="btn-ghost">Schedule a call</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageTemplate;
