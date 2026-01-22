"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Package, ArrowRight } from "lucide-react";
import { productCategories, type Product, type ProductCategory } from "@/data/products";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const locale = useLocale();

  // Get all products flattened with category info
  const allProducts = useMemo(() => {
    return productCategories.flatMap((category) =>
      category.products.map((product) => ({
        ...product,
        categoryId: category.id,
        categoryName: locale === "en" ? category.nameEn : category.name,
      }))
    );
  }, [locale]);

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase().trim();
    return allProducts.filter((product) => {
      const name = locale === "en" ? product.nameEn : product.name;
      const description = locale === "en" ? product.descriptionEn : product.description;
      return (
        name.toLowerCase().includes(searchTerm) ||
        description.toLowerCase().includes(searchTerm)
      );
    }).slice(0, 8); // Limit to 8 results
  }, [query, allProducts, locale]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // Reset query when modal closes
  useEffect(() => {
    if (!isOpen) {
      setQuery("");
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    onClose();
    setQuery("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl rounded-2xl border border-white/20 bg-white shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 border-b border-border/50 px-5 py-4">
              <Search className="h-5 w-5 text-muted-foreground shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={locale === "en" ? "Search products..." : "Αναζήτηση προϊόντων..."}
                className="flex-1 bg-transparent text-lg outline-none placeholder:text-muted-foreground"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 rounded-full hover:bg-muted transition-colors"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              )}
              <button
                onClick={onClose}
                className="ml-2 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground bg-muted rounded-lg transition-colors"
              >
                ESC
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {query.trim() === "" ? (
                <div className="px-5 py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    {locale === "en"
                      ? "Start typing to search products"
                      : "Πληκτρολογήστε για αναζήτηση προϊόντων"}
                  </p>
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="px-5 py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                    <Package className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <p className="font-medium text-foreground mb-1">
                    {locale === "en" ? "No products found" : "Δεν βρέθηκαν προϊόντα"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {locale === "en"
                      ? `No results for "${query}"`
                      : `Κανένα αποτέλεσμα για "${query}"`}
                  </p>
                </div>
              ) : (
                <div className="p-3">
                  <p className="px-2 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {locale === "en"
                      ? `${filteredProducts.length} product${filteredProducts.length > 1 ? "s" : ""} found`
                      : `${filteredProducts.length} προϊόν${filteredProducts.length > 1 ? "τα" : ""} βρέθηκαν`}
                  </p>
                  <div className="space-y-1">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.categoryId}/${product.id}`}
                        onClick={handleLinkClick}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 transition-all duration-200 group"
                      >
                        {/* Product Image */}
                        <div className="relative h-16 w-16 shrink-0 rounded-lg bg-muted overflow-hidden">
                          {product.image ? (
                            <Image
                              src={product.image}
                              alt={locale === "en" ? product.nameEn : product.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <Package className="h-6 w-6 text-muted-foreground" />
                            </div>
                          )}
                          {product.isBio && (
                            <div className="absolute top-1 right-1 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                              BIO
                            </div>
                          )}
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                            {locale === "en" ? product.nameEn : product.name}
                          </h4>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {locale === "en" ? product.descriptionEn : product.description}
                          </p>
                          <p className="text-xs text-primary/70 mt-0.5 truncate">
                            {product.categoryName}
                          </p>
                        </div>

                        {/* Arrow */}
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            {filteredProducts.length > 0 && (
              <div className="border-t border-border/50 px-5 py-3 bg-muted/30">
                <Link
                  href="/products"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {locale === "en" ? "View all products" : "Δείτε όλα τα προϊόντα"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
