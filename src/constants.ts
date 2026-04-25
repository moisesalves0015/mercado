/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Product } from "./types";

export const PRODUCTS: Product[] = [
  // Bebidas
  {
    id: "d1",
    name: "Coca-Cola 350ml",
    price: 6.49,
    image: "/products/coca_cola.png",
    category: Category.BEBIDAS,
    unit: "un"
  },
  {
    id: "d2",
    name: "Guaraná Antarctica 350ml",
    price: 5.49,
    image: "/products/guarana.png",
    category: Category.BEBIDAS,
    unit: "un"
  },
  {
    id: "d3",
    name: "Fanta Laranja 350ml",
    price: 5.49,
    image: "/products/fanta.png",
    category: Category.BEBIDAS,
    unit: "un"
  },
  {
    id: "d4",
    name: "Água Mineral Crystal 500ml",
    price: 3.49,
    image: "/products/water.png",
    category: Category.BEBIDAS,
    unit: "un"
  },
  {
    id: "d5",
    name: "Cerveja Heineken 330ml",
    price: 8.90,
    image: "/products/heineken.png",
    category: Category.BEBIDAS,
    unit: "un"
  },
  {
    id: "d6",
    name: "Cerveja Brahma 350ml",
    price: 5.90,
    image: "/products/brahma.png",
    category: Category.BEBIDAS,
    unit: "un"
  },
  {
    id: "d7",
    name: "Cerveja Antarctica 350ml",
    price: 5.49,
    image: "/products/antarctica.png",
    category: Category.BEBIDAS,
    unit: "un"
  },

  // Alimentos
  {
    id: "f1",
    name: "Arroz Tio João 5kg",
    price: 22.90,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=200&auto=format&fit=crop",
    category: Category.ALIMENTOS,
    unit: "pct"
  },
  {
    id: "f2",
    name: "Feijão Kicaldo 1kg",
    price: 8.49,
    image: "https://images.unsplash.com/photo-1551462147-3a88236b3014?q=80&w=200&auto=format&fit=crop",
    category: Category.ALIMENTOS,
    unit: "pct"
  },
  {
    id: "f3",
    name: "Macarrão Espaguete 500g",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1551462147-ff29053fad67?q=80&w=200&auto=format&fit=crop",
    category: Category.ALIMENTOS,
    unit: "un"
  },
  {
    id: "f4",
    name: "Molho de Tomate Fugini",
    price: 2.79,
    image: "https://images.unsplash.com/photo-1620706857370-e1b977fd7360?q=80&w=200&auto=format&fit=crop",
    category: Category.ALIMENTOS,
    unit: "un"
  },
  {
    id: "f5",
    name: "Óleo de Soja Liza 900ml",
    price: 7.49,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbacf84c?q=80&w=200&auto=format&fit=crop",
    category: Category.ALIMENTOS,
    unit: "un"
  },

  // Limpeza
  {
    id: "c1",
    name: "Detergente Ypê 500ml",
    price: 4.29,
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=200&auto=format&fit=crop",
    category: Category.LIMPEZA,
    unit: "un"
  },
  {
    id: "c2",
    name: "Sabão em Pó Omo 1.6kg",
    price: 11.90,
    image: "https://images.unsplash.com/photo-1606822858416-2c5d15f3a097?q=80&w=200&auto=format&fit=crop",
    category: Category.LIMPEZA,
    unit: "un"
  },
  {
    id: "c3",
    name: "Multiuso Veja 500ml",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=200&auto=format&fit=crop",
    category: Category.LIMPEZA,
    unit: "un"
  },
  {
    id: "c4",
    name: "Sabão em Pó Tixan 800g",
    price: 9.90,
    image: "https://images.unsplash.com/photo-1517646288021-2287f73ef814?q=80&w=200&auto=format&fit=crop",
    category: Category.LIMPEZA,
    unit: "un"
  },
  {
    id: "c5",
    name: "Água Sanitária Qboa 2L",
    price: 4.29,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop",
    category: Category.LIMPEZA,
    unit: "un"
  },

  // Higiene
  {
    id: "h1",
    name: "Shampoo Seda 325ml",
    price: 12.90,
    image: "https://images.unsplash.com/photo-1559594861-16383c2f1e67?q=80&w=200&auto=format&fit=crop",
    category: Category.HIGIENE,
    unit: "un"
  },
  {
    id: "h2",
    name: "Sabonete Palmolive 85g",
    price: 1.49,
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=200&auto=format&fit=crop",
    category: Category.HIGIENE,
    unit: "un"
  },
  {
    id: "h3",
    name: "Creme Dental Colgate",
    price: 3.79,
    image: "https://images.unsplash.com/photo-1559594861-16383c2f1e67?q=80&w=200&auto=format&fit=crop",
    category: Category.HIGIENE,
    unit: "un"
  },
  {
    id: "h4",
    name: "Papel Higiênico Neve 4un",
    price: 12.49,
    image: "https://images.unsplash.com/photo-1584622781514-f63f769c1340?q=80&w=200&auto=format&fit=crop",
    category: Category.HIGIENE,
    unit: "pct"
  },
  {
    id: "h5",
    name: "Absorvente Always",
    price: 6.49,
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=200&auto=format&fit=crop",
    category: Category.HIGIENE,
    unit: "pct"
  }
];

export const CATEGORY_COLORS: Record<Category, string> = {
  [Category.BEBIDAS]: "#82C91E",
  [Category.ALIMENTOS]: "#F97316",
  [Category.LIMPEZA]: "#3B82F6",
  [Category.HIGIENE]: "#EC4899"
};

export const CATEGORY_TAGLINES: Record<Category, string> = {
  [Category.BEBIDAS]: "Gelada é aqui! 🧊",
  [Category.ALIMENTOS]: "Tudo que a gente ama! 😍",
  [Category.LIMPEZA]: "Deixa tudo brilhando ✨",
  [Category.HIGIENE]: "Cuidado é essencial 💚"
};

export const CATEGORY_ICONS: Record<Category | "Todas", string> = {
  "Todas": "https://cdn-icons-png.flaticon.com/512/235/235861.png",
  [Category.BEBIDAS]: "https://cdn-icons-png.flaticon.com/512/2405/2405479.png",
  [Category.ALIMENTOS]: "https://cdn-icons-png.flaticon.com/512/3058/3058995.png",
  [Category.LIMPEZA]: "https://cdn-icons-png.flaticon.com/512/2975/2975175.png",
  [Category.HIGIENE]: "https://cdn-icons-png.flaticon.com/512/1060/1060601.png"
};
