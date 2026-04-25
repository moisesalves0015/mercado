/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, ChevronRight } from "lucide-react";
import { CartItem } from "../types";

interface CartBarProps {
  items: CartItem[];
}

export function CartBar({ items }: CartBarProps) {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-50">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="bg-[#FFC107] rounded-[2rem] px-8 py-5 flex items-center justify-between shadow-[0_20px_50px_rgba(255,193,7,0.3)] cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <ShoppingBag size={28} className="text-black" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-600 rounded-full border-2 border-[#FFC107] animate-pulse" />
              </div>
              <span className="font-bold text-[18px] text-black tracking-tight">{totalItems} itens</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="font-black text-[22px] text-black">R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
              <div className="w-9 h-9 rounded-full bg-black/10 flex items-center justify-center">
                <ChevronRight size={28} strokeWidth={3} className="text-black" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
