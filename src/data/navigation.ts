import {
  Wallet, PiggyBank, CreditCard, Landmark, Home, ShieldCheck, Clock3, TrendingUp,
  Newspaper, Scale, Calculator, Smartphone, Briefcase, Banknote, HandCoins,
  AlertTriangle, HeartHandshake, Globe2, GraduationCap, Receipt, Store, Building2,
  Layers, Award, Handshake, BarChart3, Building, Factory, Sparkles, Target, BookOpen,
  Crown, ScrollText, Users, LineChart
} from 'lucide-react';

export type NavItem = {
  label: string;
  to: string;
  icon: any;
  desc: string;
};

export const personalItems: NavItem[] = [
  { label: 'Checking', to: '/personal/checking', icon: Wallet, desc: 'Everyday banking, zero fees' },
  { label: 'Savings', to: '/personal/savings', icon: PiggyBank, desc: 'High-yield savings accounts' },
  { label: 'Credit Cards', to: '/personal/credit-cards', icon: CreditCard, desc: 'Premium rewards cards' },
  { label: 'Loans', to: '/personal/loans', icon: Landmark, desc: 'Personal & auto loans' },
  { label: 'Mortgages', to: '/personal/mortgages', icon: Home, desc: 'Buy or refinance a home' },
  { label: 'Insurance', to: '/personal/insurance', icon: ShieldCheck, desc: 'Life, home, auto coverage' },
  { label: 'Retirement', to: '/personal/retirement', icon: Clock3, desc: 'Plan for the long term' },
  { label: 'Investments', to: '/personal/investments', icon: TrendingUp, desc: 'Trade & grow wealth' },
  { label: 'Insights', to: '/personal/insights', icon: Newspaper, desc: 'Latest market briefings' },
  { label: 'Compare Accounts', to: '/personal/compare', icon: Scale, desc: 'Find your perfect fit' },
  { label: 'Financial Tools', to: '/personal/tools', icon: Calculator, desc: 'Calculators & planners' },
  { label: 'Mobile Banking', to: '/personal/mobile', icon: Smartphone, desc: 'Bank from anywhere' },
];

export const businessItems: NavItem[] = [
  { label: 'Deposits', to: '/business/deposits', icon: Banknote, desc: 'Business checking & savings' },
  { label: 'Cash Management', to: '/business/cash-management', icon: Wallet, desc: 'Optimize working capital' },
  { label: 'Credit & Financing', to: '/business/credit', icon: HandCoins, desc: 'Lines of credit, SBA loans' },
  { label: 'Risk Management', to: '/business/risk', icon: AlertTriangle, desc: 'Hedging and protection' },
  { label: 'Employee Benefits', to: '/business/benefits', icon: HeartHandshake, desc: 'Retirement & health plans' },
  { label: 'International Banking', to: '/business/international', icon: Globe2, desc: 'Global trade & FX' },
  { label: 'Expertise', to: '/business/expertise', icon: GraduationCap, desc: 'Industry advisors' },
  { label: 'Insights', to: '/business/insights', icon: Newspaper, desc: 'Business intelligence' },
  { label: 'Payroll Services', to: '/business/payroll', icon: Receipt, desc: 'Run payroll seamlessly' },
  { label: 'POS Solutions', to: '/business/pos', icon: Store, desc: 'Modern point of sale' },
  { label: 'Merchant Services', to: '/business/merchant', icon: Building2, desc: 'Accept payments anywhere' },
];

export const commercialItems: NavItem[] = [
  { label: 'Solutions', to: '/commercial/solutions', icon: Layers, desc: 'Tailored enterprise tools' },
  { label: 'Expertise', to: '/commercial/expertise', icon: Award, desc: 'Senior bankers, by sector' },
  { label: 'Deals', to: '/commercial/deals', icon: Handshake, desc: 'Recent transactions' },
  { label: 'Insights', to: '/commercial/insights', icon: BarChart3, desc: 'Strategic research' },
  { label: 'Treasury Services', to: '/commercial/treasury', icon: Briefcase, desc: 'Liquidity & payments' },
  { label: 'Real Estate Banking', to: '/commercial/real-estate', icon: Building, desc: 'CRE financing experts' },
  { label: 'Industry Solutions', to: '/commercial/industry', icon: Factory, desc: 'Vertical specialization' },
];

export const wealthItems: NavItem[] = [
  { label: 'Philosophy', to: '/wealth/philosophy', icon: Sparkles, desc: 'Our investment approach' },
  { label: 'Solutions', to: '/wealth/solutions', icon: Target, desc: 'Bespoke wealth strategies' },
  { label: 'Expertise', to: '/wealth/expertise', icon: Award, desc: 'Decades of experience' },
  { label: 'Market Outlook', to: '/wealth/outlook', icon: LineChart, desc: 'Forward-looking views' },
  { label: 'Insights', to: '/wealth/insights', icon: BookOpen, desc: 'Long-form research' },
  { label: 'Private Banking', to: '/wealth/private-banking', icon: Crown, desc: 'Elite client service' },
  { label: 'Estate Planning', to: '/wealth/estate', icon: ScrollText, desc: 'Multi-generational wealth' },
  { label: 'Family Wealth', to: '/wealth/family', icon: Users, desc: 'Family office services' },
];

export const footerPages = [
  { label: 'Careers', to: '/careers' },
  { label: 'Press', to: '/press' },
  { label: 'Blog', to: '/blog' },
  { label: 'Transfers', to: '/transfers' },
  { label: 'Savings', to: '/personal/savings' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
  { label: 'Security', to: '/security' },
  { label: 'Cookies', to: '/cookies' },
];

export const extraPages = [
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Security Center', to: '/security-center' },
  { label: 'Fraud Protection', to: '/fraud-protection' },
  { label: 'Mobile Banking', to: '/mobile-banking' },
  { label: 'Financial Education', to: '/financial-education' },
  { label: 'Help Center', to: '/help' },
  { label: 'Investor Relations', to: '/investors' },
];
