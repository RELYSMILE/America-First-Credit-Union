import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowLeft, Check, CheckCircle2, Wallet, PiggyBank, CreditCard, Building2,
  User, Plus, Search, Globe2, Calendar, Repeat, Zap, Send, Lock, ShieldCheck,
  Sparkles, ChevronRight, Receipt, Home, Copy, Star, X
} from 'lucide-react';

type Account = {
  id: string;
  name: string;
  type: 'Checking' | 'Savings' | 'Credit' | 'Investment';
  number: string;
  balance: number;
  currency: 'USD';
  icon: any;
  color: string;
};

type Recipient = {
  id: string;
  name: string;
  bank: string;
  number: string;
  country: string;
  currency: 'USD' | 'EUR' | 'GBP' | 'JPY' | 'SGD' | 'AED';
  starred?: boolean;
  avatar?: string;
};

const accounts: Account[] = [
  { id: 'a1', name: 'Premium Checking', type: 'Checking', number: '•••• 4821', balance: 24820.42, currency: 'USD', icon: Wallet, color: 'from-[#0b24f3] to-indigo-600' },
  { id: 'a2', name: 'High-Yield Savings', type: 'Savings', number: '•••• 9013', balance: 142560.18, currency: 'USD', icon: PiggyBank, color: 'from-emerald-500 to-teal-600' },
  { id: 'a3', name: 'Reserve Card', type: 'Credit', number: '•••• 7402', balance: 8420.05, currency: 'USD', icon: CreditCard, color: 'from-amber-500 to-orange-600' },
  { id: 'a4', name: 'Investment Sweep', type: 'Investment', number: '•••• 1188', balance: 318490.77, currency: 'USD', icon: Building2, color: 'from-fuchsia-500 to-purple-600' },
];

const savedRecipients: Recipient[] = [
  { id: 'r1', name: 'Amelia Hartwell', bank: 'HSBC London', number: 'GB29 ••• 8734', country: 'United Kingdom', currency: 'GBP', starred: true, avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop' },
  { id: 'r2', name: 'Jonathan Reyes', bank: 'Chase NY', number: '0123 ••• 4567', country: 'United States', currency: 'USD', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop' },
  { id: 'r3', name: 'Priya Krishnan', bank: 'DBS Singapore', number: '••• 2241', country: 'Singapore', currency: 'SGD', starred: true, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop' },
  { id: 'r4', name: 'Marcus Tan', bank: 'UBS Zurich', number: 'CH93 ••• 0099', country: 'Switzerland', currency: 'EUR', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop' },
  { id: 'r5', name: 'Sofia Martinelli', bank: 'UniCredit Milan', number: 'IT60 ••• 2010', country: 'Italy', currency: 'EUR', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&h=120&fit=crop' },
  { id: 'r6', name: 'Hiroshi Tanaka', bank: 'MUFG Tokyo', number: 'JP30 ••• 7711', country: 'Japan', currency: 'JPY', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&h=120&fit=crop' },
];

// FX rates relative to USD
const fxRates: Record<string, number> = { USD: 1, EUR: 0.9234, GBP: 0.7912, JPY: 154.20, SGD: 1.3421, AED: 3.6725 };
const currencySymbol: Record<string, string> = { USD: '$', EUR: '€', GBP: '£', JPY: '¥', SGD: 'S$', AED: 'د.إ' };

const fmt = (n: number, c: string = 'USD') => `${currencySymbol[c] ?? ''}${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const STEPS = ['Source', 'Recipient', 'Amount', 'Schedule', 'Review'] as const;

// ---------- Step Indicator ----------
const StepIndicator: React.FC<{ step: number }> = ({ step }) => (
  <div className="glass rounded-2xl p-4 border border-white/10">
    <div className="flex items-center justify-between gap-2">
      {STEPS.map((label, i) => {
        const done = i < step;
        const active = i === step;
        return (
          <React.Fragment key={label}>
            <div className="flex flex-col items-center min-w-0 flex-shrink-0">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold border transition-all duration-500 ${
                done ? 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300' :
                active ? 'bg-[#0b24f3] border-[#0b24f3] text-white brand-glow-soft' :
                'bg-white/5 border-white/10 text-white/45'
              }`}>
                {done ? <Check className="w-4 h-4" /> : i + 1}
              </div>
              <div className={`text-[10px] uppercase tracking-wider mt-2 hidden sm:block ${active ? 'text-white' : 'text-white/45'}`}>{label}</div>
            </div>
            {i < STEPS.length - 1 && (
              <div className="flex-1 h-0.5 bg-white/10 relative overflow-hidden rounded-full min-w-[20px]">
                <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#0b24f3] to-emerald-400 transition-all duration-700"
                  style={{ width: i < step ? '100%' : '0%' }} />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  </div>
);

// ---------- Step 1: Source ----------
const SourceStep: React.FC<{ value: string; onChange: (id: string) => void }> = ({ value, onChange }) => (
  <div className="space-y-4 animate-fade-up">
    <div>
      <h2 className="text-2xl lg:text-3xl font-semibold text-white">Choose source account</h2>
      <p className="text-white/55 mt-2">Select where the funds will move from.</p>
    </div>
    <div className="grid sm:grid-cols-2 gap-4">
      {accounts.map((a) => {
        const Icon = a.icon;
        const selected = value === a.id;
        const insufficient = a.type === 'Credit' && a.balance < 100;
        return (
          <button key={a.id} onClick={() => onChange(a.id)} type="button"
            className={`relative text-left p-5 rounded-2xl border transition-all duration-300 overflow-hidden group ${
              selected ? 'border-[#0b24f3] bg-[#0b24f3]/8 brand-glow-soft' : 'border-white/10 bg-white/[0.02] hover:border-white/25'
            }`}>
            <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl bg-gradient-to-br ${a.color} ${selected ? 'opacity-30' : 'opacity-0 group-hover:opacity-15'} transition-opacity`} />
            <div className="relative flex items-start gap-4">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${a.color} flex items-center justify-center shrink-0`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-base font-semibold text-white truncate">{a.name}</div>
                  {selected && <CheckCircle2 className="w-5 h-5 text-[#9aa6ff] shrink-0" />}
                </div>
                <div className="text-xs text-white/50 mt-0.5">{a.type} · {a.number}</div>
                <div className="text-lg font-semibold text-white mt-3">{fmt(a.balance)}</div>
                <div className="text-[10px] uppercase tracking-wider text-white/40 mt-0.5">Available</div>
              </div>
            </div>
            {insufficient && <div className="text-xs text-amber-400 mt-3">Low balance</div>}
          </button>
        );
      })}
    </div>
  </div>
);

// ---------- Step 2: Recipient ----------
const RecipientStep: React.FC<{
  value: Recipient | null;
  onChange: (r: Recipient | null) => void;
  newRec: Partial<Recipient>;
  setNewRec: (r: Partial<Recipient>) => void;
  mode: 'saved' | 'new';
  setMode: (m: 'saved' | 'new') => void;
}> = ({ value, onChange, newRec, setNewRec, mode, setMode }) => {
  const [q, setQ] = useState('');
  const filtered = useMemo(
    () => savedRecipients.filter((r) => (r.name + r.bank + r.country).toLowerCase().includes(q.toLowerCase())),
    [q]
  );

  return (
    <div className="space-y-5 animate-fade-up">
      <div>
        <h2 className="text-2xl lg:text-3xl font-semibold text-white">Choose recipient</h2>
        <p className="text-white/55 mt-2">Pick from saved beneficiaries or add a new one.</p>
      </div>

      <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10">
        {(['saved', 'new'] as const).map((m) => (
          <button key={m} type="button" onClick={() => setMode(m)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${mode === m ? 'bg-[#0b24f3] text-white' : 'text-white/65 hover:text-white'}`}>
            {m === 'saved' ? 'Saved' : 'New recipient'}
          </button>
        ))}
      </div>

      {mode === 'saved' ? (
        <>
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name, bank or country…"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#0b24f3]" />
          </div>
          <div className="grid sm:grid-cols-2 gap-3 max-h-[420px] overflow-y-auto pr-1">
            {filtered.length === 0 && (
              <div className="sm:col-span-2 text-center py-10 text-white/50 text-sm">No recipients match your search.</div>
            )}
            {filtered.map((r) => {
              const selected = value?.id === r.id;
              return (
                <button key={r.id} type="button" onClick={() => onChange(r)}
                  className={`text-left p-4 rounded-xl border transition flex items-center gap-3 ${
                    selected ? 'border-[#0b24f3] bg-[#0b24f3]/8' : 'border-white/10 bg-white/[0.02] hover:border-white/25'
                  }`}>
                  {r.avatar ? (
                    <img src={r.avatar} alt={r.name} className="w-11 h-11 rounded-full object-cover border border-white/15" />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-[#0b24f3]/20 border border-[#0b24f3]/40 flex items-center justify-center">
                      <User className="w-5 h-5 text-[#9aa6ff]" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-medium text-white truncate">{r.name}</span>
                      {r.starred && <Star className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />}
                    </div>
                    <div className="text-xs text-white/55 truncate">{r.bank}</div>
                    <div className="text-[10px] text-white/40 mt-0.5">{r.country} · {r.currency}</div>
                  </div>
                  {selected && <CheckCircle2 className="w-5 h-5 text-[#9aa6ff] shrink-0" />}
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full name" value={newRec.name ?? ''} onChange={(v) => setNewRec({ ...newRec, name: v })} placeholder="Jane Doe" />
            <Field label="Bank name" value={newRec.bank ?? ''} onChange={(v) => setNewRec({ ...newRec, bank: v })} placeholder="HSBC London" />
            <Field label="Account / IBAN" value={newRec.number ?? ''} onChange={(v) => setNewRec({ ...newRec, number: v })} placeholder="GB29 NWBK 6016 1331 9268 19" />
            <Field label="Country" value={newRec.country ?? ''} onChange={(v) => setNewRec({ ...newRec, country: v })} placeholder="United Kingdom" />
            <div>
              <label className="text-xs uppercase tracking-wider text-white/50">Currency</label>
              <select
                value={newRec.currency ?? 'USD'}
                onChange={(e) => setNewRec({ ...newRec, currency: e.target.value as any })}
                className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#0b24f3]"
              >
                {Object.keys(fxRates).map((c) => <option key={c} className="bg-[#0b1020]">{c}</option>)}
              </select>
            </div>
          </div>
          <button type="button"
            onClick={() => {
              if (!newRec.name || !newRec.bank || !newRec.number) return;
              onChange({
                id: 'new-' + Date.now(),
                name: newRec.name!,
                bank: newRec.bank!,
                number: newRec.number!,
                country: newRec.country ?? '—',
                currency: (newRec.currency as any) ?? 'USD',
              });
            }}
            className="btn-ghost text-sm">
            <Plus className="w-4 h-4" /> Save as recipient
          </button>
          {value?.id?.startsWith('new-') && (
            <div className="flex items-center gap-2 text-emerald-400 text-sm">
              <CheckCircle2 className="w-4 h-4" /> Recipient ready
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Field: React.FC<{ label: string; value: string; onChange: (v: string) => void; placeholder?: string }> = ({ label, value, onChange, placeholder }) => (
  <div>
    <label className="text-xs uppercase tracking-wider text-white/50">{label}</label>
    <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
      className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/35 focus:outline-none focus:border-[#0b24f3]" />
  </div>
);

// ---------- Step 3: Amount + FX ----------
const AmountStep: React.FC<{
  amount: string; onAmount: (v: string) => void;
  source: Account | undefined;
  recipient: Recipient | null;
  note: string; setNote: (v: string) => void;
}> = ({ amount, onAmount, source, recipient, note, setNote }) => {
  const numeric = parseFloat(amount.replace(/,/g, '')) || 0;
  const targetCcy = recipient?.currency ?? 'USD';
  const rate = fxRates[targetCcy];
  const converted = numeric * rate;
  const fee = numeric > 0 ? Math.max(0.5, numeric * 0.0015) : 0;
  const total = numeric + fee;
  const insufficient = source ? total > source.balance : false;
  const isFx = targetCcy !== 'USD';

  const presets = [100, 500, 1000, 5000];

  return (
    <div className="space-y-5 animate-fade-up">
      <div>
        <h2 className="text-2xl lg:text-3xl font-semibold text-white">Enter amount</h2>
        <p className="text-white/55 mt-2">Add a memo and review the FX preview if needed.</p>
      </div>

      <div className="rounded-2xl border border-white/10 p-6 lg:p-8 bg-gradient-to-br from-[#0b24f3]/10 to-transparent">
        <div className="text-xs uppercase tracking-wider text-white/50">You send</div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-3xl text-white/60">$</span>
          <input
            type="text"
            inputMode="decimal"
            value={amount}
            onChange={(e) => {
              const v = e.target.value.replace(/[^0-9.]/g, '');
              onAmount(v);
            }}
            placeholder="0.00"
            className="flex-1 bg-transparent text-5xl lg:text-6xl font-semibold text-white placeholder:text-white/25 focus:outline-none w-0 min-w-0"
          />
          <span className="text-sm text-white/55">USD</span>
        </div>

        <div className="flex flex-wrap gap-2 mt-5">
          {presets.map((p) => (
            <button key={p} type="button" onClick={() => onAmount(String(p))}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-white/75 hover:border-[#0b24f3]/60 hover:text-white transition">
              {fmt(p).replace('.00', '')}
            </button>
          ))}
          {source && (
            <button type="button" onClick={() => onAmount(String(Math.floor(source.balance)))}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#0b24f3]/15 border border-[#0b24f3]/30 text-[#9aa6ff] hover:bg-[#0b24f3]/25 transition">
              Max
            </button>
          )}
        </div>

        {isFx && numeric > 0 && (
          <div className="mt-6 pt-5 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#9aa6ff] mb-3">
              <Globe2 className="w-3.5 h-3.5" /> FX Preview
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-white/50 text-xs">Recipient receives</div>
                <div className="text-xl font-semibold text-white mt-1">{fmt(converted, targetCcy)}</div>
              </div>
              <div>
                <div className="text-white/50 text-xs">Live rate</div>
                <div className="text-base text-white mt-1">1 USD = {rate.toFixed(4)} {targetCcy}</div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 mt-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" /> Locked for 60s
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid sm:grid-cols-3 gap-3 text-sm">
        <Stat label="Transfer fee" value={fmt(fee)} />
        <Stat label="Total debit" value={fmt(total)} highlight={insufficient} />
        <Stat label="Arrives" value={isFx ? '1-2 days' : 'Instant'} />
      </div>

      {insufficient && (
        <div className="flex items-center gap-2 text-amber-400 text-sm bg-amber-400/10 border border-amber-400/20 rounded-xl p-3">
          <X className="w-4 h-4" /> Insufficient balance in source account.
        </div>
      )}

      <div>
        <label className="text-xs uppercase tracking-wider text-white/50">Memo (optional)</label>
        <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="What's this for?"
          className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/35 focus:outline-none focus:border-[#0b24f3]" />
      </div>
    </div>
  );
};

const Stat: React.FC<{ label: string; value: string; highlight?: boolean }> = ({ label, value, highlight }) => (
  <div className={`rounded-xl p-4 border ${highlight ? 'border-amber-400/40 bg-amber-400/5' : 'border-white/10 bg-white/[0.02]'}`}>
    <div className="text-[10px] uppercase tracking-wider text-white/45">{label}</div>
    <div className={`text-base font-semibold mt-1 ${highlight ? 'text-amber-300' : 'text-white'}`}>{value}</div>
  </div>
);

// ---------- Step 4: Schedule ----------
type Schedule = { kind: 'now' | 'later' | 'recurring'; date?: string; frequency?: 'weekly' | 'biweekly' | 'monthly' };

const ScheduleStep: React.FC<{ value: Schedule; onChange: (s: Schedule) => void }> = ({ value, onChange }) => {
  const today = new Date().toISOString().slice(0, 10);
  return (
    <div className="space-y-5 animate-fade-up">
      <div>
        <h2 className="text-2xl lg:text-3xl font-semibold text-white">When should this go?</h2>
        <p className="text-white/55 mt-2">Send right now, schedule for later, or set up a recurring transfer.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        {([
          { k: 'now', icon: Zap, t: 'Send now', d: 'Funds move within seconds' },
          { k: 'later', icon: Calendar, t: 'Schedule for later', d: 'Pick a future date' },
          { k: 'recurring', icon: Repeat, t: 'Recurring', d: 'Repeat automatically' },
        ] as const).map((o) => {
          const Icon = o.icon;
          const active = value.kind === o.k;
          return (
            <button key={o.k} type="button" onClick={() => onChange({ kind: o.k, date: o.k !== 'now' ? today : undefined, frequency: o.k === 'recurring' ? 'monthly' : undefined })}
              className={`text-left p-5 rounded-2xl border transition ${active ? 'border-[#0b24f3] bg-[#0b24f3]/8' : 'border-white/10 bg-white/[0.02] hover:border-white/25'}`}>
              <div className="w-10 h-10 rounded-xl bg-[#0b24f3]/15 border border-[#0b24f3]/30 flex items-center justify-center mb-4">
                <Icon className="w-4 h-4 text-[#9aa6ff]" />
              </div>
              <div className="text-base font-semibold text-white">{o.t}</div>
              <p className="text-xs text-white/55 mt-1">{o.d}</p>
            </button>
          );
        })}
      </div>

      {(value.kind === 'later' || value.kind === 'recurring') && (
        <div className="rounded-2xl border border-white/10 p-5 grid sm:grid-cols-2 gap-4 animate-fade-up">
          <div>
            <label className="text-xs uppercase tracking-wider text-white/50">{value.kind === 'recurring' ? 'Starts on' : 'Send on'}</label>
            <input type="date" min={today} value={value.date ?? today} onChange={(e) => onChange({ ...value, date: e.target.value })}
              className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#0b24f3]" />
          </div>
          {value.kind === 'recurring' && (
            <div>
              <label className="text-xs uppercase tracking-wider text-white/50">Frequency</label>
              <select value={value.frequency ?? 'monthly'} onChange={(e) => onChange({ ...value, frequency: e.target.value as any })}
                className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#0b24f3]">
                <option className="bg-[#0b1020]" value="weekly">Weekly</option>
                <option className="bg-[#0b1020]" value="biweekly">Every 2 weeks</option>
                <option className="bg-[#0b1020]" value="monthly">Monthly</option>
              </select>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ---------- Step 5: Review ----------
const ReviewStep: React.FC<{
  source?: Account; recipient: Recipient | null; amount: number; note: string; schedule: Schedule;
}> = ({ source, recipient, amount, note, schedule }) => {
  const targetCcy = recipient?.currency ?? 'USD';
  const rate = fxRates[targetCcy];
  const converted = amount * rate;
  const fee = amount > 0 ? Math.max(0.5, amount * 0.0015) : 0;

  const scheduleLabel = schedule.kind === 'now' ? 'Send immediately'
    : schedule.kind === 'later' ? `Scheduled for ${schedule.date}`
      : `${schedule.frequency} starting ${schedule.date}`;

  return (
    <div className="space-y-5 animate-fade-up">
      <div>
        <h2 className="text-2xl lg:text-3xl font-semibold text-white">Review & confirm</h2>
        <p className="text-white/55 mt-2">Please confirm the details below before sending.</p>
      </div>

      <div className="rounded-2xl border border-white/10 overflow-hidden">
        <div className="p-6 bg-gradient-to-br from-[#0b24f3]/15 to-transparent border-b border-white/10">
          <div className="text-xs uppercase tracking-wider text-white/55">You send</div>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-4xl lg:text-5xl font-semibold text-white">{fmt(amount)}</span>
            <span className="text-white/55">USD</span>
          </div>
          {targetCcy !== 'USD' && (
            <div className="text-sm text-white/65 mt-2">Recipient gets <span className="text-white font-medium">{fmt(converted, targetCcy)}</span> at 1 USD = {rate.toFixed(4)} {targetCcy}</div>
          )}
        </div>

        <div className="divide-y divide-white/5">
          <Row label="From" value={source ? `${source.name} · ${source.number}` : '—'} icon={source?.icon ?? Wallet} />
          <Row label="To" value={recipient ? `${recipient.name} · ${recipient.bank}` : '—'} icon={User} />
          <Row label="Country" value={recipient?.country ?? '—'} icon={Globe2} />
          <Row label="Schedule" value={scheduleLabel} icon={schedule.kind === 'now' ? Zap : schedule.kind === 'later' ? Calendar : Repeat} />
          <Row label="Fee" value={fmt(fee)} icon={Receipt} />
          {note && <Row label="Memo" value={note} icon={Sparkles} />}
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-white/55">
        <Lock className="w-3.5 h-3.5" /> Encrypted end-to-end · Funds insured up to $250,000 per depositor
      </div>
    </div>
  );
};

const Row: React.FC<{ label: string; value: string; icon: any }> = ({ label, value, icon: Icon }) => (
  <div className="flex items-center justify-between gap-4 px-6 py-4">
    <div className="flex items-center gap-3 min-w-0">
      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-[#9aa6ff]" />
      </div>
      <div className="text-sm text-white/55">{label}</div>
    </div>
    <div className="text-sm text-white text-right truncate">{value}</div>
  </div>
);

// ---------- Success Screen ----------
const SuccessScreen: React.FC<{
  source?: Account; recipient: Recipient | null; amount: number; schedule: Schedule;
  reference: string; onAnother: () => void;
}> = ({ source, recipient, amount, schedule, reference, onAnother }) => {
  const [copied, setCopied] = useState(false);
  const targetCcy = recipient?.currency ?? 'USD';
  const converted = amount * fxRates[targetCcy];

  const copy = async () => {
    try { await navigator.clipboard.writeText(reference); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch {}
  };

  return (
    <div className="relative animate-fade-up">
      {/* Confetti dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 70}%`,
              background: ['#0b24f3', '#9aa6ff', '#34d399', '#fbbf24'][i % 4],
              opacity: 0.7,
              animation: `float-slow ${4 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${(i % 5) * 0.2}s`
            }} />
        ))}
      </div>

      <div className="relative glass-strong rounded-3xl border border-white/10 p-8 lg:p-12 text-center">
        <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center mx-auto animate-pulse-glow">
          <Check className="w-10 h-10 text-emerald-400" strokeWidth={3} />
        </div>
        <h2 className="text-3xl lg:text-4xl font-semibold text-white mt-6">
          {schedule.kind === 'now' ? 'Transfer sent' : schedule.kind === 'later' ? 'Transfer scheduled' : 'Recurring transfer set'}
        </h2>
        <p className="text-white/60 mt-3">
          {schedule.kind === 'now'
            ? `${fmt(amount)} is on its way to ${recipient?.name ?? 'your recipient'}.`
            : `${fmt(amount)} will go to ${recipient?.name ?? 'your recipient'} ${schedule.kind === 'later' ? `on ${schedule.date}` : `${schedule.frequency} starting ${schedule.date}`}.`}
        </p>
        {targetCcy !== 'USD' && (
          <p className="text-sm text-white/50 mt-1">Recipient will receive {fmt(converted, targetCcy)}</p>
        )}

        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
          <span className="text-xs text-white/50">Reference</span>
          <span className="text-sm font-mono text-white">{reference}</span>
          <button onClick={copy} className="ml-1 text-white/60 hover:text-white">
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-3 text-left">
          <Stat label="Amount" value={fmt(amount)} />
          <Stat label="From" value={source?.name ?? '—'} />
          <Stat label="To" value={recipient?.name ?? '—'} />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={onAnother} className="btn-primary">
            <Send className="w-4 h-4" /> Send another
          </button>
          <Link to="/" className="btn-ghost"><Home className="w-4 h-4" /> Back to home</Link>
        </div>
      </div>
    </div>
  );
};

// ---------- Main ----------
const TransfersPage: React.FC = () => {
  const [step, setStep] = useState(0);
  const [sourceId, setSourceId] = useState<string>(accounts[0].id);
  const [recipient, setRecipient] = useState<Recipient | null>(null);
  const [recMode, setRecMode] = useState<'saved' | 'new'>('saved');
  const [newRec, setNewRec] = useState<Partial<Recipient>>({ currency: 'USD' });
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [schedule, setSchedule] = useState<Schedule>({ kind: 'now' });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [reference, setReference] = useState('');

  const source = accounts.find((a) => a.id === sourceId);
  const numeric = parseFloat(amount.replace(/,/g, '')) || 0;
  const fee = numeric > 0 ? Math.max(0.5, numeric * 0.0015) : 0;
  const insufficient = source ? numeric + fee > source.balance : false;

  const canNext = useMemo(() => {
    if (step === 0) return !!source;
    if (step === 1) return !!recipient;
    if (step === 2) return numeric > 0 && !insufficient;
    if (step === 3) {
      if (schedule.kind === 'now') return true;
      return !!schedule.date;
    }
    return true;
  }, [step, source, recipient, numeric, insufficient, schedule]);

  const next = () => setStep((s) => Math.min(STEPS.length - 1, s + 1));
  const back = () => setStep((s) => Math.max(0, s - 1));

  const submit = async () => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    const ref = 'AUR-' + Math.random().toString(36).slice(2, 6).toUpperCase() + '-' + Date.now().toString().slice(-5);
    setReference(ref);
    setDone(true);
    setSubmitting(false);
  };

  const reset = () => {
    setStep(0);
    setRecipient(null);
    setRecMode('saved');
    setNewRec({ currency: 'USD' });
    setAmount('');
    setNote('');
    setSchedule({ kind: 'now' });
    setDone(false);
    setReference('');
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-10 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40"></div>
        <div className="absolute top-10 -right-40 w-[500px] h-[500px] rounded-full bg-[#0b24f3]/20 blur-[120px]"></div>
        <div className="relative max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-white/10 mb-5">
            <Send className="w-3.5 h-3.5 text-[#9aa6ff]" />
            <span className="text-xs text-white/75">Move money · Domestic · International</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-semibold text-white">
            Transfers, <span className="text-gradient">at the speed of intent.</span>
          </h1>
          <p className="text-white/60 mt-4 max-w-xl">Send to anyone, anywhere — in five careful steps designed to feel effortless.</p>
        </div>
      </section>

      {/* Wizard */}
      <section className="pb-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          {!done && (
            <>
              <StepIndicator step={step} />
              <div className="mt-6 glass-strong rounded-3xl border border-white/10 p-6 lg:p-10">
                {step === 0 && <SourceStep value={sourceId} onChange={setSourceId} />}
                {step === 1 && <RecipientStep value={recipient} onChange={setRecipient} newRec={newRec} setNewRec={setNewRec} mode={recMode} setMode={setRecMode} />}
                {step === 2 && <AmountStep amount={amount} onAmount={setAmount} source={source} recipient={recipient} note={note} setNote={setNote} />}
                {step === 3 && <ScheduleStep value={schedule} onChange={setSchedule} />}
                {step === 4 && <ReviewStep source={source} recipient={recipient} amount={numeric} note={note} schedule={schedule} />}

                <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <button type="button" onClick={back} disabled={step === 0}
                    className="btn-ghost disabled:opacity-30 disabled:cursor-not-allowed">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-white/45 hidden sm:block">Step {step + 1} of {STEPS.length}</span>
                    {step < STEPS.length - 1 ? (
                      <button type="button" onClick={next} disabled={!canNext}
                        className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none">
                        Continue <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button type="button" onClick={submit} disabled={submitting}
                        className="btn-primary disabled:opacity-70">
                        {submitting ? (<><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Sending…</>) : (<><ShieldCheck className="w-4 h-4" /> Confirm & send</>)}
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Helper trust strip */}
              <div className="mt-6 grid sm:grid-cols-3 gap-3 text-xs text-white/55">
                <div className="flex items-center gap-2 glass rounded-xl p-3 border border-white/10"><Lock className="w-4 h-4 text-[#9aa6ff]" /> Bank-grade encryption</div>
                <div className="flex items-center gap-2 glass rounded-xl p-3 border border-white/10"><ShieldCheck className="w-4 h-4 text-[#9aa6ff]" /> Real-time fraud monitoring</div>
                <div className="flex items-center gap-2 glass rounded-xl p-3 border border-white/10"><Globe2 className="w-4 h-4 text-[#9aa6ff]" /> 84 countries supported</div>
              </div>
            </>
          )}

          {done && (
            <SuccessScreen source={source} recipient={recipient} amount={numeric} schedule={schedule} reference={reference} onAnother={reset} />
          )}
        </div>
      </section>
    </>
  );
};

export default TransfersPage;
