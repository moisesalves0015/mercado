/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <motion.div
      layout
      whileTap={{ scale: 0.98 }}
      className="relative flex flex-col items-center justify-end w-[100px] h-[170px] shrink-0 cursor-pointer"
      onClick={() => onAdd(product)}
    >
      {/* Product Image Stack (3 images overlapping) */}
      <div className="absolute inset-0 flex items-end justify-center z-10 -translate-y-[17px] pointer-events-none pb-6">
        {/* Back Image (Left) */}
        <img
          src={product.image}
          alt=""
          className="max-w-[120px] max-h-[140px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] -translate-x-8"
          referrerPolicy="no-referrer"
        />
        {/* Middle Image (Right) */}
        <img
          src={product.image}
          alt=""
          className="max-w-[120px] max-h-[140px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] translate-x-8 absolute"
          referrerPolicy="no-referrer"
        />
        {/* Front Image (Center) */}
        <img
          src={product.image}
          alt={product.name}
          className="max-w-[120px] max-h-[140px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)] absolute z-20"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Realistic Shadow on the shelf "surface" */}
      <div className="absolute bottom-4 w-[60%] h-4 bg-black/60 blur-xl rounded-full opacity-60 -z-10" />

      {/* Info Container as a Gondola Tag */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center z-50 product-label-lip pt-1 pb-2">
        <h3 className="text-[9px] font-black text-white/80 whitespace-nowrap truncate w-[90px] text-center uppercase tracking-tighter drop-shadow-md">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-center w-full">
            <div className="bg-[#FFC107] border border-black/20 rounded-sm py-0.5 pl-1.5 pr-0.5 flex items-center gap-1 shadow-xl w-[85px] justify-between">
                <span className="text-[10px] font-black text-black">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center text-[#FFC107] shadow-inner shrink-0">
                    <Plus size={10} strokeWidth={4} />
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
}
