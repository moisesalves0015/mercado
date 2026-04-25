/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Category } from "../types";
import { ProductCard } from "./ProductCard";
import { CATEGORY_COLORS, CATEGORY_TAGLINES, CATEGORY_ICONS } from "../constants";
import { ChevronRight } from "lucide-react";

interface ShelfProps {
  category: Category;
  products: Product[];
  onAddProduct: (product: Product) => void;
}

export function Shelf({ category, products, onAddProduct }: ShelfProps) {
  const categoryColor = CATEGORY_COLORS[category];
  const tagline = CATEGORY_TAGLINES[category];
  const icon = CATEGORY_ICONS[category];

  return (
    <div className="mx-4 mb-6" style={{
      background: 'rgba(130, 201, 30, 0.24)',
      borderRadius: '16px',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(5.6px)',
      WebkitBackdropFilter: 'blur(5.6px)',
      border: '1px solid rgba(130, 201, 30, 0.54)',
      padding: '0'
    }}>
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-baseline gap-3 overflow-hidden">
          <h2 className="text-base font-black text-white tracking-tight leading-none shrink-0">
              {category}
          </h2>
          <p className="text-[12px] text-white/70 font-medium whitespace-nowrap truncate">{tagline}</p>
        </div>
        <button className="flex items-center gap-1 text-[10px] font-bold text-white/40 hover:text-white transition-colors shrink-0 whitespace-nowrap ml-2">
          Ver tudo <ChevronRight size={12} />
        </button>
      </div>

      <div className="relative mx-1">
        {/* The Recessed Shelf Container */}
        <div className="shelf-container rounded-none pb-0 px-0 shadow-2xl border-y border-white/5 overflow-y-hidden mb-1">
          <div className="flex gap-0 overflow-x-auto custom-scrollbar scroll-smooth snap-x snap-mandatory relative z-10 pb-1">
            {products.map((product) => (
              <div key={product.id} className="snap-start shrink-0">
                <ProductCard product={product} onAdd={onAddProduct} />
              </div>
            ))}
          </div>
          
          {/* Internal shelf lighting/shadows */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
