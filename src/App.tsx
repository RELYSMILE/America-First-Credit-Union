import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import StandardPage from "./pages/StandardPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import TransfersPage from "./pages/TransfersPage";
import PageShell from "./components/PageShell";
import Signup from "./pages/Signup";
import Login from './pages/Login';
import Dashboard from "./pages/Dashboard";
import Transfer from './pages/Transfer';
import { ThemeProvider } from "./components/theme-provider";
import Transactions from './pages/Transactions';
import Cards from './pages/Cards';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import AdminSettings from './pages/AdminSettings';
import 'aos/dist/aos.css';
import AOS from 'aos';
import LiveChat from './components/LiveChat/LiveChat';



const queryClient = new QueryClient();

const wrap = (el: React.ReactNode) => <PageShell>{el}</PageShell>;

const standardRoutes = [
  // Personal
  'personal/checking', 'personal/savings', 'personal/credit-cards', 'personal/loans',
  'personal/mortgages', 'personal/insurance', 'personal/retirement', 'personal/investments',
  'personal/insights', 'personal/compare', 'personal/tools', 'personal/mobile',
  // Business
  'business/deposits', 'business/cash-management', 'business/credit', 'business/risk',
  'business/benefits', 'business/international', 'business/expertise', 'business/insights',
  'business/payroll', 'business/pos', 'business/merchant',
  // Commercial
  'commercial/solutions', 'commercial/expertise', 'commercial/deals', 'commercial/insights',
  'commercial/treasury', 'commercial/real-estate', 'commercial/industry',
  // Wealth
  'wealth/philosophy', 'wealth/solutions', 'wealth/expertise', 'wealth/outlook',
  'wealth/insights', 'wealth/private-banking', 'wealth/estate', 'wealth/family',
  // Footer & extras
  'careers', 'press', 'blog', 'privacy', 'terms', 'security', 'cookies',
  'security-center', 'fraud-protection', 'mobile-banking', 'financial-education', 'help', 'investors',
  'open-account', 'login-page',
];


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out-cubic',
      offset: 50,
    });
  }, []);
  return (
    <>
      <LiveChat />
      <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={wrap(<Index />)} />
              <Route path="/about" element={wrap(<AboutPage />)} />
              <Route path="/contact" element={wrap(<ContactPage />)} />
              <Route path="/transfers" element={wrap(<TransfersPage />)} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/transfer" element={<ProtectedRoute><Transfer /></ProtectedRoute>} />
              <Route path="/cards" element={<ProtectedRoute><Cards /></ProtectedRoute>} />
              <Route path="/transactions" element={<ProtectedRoute><Transactions /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/admin" element={<ProtectedRoute adminOnly><Admin /></ProtectedRoute>} />
              <Route path="/admin/users" element={<ProtectedRoute adminOnly><Admin /></ProtectedRoute>} />
              <Route path="/admin/transactions" element={<ProtectedRoute adminOnly><Admin /></ProtectedRoute>} />
              <Route path="/admin/settings" element={<ProtectedRoute adminOnly><AdminSettings /></ProtectedRoute>} />

              {standardRoutes.map((path) => (
                <Route key={path} path={`/${path}`} element={wrap(<StandardPage />)} />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
            </AuthProvider>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
      </ThemeProvider>
  </>
  );
};

export default App;
