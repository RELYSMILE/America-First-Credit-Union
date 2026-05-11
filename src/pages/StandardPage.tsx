import React from 'react';
import { useLocation } from 'react-router-dom';
import PageTemplate from '@/components/PageTemplate';
import {
  Wallet, PiggyBank, CreditCard, Landmark, Home, ShieldCheck, Clock3, TrendingUp,
  Newspaper, Scale, Calculator, Smartphone, Briefcase, Banknote, HandCoins,
  AlertTriangle, HeartHandshake, Globe2, GraduationCap, Receipt, Store, Building2,
  Layers, Award, Handshake, BarChart3, Building, Factory, Sparkles, Target, BookOpen,
  Crown, ScrollText, Users, LineChart, Lock, Eye, Cpu, Database, Server, Zap,
  Headphones, BadgeCheck, Brain, FileCheck, Network
} from 'lucide-react';

import { LucideIcon } from 'lucide-react';

type PageDef = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  Icon: LucideIcon;
  features: { icon: LucideIcon; title: string; desc: string }[];
  bullets?: string[];
  metric?: { value: string; label: string }[];
};

const baseFeatures = (set: 'finance' | 'business' | 'wealth' | 'tech' = 'finance') => {
  const sets: Record<string, { icon: LucideIcon; title: string; desc: string }[]> = {
    finance: [
      { icon: ShieldCheck, title: 'Bank-grade Security', desc: '256-bit encryption, biometric login, and 24/7 fraud monitoring on every account.' },
      { icon: Zap, title: 'Instant Transfers', desc: 'Send money in seconds, domestically and internationally with full transparency.' },
      { icon: Smartphone, title: 'Mobile First', desc: 'A beautifully crafted iOS and Android app with feature parity to web.' },
      { icon: Brain, title: 'AI Insights', desc: 'Personalized cash flow analytics and recommendations powered by machine learning.' },
      { icon: Globe2, title: 'Global Reach', desc: 'Operate in 84 countries with multi-currency accounts and seamless FX.' },
      { icon: Headphones, title: 'Human Support', desc: 'Real bankers reachable by phone, chat or branch — no scripts, no queues.' },
    ],
    business: [
      { icon: Banknote, title: 'Working Capital', desc: 'Lines of credit and term loans tailored to your cash conversion cycle.' },
      { icon: Receipt, title: 'Payroll & HR', desc: 'Run payroll, manage benefits and onboard staff from a single dashboard.' },
      { icon: Store, title: 'Modern POS', desc: 'Accept payments anywhere with contactless, online and in-person tools.' },
      { icon: BarChart3, title: 'Cash Flow Analytics', desc: 'Forecast burn, runway and revenue with AI-powered models.' },
      { icon: HeartHandshake, title: 'Dedicated Banker', desc: 'A senior business banker who knows your numbers — and your name.' },
      { icon: Globe2, title: 'Global Trade', desc: 'Letters of credit, FX hedging and international wires built for trade.' },
    ],
    wealth: [
      { icon: Crown, title: 'Bespoke Portfolios', desc: 'Custom allocations across public and private markets, aligned with your goals.' },
      { icon: ScrollText, title: 'Estate Planning', desc: 'Trust, tax and succession planning across generations and jurisdictions.' },
      { icon: Users, title: 'Family Office', desc: 'Single-family and multi-family office services with discretion and care.' },
      { icon: LineChart, title: 'Forward Research', desc: 'Proprietary market views from a research desk that thinks long-term.' },
      { icon: BookOpen, title: 'Philanthropy', desc: 'Donor-advised funds, foundations and impact investing strategies.' },
      { icon: Sparkles, title: 'Concierge Banking', desc: 'A relationship manager available wherever — and whenever — you need.' },
    ],
    tech: [
      { icon: Lock, title: 'End-to-end Encryption', desc: 'Every byte, in transit and at rest, protected by hardware-rooted keys.' },
      { icon: Eye, title: 'Real-time Monitoring', desc: 'AI models flag anomalies in milliseconds, before fraud lands.' },
      { icon: Cpu, title: 'Zero-Trust Network', desc: 'Every internal request is verified, logged and audited continuously.' },
      { icon: Server, title: 'Resilient Infra', desc: 'Active-active multi-region failover with 99.999% uptime SLAs.' },
      { icon: Database, title: 'Data Sovereignty', desc: 'Data residency controls aligned with regional regulatory regimes.' },
      { icon: FileCheck, title: 'Audited Compliance', desc: 'SOC 2 Type II, ISO 27001, PCI DSS and beyond — verified annually.' },
    ],
  };
  return sets[set];
};

const PAGES: Record<string, PageDef> = {
  // Personal
  'personal/checking': {
    eyebrow: 'Personal · Checking',
    title: <>Everyday banking, <span className="text-gradient">redefined.</span></>,
    subtitle: 'A premium checking account with zero monthly fees, fee-free global ATMs, instant transfers, and AI insights that quietly help you spend smarter.',
    Icon: Wallet,
    features: baseFeatures('finance'),
    bullets: ['Zero monthly maintenance fees', 'Fee-free withdrawals at 1M+ ATMs worldwide', 'Real-time spending notifications', 'Round-up savings boost', 'Up to 4.50% APY on linked savings', 'FDIC-insured up to $250,000'],
    metric: [{ value: '0.00%', label: 'Monthly fee' }, { value: '1M+', label: 'Global ATMs' }, { value: '24/7', label: 'Support' }],
  },
  'personal/savings': {
    eyebrow: 'Personal · Savings',
    title: <>High-yield savings, <span className="text-gradient">automated.</span></>,
    subtitle: 'Grow your money with one of the highest APYs in market, automatic round-ups, and goal-based savings buckets that keep you on track.',
    Icon: PiggyBank,
    features: baseFeatures('finance'),
    bullets: ['4.50% APY on all balances', 'Goal-based savings buckets', 'Automatic round-ups from checking', 'No minimum balance required', 'Withdraw anytime, no penalties', 'FDIC insurance included'],
    metric: [{ value: '4.50%', label: 'APY' }, { value: '$0', label: 'Min. balance' }, { value: 'Daily', label: 'Compounding' }],
  },
  'personal/credit-cards': {
    eyebrow: 'Personal · Credit Cards',
    title: <>Cards that reward <span className="text-gradient">how you actually live.</span></>,
    subtitle: 'Premium metal cards with up to 5% cash back, lounge access, travel credits, and a concierge that genuinely answers within minutes.',
    Icon: CreditCard,
    features: baseFeatures('finance'),
    bullets: ['Up to 5% cash back on rotating categories', 'Priority Pass airport lounge access', '$300 annual travel credit', 'No foreign transaction fees', 'Cellphone & purchase protection', 'World-class concierge service'],
  },
  'personal/loans': {
    eyebrow: 'Personal · Loans',
    title: <>Personal loans, <span className="text-gradient">built fairly.</span></>,
    subtitle: 'Borrow up to $100,000 at competitive fixed rates with no origination fees, and funding as fast as the same business day.',
    Icon: Landmark,
    features: baseFeatures('finance'),
    bullets: ['Loans from $5,000 to $100,000', 'Fixed APR from 6.99%', 'No origination or prepayment fees', 'Same-day funding available', 'Soft credit check pre-qualification', 'Flexible 2-7 year terms'],
  },
  'personal/mortgages': {
    eyebrow: 'Personal · Mortgages',
    title: <>Home financing, <span className="text-gradient">made human again.</span></>,
    subtitle: 'Conventional, jumbo, FHA, VA and refinance options with a dedicated loan officer who walks beside you from offer to keys.',
    Icon: Home,
    features: baseFeatures('finance'),
    bullets: ['Conventional, jumbo, FHA & VA loans', 'Pre-approval in 24 hours', 'Dedicated loan officer', 'Refinance options available', 'Down payments from 3%', 'Lock-in rate guarantee'],
  },
  'personal/insurance': {
    eyebrow: 'Personal · Insurance',
    title: <>Coverage that <span className="text-gradient">truly protects.</span></>,
    subtitle: 'Life, home, auto, and umbrella insurance products underwritten by A-rated carriers — bundled to save you up to 25%.',
    Icon: ShieldCheck,
    features: baseFeatures('finance'),
    bullets: ['Term & whole life coverage', 'Home, auto and umbrella policies', 'Up to 25% multi-policy discount', 'A-rated underwriters only', 'Claim filed in under 5 minutes', 'Dedicated claims advocate'],
  },
  'personal/retirement': {
    eyebrow: 'Personal · Retirement',
    title: <>A retirement plan <span className="text-gradient">worth retiring into.</span></>,
    subtitle: 'IRAs, Roth IRAs, rollovers, and target-date portfolios crafted by a research team that thinks in decades, not quarters.',
    Icon: Clock3,
    features: baseFeatures('wealth'),
    bullets: ['Traditional, Roth & SEP IRAs', '401(k) rollover specialists', 'Target-date portfolios', 'Tax-loss harvesting', 'Required Minimum Distributions help', 'Free retirement consultation'],
  },
  'personal/investments': {
    eyebrow: 'Personal · Investments',
    title: <>Invest with <span className="text-gradient">institutional-grade tools.</span></>,
    subtitle: 'Stocks, ETFs, options, fixed income and managed portfolios — all in one beautifully designed brokerage experience.',
    Icon: TrendingUp,
    features: baseFeatures('wealth'),
    bullets: ['$0 commission on stocks & ETFs', 'Fractional shares from $1', 'Options trading with advanced charts', 'Bonds & treasuries', 'Robo-advisor portfolios', 'Real-time research from our desk'],
  },
  'personal/insights': {
    eyebrow: 'Personal · Insights',
    title: <>Market intelligence, <span className="text-gradient">delivered.</span></>,
    subtitle: 'Long-form research, weekly briefings and timely alerts written by senior strategists for the way you actually invest.',
    Icon: Newspaper,
    features: baseFeatures('wealth'),
    bullets: ['Weekly market briefings', 'Quarterly economic outlook', 'Sector deep-dives', 'Earnings season recaps', 'Geopolitical risk reports', 'Direct Q&A with strategists'],
  },
  'personal/compare': {
    eyebrow: 'Personal · Compare',
    title: <>Find the account that <span className="text-gradient">actually fits.</span></>,
    subtitle: 'Compare every personal account side-by-side — fees, rates, perks, and suitability scored against your goals.',
    Icon: Scale,
    features: baseFeatures('finance'),
    bullets: ['Side-by-side fee comparison', 'APY rate comparison', 'Perk and benefit matrix', 'Suitability scoring', 'Personalized recommendations', 'Switch in under 5 minutes'],
  },
  'personal/tools': {
    eyebrow: 'Personal · Financial Tools',
    title: <>Calculators, planners, <span className="text-gradient">all in one place.</span></>,
    subtitle: 'Mortgage, retirement, savings, debt payoff and net worth tools that help you make decisions with confidence.',
    Icon: Calculator,
    features: baseFeatures('finance'),
    bullets: ['Mortgage payment calculator', 'Retirement projection planner', 'Debt payoff scheduler', 'Net worth tracker', 'Goal-based savings planner', 'Tax estimator'],
  },
  'personal/mobile': {
    eyebrow: 'Personal · Mobile Banking',
    title: <>Bank from <span className="text-gradient">anywhere, beautifully.</span></>,
    subtitle: 'A flagship mobile experience designed with the obsession of a luxury product team — and the security of a top-tier bank.',
    Icon: Smartphone,
    features: baseFeatures('tech'),
    bullets: ['Face ID & Touch ID login', 'Real-time push alerts', 'Card freeze & limits in one tap', 'Mobile check deposit', 'Apple Pay & Google Pay', 'Offline transaction history'],
  },

  // Business
  'business/deposits': { eyebrow: 'Business · Deposits', title: <>Business deposits, <span className="text-gradient">re-engineered.</span></>, subtitle: 'Operating, money market and treasury accounts purpose-built for the rhythms of running a real business.', Icon: Banknote, features: baseFeatures('business'), bullets: ['Multi-user account access', 'Sweep accounts for excess cash', 'Money market & treasury options', 'Sub-accounts for departments', 'API-driven balance pulls', 'Up to $25M in deposit insurance'] },
  'business/cash-management': { eyebrow: 'Business · Cash Management', title: <>Working capital, <span className="text-gradient">working harder.</span></>, subtitle: 'Modern receivables, payables and liquidity tools that turn finance from a back office into a strategic engine.', Icon: Wallet, features: baseFeatures('business'), bullets: ['Receivables automation', 'Payables & vendor pay', 'Sweep & concentration', 'Real-time positioning', 'ACH & wire batching', 'Dedicated treasury banker'] },
  'business/credit': { eyebrow: 'Business · Credit & Financing', title: <>Capital, <span className="text-gradient">on your terms.</span></>, subtitle: 'Lines of credit, term loans, equipment financing and SBA lending — all underwritten by humans who understand your numbers.', Icon: HandCoins, features: baseFeatures('business'), bullets: ['Lines of credit up to $5M', 'SBA 7(a) and 504 loans', 'Equipment financing', 'Owner-occupied real estate', 'Decisions in 7 days, not 70', 'Relationship-based pricing'] },
  'business/risk': { eyebrow: 'Business · Risk Management', title: <>Risk, <span className="text-gradient">measured and managed.</span></>, subtitle: 'FX hedging, interest rate swaps, business insurance and fraud monitoring designed to protect what you\'ve built.', Icon: AlertTriangle, features: baseFeatures('business'), bullets: ['FX forwards and options', 'Interest rate hedging', 'Commercial insurance', 'Cyber liability coverage', 'Positive pay & ACH filters', 'Quarterly risk reviews'] },
  'business/benefits': { eyebrow: 'Business · Employee Benefits', title: <>Benefits your team <span className="text-gradient">will actually use.</span></>, subtitle: 'Retirement, health, life and equity benefits packaged for businesses of every size, with white-glove onboarding.', Icon: HeartHandshake, features: baseFeatures('business'), bullets: ['401(k) and profit sharing', 'Health, dental & vision', 'Life and disability', 'Equity admin & ESPP', 'HSA & FSA', 'Open enrollment automation'] },
  'business/international': { eyebrow: 'Business · International', title: <>International banking, <span className="text-gradient">without the friction.</span></>, subtitle: 'Multi-currency accounts, FX, letters of credit and global wires that make international trade feel local.', Icon: Globe2, features: baseFeatures('business'), bullets: ['Multi-currency accounts', 'Spot, forward and option FX', 'Letters of credit', 'SWIFT global wires', 'Trade finance specialists', 'Operations in 84 countries'] },
  'business/expertise': { eyebrow: 'Business · Expertise', title: <>Expertise, <span className="text-gradient">where it counts.</span></>, subtitle: 'Senior bankers organized by industry — healthcare, technology, manufacturing, retail and beyond.', Icon: GraduationCap, features: baseFeatures('business'), bullets: ['Industry-aligned banking teams', 'Average 18 years of experience', 'Sector-specific lending expertise', 'Peer benchmarking insights', 'Advisory board access', 'Curated networking events'] },
  'business/insights': { eyebrow: 'Business · Insights', title: <>Business intelligence <span className="text-gradient">you can act on.</span></>, subtitle: 'Sector reports, peer benchmarks and operating insights from our research desk — written for operators, not analysts.', Icon: Newspaper, features: baseFeatures('business') },
  'business/payroll': { eyebrow: 'Business · Payroll', title: <>Payroll, <span className="text-gradient">finally simple.</span></>, subtitle: 'Run payroll in minutes, automatically file taxes, and onboard new hires with a few clicks — all from one dashboard.', Icon: Receipt, features: baseFeatures('business'), bullets: ['Two-click payroll runs', 'Automatic tax filing', 'Direct deposit & checks', 'Contractor 1099 support', 'Time tracking integrations', 'Employee self-service portal'] },
  'business/pos': { eyebrow: 'Business · POS', title: <>Point of sale, <span className="text-gradient">future-ready.</span></>, subtitle: 'Beautiful hardware and software that accepts payments anywhere — countertop, online, mobile and integrated.', Icon: Store, features: baseFeatures('business'), bullets: ['EMV chip & contactless', 'Online checkout & invoicing', 'Inventory management', 'Customer loyalty', 'Real-time analytics', 'Next-day deposits'] },
  'business/merchant': { eyebrow: 'Business · Merchant Services', title: <>Accept payments <span className="text-gradient">anywhere, faster.</span></>, subtitle: 'Card processing, ACH, recurring billing and chargeback protection at interchange-plus pricing.', Icon: Building2, features: baseFeatures('business') },

  // Commercial
  'commercial/solutions': { eyebrow: 'Commercial · Solutions', title: <>Enterprise solutions, <span className="text-gradient">end to end.</span></>, subtitle: 'Treasury, lending, capital markets and advisory under a single relationship, with senior bankers as your single point of contact.', Icon: Layers, features: baseFeatures('business') },
  'commercial/expertise': { eyebrow: 'Commercial · Expertise', title: <>Senior bankers, <span className="text-gradient">organized by sector.</span></>, subtitle: 'Healthcare, technology, energy, real estate, manufacturing and consumer — bankers who understand the playing field.', Icon: Award, features: baseFeatures('business') },
  'commercial/deals': { eyebrow: 'Commercial · Deals', title: <>Recent transactions, <span className="text-gradient">openly shared.</span></>, subtitle: 'Selected deals from across our commercial franchise — financings, M&A advisory, capital markets and private placements.', Icon: Handshake, features: baseFeatures('business') },
  'commercial/insights': { eyebrow: 'Commercial · Insights', title: <>Strategic research <span className="text-gradient">for decision makers.</span></>, subtitle: 'Macro, sector and capital markets research from a desk that takes the long view.', Icon: BarChart3, features: baseFeatures('business') },
  'commercial/treasury': { eyebrow: 'Commercial · Treasury', title: <>Treasury services <span className="text-gradient">at institutional scale.</span></>, subtitle: 'Liquidity, payments, fraud prevention and information services for finance teams that demand precision.', Icon: Briefcase, features: baseFeatures('business'), bullets: ['Real-time liquidity dashboard', 'ACH, wire and RTP payments', 'Positive pay and ACH filters', 'Lockbox services', 'Information reporting APIs', 'Dedicated treasury analyst'] },
  'commercial/real-estate': { eyebrow: 'Commercial · Real Estate', title: <>Real estate financing, <span className="text-gradient">delivered with conviction.</span></>, subtitle: 'Construction, bridge, permanent and agency financing for owners, developers and operators across asset classes.', Icon: Building, features: baseFeatures('business') },
  'commercial/industry': { eyebrow: 'Commercial · Industry', title: <>Industry solutions, <span className="text-gradient">vertical-deep.</span></>, subtitle: 'Specialized teams covering healthcare, energy, technology, real estate, manufacturing, retail and consumer.', Icon: Factory, features: baseFeatures('business') },

  // Wealth
  'wealth/philosophy': { eyebrow: 'Wealth · Philosophy', title: <>Our philosophy: <span className="text-gradient">patient, curious, considered.</span></>, subtitle: 'We invest the way we hope to be invested with — for the long term, with discipline, and aligned with what matters to you.', Icon: Sparkles, features: baseFeatures('wealth') },
  'wealth/solutions': { eyebrow: 'Wealth · Solutions', title: <>Solutions <span className="text-gradient">tailored to a single client.</span></>, subtitle: 'Discretionary portfolios, alternatives, lending and trust — composed precisely for your balance sheet.', Icon: Target, features: baseFeatures('wealth') },
  'wealth/expertise': { eyebrow: 'Wealth · Expertise', title: <>Decades of experience, <span className="text-gradient">delivered with care.</span></>, subtitle: 'Senior advisors with an average of 24 years in private banking, supported by a global research and trust platform.', Icon: Award, features: baseFeatures('wealth') },
  'wealth/outlook': { eyebrow: 'Wealth · Market Outlook', title: <>Forward-looking views, <span className="text-gradient">written quarterly.</span></>, subtitle: 'Concise, considered outlooks from our Chief Investment Office — designed to inform decisions, not chase headlines.', Icon: LineChart, features: baseFeatures('wealth') },
  'wealth/insights': { eyebrow: 'Wealth · Insights', title: <>Long-form research, <span className="text-gradient">worth your time.</span></>, subtitle: 'Topics that matter to wealth — taxation, succession, alternatives, philanthropy and the geopolitics of capital.', Icon: BookOpen, features: baseFeatures('wealth') },
  'wealth/private-banking': { eyebrow: 'Wealth · Private Banking', title: <>Private Banking, <span className="text-gradient">redefined.</span></>, subtitle: 'A single relationship manager, a global team behind them, and a platform built for the most discerning clients.', Icon: Crown, features: baseFeatures('wealth'), bullets: ['Dedicated relationship manager', 'Bespoke lending solutions', 'Discretionary investment management', 'Global custody platform', 'Private market access', 'Family governance support'] },
  'wealth/estate': { eyebrow: 'Wealth · Estate Planning', title: <>Estate planning <span className="text-gradient">for generations.</span></>, subtitle: 'Trusts, gifting strategies and succession plans designed to preserve wealth across decades and jurisdictions.', Icon: ScrollText, features: baseFeatures('wealth') },
  'wealth/family': { eyebrow: 'Wealth · Family Wealth', title: <>Family wealth, <span className="text-gradient">stewarded with discretion.</span></>, subtitle: 'Single and multi-family office services covering investments, governance, philanthropy and next-generation education.', Icon: Users, features: baseFeatures('wealth') },

  // Footer / Extra pages
  'careers': { eyebrow: 'Company · Careers', title: <>Build the bank <span className="text-gradient">we always wished existed.</span></>, subtitle: 'Join engineers, designers, bankers and operators rebuilding global financial infrastructure with care.', Icon: Users, features: baseFeatures('finance') },
  'press': { eyebrow: 'Company · Press', title: <>Press & <span className="text-gradient">media inquiries.</span></>, subtitle: 'Our latest news, official statements, brand assets and a direct line to our communications team.', Icon: Newspaper, features: baseFeatures('finance') },
  'blog': { eyebrow: 'Company · Blog', title: <>Notes from <span className="text-gradient">the inside.</span></>, subtitle: 'Engineering, design and finance writing from the people building Aurelis day to day.', Icon: BookOpen, features: baseFeatures('finance') },
  'transfers': { eyebrow: 'Move Money · Transfers', title: <>Transfers, <span className="text-gradient">at the speed of intent.</span></>, subtitle: 'Domestic, international, person-to-person, RTP and wire — all in one beautifully unified flow.', Icon: Zap, features: baseFeatures('finance') },
  'privacy': { eyebrow: 'Trust · Privacy', title: <>Privacy <span className="text-gradient">by design.</span></>, subtitle: 'How we collect, use and protect your information — written in plain English, not legal hieroglyphs.', Icon: Lock, features: baseFeatures('tech') },
  'terms': { eyebrow: 'Trust · Terms of Service', title: <>Terms of <span className="text-gradient">service.</span></>, subtitle: 'The rules of the road for using Aurelis products — fair, transparent and reviewed regularly.', Icon: ScrollText, features: baseFeatures('tech') },
  'security': { eyebrow: 'Trust · Security', title: <>Security <span className="text-gradient">that\'s never an afterthought.</span></>, subtitle: 'How we keep your money and your data safe — and what you can do to help us help you.', Icon: ShieldCheck, features: baseFeatures('tech') },
  'cookies': { eyebrow: 'Trust · Cookies', title: <>Cookies <span className="text-gradient">policy.</span></>, subtitle: 'How we use cookies and similar technologies, what you can control, and how to opt out.', Icon: FileCheck, features: baseFeatures('tech') },
  'about': { eyebrow: 'Company · About', title: <>About <span className="text-gradient">Aurelis.</span></>, subtitle: 'Founded in 1998 with a simple idea: banking should serve people, not the other way around. Today we serve clients in 84 countries.', Icon: Sparkles, features: baseFeatures('finance'), bullets: ['Founded 1998', '84 countries served', '$420B+ assets managed', '12.4M active clients', 'AAA credit rating', 'B Corporation certified'] },
  'security-center': { eyebrow: 'Trust · Security Center', title: <>The Security <span className="text-gradient">Center.</span></>, subtitle: 'Tools, education and reporting to keep your accounts safe — including breach alerts, password help and travel notices.', Icon: ShieldCheck, features: baseFeatures('tech') },
  'fraud-protection': { eyebrow: 'Trust · Fraud Protection', title: <>Fraud protection <span className="text-gradient">that watches while you sleep.</span></>, subtitle: 'AI-driven monitoring, $0 liability guarantees and a 24/7 fraud team across three continents.', Icon: Eye, features: baseFeatures('tech') },
  'mobile-banking': { eyebrow: 'Mobile · Mobile Banking', title: <>Mobile banking, <span className="text-gradient">in your hand.</span></>, subtitle: 'Move money, manage cards, deposit checks and read AI insights — all from a single, beautifully crafted app.', Icon: Smartphone, features: baseFeatures('tech') },
  'financial-education': { eyebrow: 'Resources · Financial Education', title: <>Financial education, <span className="text-gradient">freely shared.</span></>, subtitle: 'Articles, courses and guides covering everything from your first budget to estate planning across borders.', Icon: GraduationCap, features: baseFeatures('finance') },
  'help': { eyebrow: 'Support · Help Center', title: <>Help, <span className="text-gradient">when you actually need it.</span></>, subtitle: 'Search articles, browse common topics or reach a real human in seconds. No bots that pretend to listen.', Icon: Headphones, features: baseFeatures('finance') },
  'investors': { eyebrow: 'Company · Investor Relations', title: <>Investor <span className="text-gradient">Relations.</span></>, subtitle: 'Earnings, presentations, governance, ESG and contact details for the IR team.', Icon: BarChart3, features: baseFeatures('wealth') },
  'open-account': { eyebrow: 'Get Started · Open Account', title: <>Open an account <span className="text-gradient">in minutes.</span></>, subtitle: 'A few details about you, a quick ID check, and your account is live — usually in under 3 minutes.', Icon: BadgeCheck, features: baseFeatures('finance'), bullets: ['Online application in 3 minutes', 'Instant account number', 'Order debit card same day', 'Fund with a transfer or check', 'No credit check for checking', 'FDIC-insured from minute one'] },
  'login-page': { eyebrow: 'Sign In', title: <>Welcome <span className="text-gradient">back.</span></>, subtitle: 'Securely access your accounts. Authentication is handled outside this prototype — this page is for navigation only.', Icon: Lock, features: baseFeatures('tech') },
};

const DEFAULT: PageDef = {
  eyebrow: 'Aurelis',
  title: <>A premium banking <span className="text-gradient">experience.</span></>,
  subtitle: 'Explore this section to learn more about what Aurelis can do for you.',
  Icon: Network,
  features: baseFeatures('finance'),
};

const StandardPage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.replace(/^\//, '').replace(/\/$/, '');
  const def = PAGES[path] ?? DEFAULT;
  return <PageTemplate {...def} />;
};


export default StandardPage;
