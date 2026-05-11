import React from 'react';
import { LucideIcon } from 'lucide-react';

type Item = { label: string; icon: LucideIcon };

const Marquee: React.FC<{ items: Item[]; direction?: 'left' | 'right' }> = ({ items, direction = 'left' }) => {
  const doubled = [...items, ...items];
  const cls = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
  return (
    <div className="relative overflow-hidden py-3" style={{ maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}>
      <div className={`flex gap-3 w-max ${cls}`}>
        {doubled.map((it, i) => {
          const Icon = it.icon;
          return (
            <div key={i} className="flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border border-white/10 hover:scale-[1.04] hover:border-[#0b24f3]/60 transition shrink-0">
              <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#0b24f3]/15 border border-[#0b24f3]/30">
                <Icon className="w-3.5 h-3.5 text-[#9aa6ff]" />
              </div>
              <span className="text-sm font-medium text-white whitespace-nowrap">{it.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Marquee;
