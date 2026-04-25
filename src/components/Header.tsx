/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, User, Zap, Scan } from "lucide-react";

interface HeaderProps {
    onSearch: (query: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  return (
    <header className="px-6 pt-8 space-y-8 sticky top-0 z-40 pb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full border-2 border-brand-primary p-0.5 overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" 
              alt="User" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-bold text-base text-white leading-tight">Bom dia, Rafael! 👋</p>
            <p className="text-[10px] text-text-dim/80">Condomínio Sol Nascente</p>
          </div>
        </div>
        
        <div className="points-badge flex items-center gap-2 px-3 py-1.5 rounded-full">
          <div className="w-5 h-5 rounded-full bg-accent-yellow flex items-center justify-center text-[12px] text-black font-black shadow-lg">
            $
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-white font-black text-xs">325</span>
            <span className="text-[9px] text-text-dim uppercase tracking-tighter">pontos</span>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-text-dim group-focus-within:text-brand-primary transition-colors">
          <Search size={22} strokeWidth={2.5} />
        </div>
        <input
          type="text"
          placeholder="Busque produtos, marcas..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full h-[60px] bg-[#121612] border border-white/5 rounded-[30px] pl-14 pr-14 text-[16px] text-text-main placeholder:text-text-dim/60 focus:outline-none focus:border-brand-primary/50 transition-all shadow-inner"
        />
        <div className="absolute inset-y-0 right-5 flex items-center text-text-dim/80 cursor-pointer hover:text-brand-primary transition-colors">
          <Scan size={24} strokeWidth={2} />
        </div>
      </div>
    </header>
  );
}
