/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { Header } from "./components/Header";
import { Shelf } from "./components/Shelf";
import { CartBar } from "./components/CartBar";
import { PRODUCTS, CATEGORY_ICONS } from "./constants";
import { Category, Product, CartItem } from "./types";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category | "Tudo">("Tudo");

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "Tudo" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  // Group products by category for the shelf feed
  const shelves = useMemo(() => {
    const groups: Partial<Record<Category, Product[]>> = {};
    filteredProducts.forEach((p) => {
      if (!groups[p.category]) groups[p.category] = [];
      groups[p.category]!.push(p);
    });
    return (Object.keys(groups) as Category[]).map(cat => [cat, groups[cat]!] as [Category, Product[]]);
  }, [filteredProducts]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="min-h-screen pb-32 max-w-lg mx-auto border-x border-white/5 shadow-2xl relative overflow-x-hidden flex flex-col font-display">
      <Header onSearch={setSearchQuery} />

      <main className="flex-1 pt-8 overflow-y-auto no-scrollbar">
        {/* Categories Chips (Icon Chips) */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar px-6 pb-12 snap-x">
          {["Todas", ...Object.values(Category)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className="flex flex-col items-center gap-3 snap-start transition-all shrink-0"
            >
              <div className={`w-[72px] h-[72px] rounded-[22px] flex items-center justify-center transition-all shadow-xl relative overflow-hidden ${
                activeCategory === cat 
                  ? "bg-white ring-2 ring-brand-primary/50" 
                  : "bg-[#121612] border border-white/5"
              }`}>
                <img 
                  src={CATEGORY_ICONS[cat as Category | "Todas"]} 
                  alt={cat} 
                  className={`w-8 h-8 object-contain z-10 transition-transform ${activeCategory === cat ? "scale-110" : "opacity-60"}`} 
                />
                {activeCategory !== cat && (
                  <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity" />
                )}
              </div>
              <span className={`text-[12px] font-bold transition-colors ${
                activeCategory === cat ? "text-brand-primary" : "text-text-dim"
              }`}>
                {cat}
              </span>
            </button>
          ))}
        </div>

        {/* Mercado Title Section */}
        <div className="flex flex-col items-center justify-center mb-10 px-6">
            <div className="flex items-center gap-3">
                <h1 className="text-[42px] font-black italic tracking-tighter text-brand-primary leading-none">mercado</h1>
                <div className="w-10 h-10 bg-[#F97316]/10 rounded-xl flex items-center justify-center border border-[#F97316]/20">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.56-7.43H5.12"/></svg>
                </div>
            </div>
            <p className="text-[20px] font-bold text-[#F97316] italic mt-[-8px]">do nosso jeito</p>
        </div>

        {/* Shelf Feed */}
        <AnimatePresence mode="popLayout">
          {shelves.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {shelves.map(([category, products]) => (
                <Shelf
                  key={category}
                  category={category}
                  products={products}
                  onAddProduct={addToCart}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-24 text-center px-8"
            >
              <div className="w-16 h-16 bg-[#121612] rounded-2xl flex items-center justify-center mb-6 text-text-dim border border-white/5">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
              <h3 className="text-xl font-bold text-text-main font-display">Prateleira vazia</h3>
              <p className="text-sm text-text-dim mt-2 max-w-xs">Não encontramos nada com esses filtros. Tente buscar outro item.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <CartBar items={cart} />

      {/* Atmospheric lighting */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-primary/5 to-transparent pointer-events-none -z-10" />
    </div>
  );
}
