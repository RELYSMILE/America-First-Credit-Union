import React from 'react';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import { TrustSection, SolutionsGrid, MobileShowcase, SecuritySection, InsightsSection, Testimonials, FAQSection, FinalCTA } from '@/components/HomeSections';
import { ShieldCheck, TrendingUp, Globe2, Sparkles, BadgeCheck, Activity, Smartphone, Brain, Lock, Zap, PiggyBank, Headphones, Briefcase } from 'lucide-react';

const HomePage: React.FC = () => {
  const m1 = [
    { label: 'Secure Banking', icon: ShieldCheck },
    { label: 'Smart Investing', icon: TrendingUp },
    { label: 'Global Transfers', icon: Globe2 },
    { label: 'Wealth Growth', icon: Sparkles },
    { label: 'FDIC Insured', icon: BadgeCheck },
    { label: 'Real-time Insights', icon: Activity },
    { label: 'Digital Finance', icon: Smartphone },
  ];
  const m2 = [
    { label: 'AI Analytics', icon: Brain },
    { label: 'Fraud Protection', icon: Lock },
    { label: 'Instant Payments', icon: Zap },
    { label: 'Mobile Banking', icon: Smartphone },
    { label: '24/7 Support', icon: Headphones },
    { label: 'Smart Savings', icon: PiggyBank },
    { label: 'Business Banking', icon: Briefcase },
  ];
  return (
    <>
      <Hero />
      <section className="relative py-8 border-y border-white/5 bg-[#0b1020]/40 backdrop-blur-sm">
        <div className="space-y-2">
          <Marquee items={m1} direction="left" />
          <Marquee items={m2} direction="right" />
        </div>
      </section>
      <TrustSection />
      <SolutionsGrid />
      <MobileShowcase />
      <SecuritySection />
      <InsightsSection />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </>
  );
};

export default HomePage;
