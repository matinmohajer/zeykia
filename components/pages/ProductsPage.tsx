"use client";

import { useState } from "react";
import { ProductsHeader } from "../sections/ProductsHeader";
import { ProductsFilterBar } from "../sections/ProductsFilterBar";
import { ProductsGrid, Product } from "../sections/ProductsGrid";
import { ProductsLoadMore } from "../sections/ProductsLoadMore";

const products: Product[] = [
  {
    id: "1",
    name: "Midnight Odyssey",
    price: 25000,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop",
    detailImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop",
    collection: "public",
    material: "Silk & Wool",
    size: "8' × 10'",
    limited: true,
  },
  {
    id: "2",
    name: "Sapphire Reverie",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=600&fit=crop",
    detailImage:
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1200&h=800&fit=crop",
    collection: "vip",
    material: "Pure Silk",
    size: "10' × 14'",
    limited: true,
  },
  {
    id: "3",
    name: "Emerald Whisper",
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&h=600&fit=crop",
    detailImage:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1200&h=800&fit=crop",
    collection: "public",
    material: "Wool & Cotton",
    size: "6' × 9'",
    limited: false,
  },
  {
    id: "4",
    name: "Ruby Eclipse",
    price: 42000,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    detailImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
    collection: "vip",
    material: "Silk & Gold Thread",
    size: "12' × 16'",
    limited: true,
  },
  {
    id: "5",
    name: "Ivory Dreams",
    price: 22000,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    detailImage:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop",
    collection: "public",
    material: "Wool",
    size: "8' × 12'",
    limited: false,
  },
  {
    id: "6",
    name: "Platinum Symphony",
    price: 50000,
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&h=600&fit=crop",
    detailImage:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&h=800&fit=crop",
    collection: "vip",
    material: "Silk & Platinum Thread",
    size: "14' × 20'",
    limited: true,
  },
];

const filterOptions = [
  { id: "all", label: "All Collections" },
  { id: "public", label: "Public Collection" },
  { id: "vip", label: "VIP Collection" },
];

export function ProductsPage() {
  const [filter, setFilter] = useState("all");
  const [showMore, setShowMore] = useState(false);

  const filteredProducts = products.filter((product) => {
    if (filter === "all") return true;
    return product.collection === filter;
  });
  const displayedProducts = showMore
    ? filteredProducts
    : filteredProducts.slice(0, 6);

  return (
    <div className="pt-20 pb-20">
      <ProductsHeader
        title="Artisanal Collection"
        subtitle="Each piece in our collection represents months of meticulous craftsmanship, combining traditional techniques with contemporary artistic vision."
      />
      <ProductsFilterBar
        filterOptions={filterOptions}
        currentFilter={filter}
        onFilterChange={setFilter}
      />
      <ProductsGrid products={displayedProducts} />
      <ProductsLoadMore
        showMore={showMore}
        onToggle={() => setShowMore(!showMore)}
        showButton={filteredProducts.length > 6}
      />
    </div>
  );
}
