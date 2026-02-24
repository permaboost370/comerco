"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Leaf, FlaskConical, Sprout, BookOpen, Beaker, Tractor, Microscope } from "lucide-react";
import {
  wizardCropCategories,
  type WizardCropCategory,
  type WizardCrop,
  type WizardPhase,
  type UserType,
  type AgronomistPath,
} from "@/data/wizardData";
import { productCategories, type Product, type ProductCategory } from "@/data/products";

// ─── Types ────────────────────────────────────────────────────────────────────

type WizardView =
  | "user-type"
  | "agro-path"
  | "crop-category"
  | "specific-crop"
  | "phase"
  | "results"
  | "product-category"
  | "category-results";

// ─── Animations ───────────────────────────────────────────────────────────────

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? 60 : -60,
    opacity: 0,
  }),
};

const transition = { duration: 0.28, ease: "easeInOut" as const };

// ─── Helper: progress calculation ────────────────────────────────────────────

function getProgress(
  view: WizardView,
  userType: UserType | null,
  agronomistPath: AgronomistPath | null
): { current: number; total: number } {
  if (userType === "agronomist" && agronomistPath === "category") {
    const map: Record<WizardView, number> = {
      "user-type": 1, "agro-path": 2, "product-category": 3, "category-results": 4,
      "crop-category": 2, "specific-crop": 3, "phase": 4, "results": 5,
    };
    return { current: map[view] ?? 1, total: 4 };
  }
  if (userType === "agronomist") {
    const map: Record<WizardView, number> = {
      "user-type": 1, "agro-path": 2, "crop-category": 3, "specific-crop": 4, "phase": 5, "results": 6,
      "product-category": 3, "category-results": 4,
    };
    return { current: map[view] ?? 1, total: 6 };
  }
  const map: Record<WizardView, number> = {
    "user-type": 1, "crop-category": 2, "specific-crop": 3, "phase": 4, "results": 5,
    "agro-path": 1, "product-category": 2, "category-results": 3,
  };
  return { current: map[view] ?? 1, total: 5 };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SelectionCard({
  emoji,
  customVisual,
  title,
  subtitle,
  onClick,
  selected,
}: {
  emoji?: string;
  customVisual?: React.ReactNode;
  title: string;
  subtitle?: string;
  onClick: () => void;
  selected?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col items-center gap-2 rounded-2xl border-2 p-4 text-center transition-all duration-200 hover:shadow-lg active:scale-95 cursor-pointer
        ${selected
          ? "border-[#1B4D3E] bg-[#1B4D3E]/5 shadow-md"
          : "border-gray-200 bg-white hover:border-[#1B4D3E]/40 hover:bg-gray-50"
        }`}
    >
      {selected && (
        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#1B4D3E] flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
      {customVisual ?? <div className="text-3xl leading-none">{emoji}</div>}
      <div className={`font-semibold text-sm leading-tight transition-colors ${selected ? "text-[#1B4D3E]" : "text-gray-800 group-hover:text-[#1B4D3E]"}`}>
        {title}
      </div>
      {subtitle && (
        <div className="text-xs text-gray-500 leading-tight">{subtitle}</div>
      )}
    </button>
  );
}

function ProductCard({
  product,
  locale,
  categoryId,
}: {
  product: Product;
  locale: string;
  categoryId: string;
}) {
  const router = useRouter();
  const isEn = locale === "en";
  const name = isEn ? product.nameEn : product.name;
  const description = isEn ? product.descriptionEn : product.description;

  return (
    <button
      onClick={() => router.push(`/${locale}/products/${categoryId}/${product.id}`)}
      className="group flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md hover:border-[#1B4D3E]/40 transition-all text-left cursor-pointer w-full"
    >
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-bold text-[#1B4D3E] text-sm leading-tight group-hover:underline">{name}</h4>
        {product.isBio && (
          <span className="shrink-0 flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200">
            <Leaf className="w-2.5 h-2.5" />
            Bio
          </span>
        )}
      </div>
      <p className="text-xs text-gray-600 leading-relaxed flex-1">{description}</p>
    </button>
  );
}

// ─── Main Wizard ──────────────────────────────────────────────────────────────

interface ProductWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductWizard({ isOpen, onClose }: ProductWizardProps) {
  const locale = useLocale();
  const isEn = locale === "en";

  const [view, setView] = useState<WizardView>("user-type");
  const [direction, setDirection] = useState(1);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [agronomistPath, setAgronomistPath] = useState<AgronomistPath | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<WizardCropCategory | null>(null);
  const [selectedCrop, setSelectedCrop] = useState<WizardCrop | null>(null);
  const [selectedPhase, setSelectedPhase] = useState<WizardPhase | null>(null);
  const [selectedProductCategory, setSelectedProductCategory] = useState<ProductCategory | null>(null);

  const go = useCallback((nextView: WizardView, dir = 1) => {
    setDirection(dir);
    setView(nextView);
  }, []);

  const goBack = useCallback(() => {
    setDirection(-1);
    if (view === "crop-category") {
      if (userType === "agronomist") go("agro-path", -1);
      else go("user-type", -1);
    } else if (view === "specific-crop") go("crop-category", -1);
    else if (view === "phase") go("specific-crop", -1);
    else if (view === "results") go("phase", -1);
    else if (view === "agro-path") go("user-type", -1);
    else if (view === "product-category") go("agro-path", -1);
    else if (view === "category-results") go("product-category", -1);
    else go("user-type", -1);
  }, [view, userType, go]);

  const reset = useCallback(() => {
    setView("user-type");
    setDirection(1);
    setUserType(null);
    setAgronomistPath(null);
    setSelectedCategory(null);
    setSelectedCrop(null);
    setSelectedPhase(null);
    setSelectedProductCategory(null);
  }, []);

  const handleClose = useCallback(() => {
    onClose();
    setTimeout(reset, 300);
  }, [onClose, reset]);

  // Results: get products for selected phase
  const resultProducts: Array<{ product: Product; categoryId: string }> = (() => {
    if (!selectedPhase) return [];
    return selectedPhase.productIds.flatMap((id) => {
      for (const cat of productCategories) {
        const p = cat.products.find((p) => p.id === id);
        if (p) return [{ product: p, categoryId: cat.id }];
      }
      return [];
    });
  })();

  // Category results: all products in selected product category
  const categoryResultProducts = selectedProductCategory?.products ?? [];

  const { current: progressCurrent, total: progressTotal } = getProgress(view, userType, agronomistPath);
  const canGoBack = view !== "user-type";

  const t = {
    title: isEn ? "Find the Right Products" : "Βρες τα Κατάλληλα Προϊόντα",
    step: isEn ? "Step" : "Βήμα",
    of: isEn ? "of" : "από",
    whoAreYou: isEn ? "Who are you?" : "Ποιος είσαι;",
    farmer: isEn ? "Farmer" : "Αγρότης",
    farmerSub: isEn ? "I grow crops" : "Καλλιεργώ",
    agronomist: isEn ? "Agronomist" : "Γεωπόνος",
    agronomistSub: isEn ? "I advise farmers" : "Συμβουλεύω καλλιεργητές",
    howSearch: isEn ? "How would you like to search?" : "Πώς θέλεις να αναζητήσεις;",
    byCrop: isEn ? "By Crop" : "Βάσει Καλλιέργειας",
    byCropSub: isEn ? "Find products for a specific crop and phase" : "Βρες προϊόντα για συγκεκριμένη καλλιέργεια και φάση",
    byCategory: isEn ? "By Product Category" : "Βάσει Κατηγορίας Προϊόντος",
    byCategorySub: isEn ? "Browse all products by technical category" : "Περιήγηση σε όλα τα προϊόντα ανά κατηγορία",
    selectCropCat: isEn ? "Select your crop category" : "Επίλεξε κατηγορία καλλιέργειας",
    selectCrop: isEn ? "Select your crop" : "Επίλεξε την καλλιέργειά σου",
    selectPhase: isEn ? "What phase are you in?" : "Σε ποια φάση βρίσκεσαι;",
    results: isEn ? "Recommended Products" : "Προτεινόμενα Προϊόντα",
    resultsSub: (n: number) => isEn ? `${n} products match your selection` : `${n} προϊόντα ταιριάζουν στην επιλογή σου`,
    selectProductCat: isEn ? "Select product category" : "Επίλεξε κατηγορία προϊόντος",
    back: isEn ? "Back" : "Πίσω",
    startOver: isEn ? "Start Over" : "Νέα Αναζήτηση",
    contactDistributor: isEn ? "Contact your distributor" : "Επικοινώνησε με τον διανομέα σου",
    noProducts: isEn ? "No products found for this combination." : "Δεν βρέθηκαν προϊόντα για αυτή την επιλογή.",
    viewAll: isEn ? "View all products" : "Δείτε όλα τα προϊόντα",
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl bg-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="shrink-0 bg-[#1B4D3E] px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-emerald-300 text-xs font-medium">
              {t.step} {progressCurrent} {t.of} {progressTotal}
            </p>
            <h2 className="text-white font-bold text-lg leading-tight">{t.title}</h2>
          </div>
          <button
            onClick={handleClose}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="shrink-0 h-1 bg-gray-100">
          <motion.div
            className="h-full bg-[#1B4D3E]"
            animate={{ width: `${(progressCurrent / progressTotal) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        {/* Breadcrumb chips */}
        {(selectedCategory || selectedCrop) && (
          <div className="shrink-0 px-6 py-2 flex items-center gap-2 flex-wrap border-b border-gray-100 bg-gray-50">
            {selectedCategory && (
              <span className="flex items-center gap-1 rounded-full bg-[#1B4D3E]/10 px-3 py-1 text-xs font-medium text-[#1B4D3E]">
                <span>{selectedCategory.emoji}</span>
                <span>{isEn ? selectedCategory.nameEn : selectedCategory.name}</span>
              </span>
            )}
            {selectedCrop && (
              <span className="flex items-center gap-1 rounded-full bg-[#1B4D3E]/10 px-3 py-1 text-xs font-medium text-[#1B4D3E]">
                <span>{selectedCrop.emoji}</span>
                <span>{isEn ? selectedCrop.nameEn : selectedCrop.name}</span>
              </span>
            )}
          </div>
        )}

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={view}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className="p-6"
            >

              {/* ── STEP: User type ── */}
              {view === "user-type" && (
                <div className="space-y-5">
                  <h3 className="text-xl font-bold text-gray-900">{t.whoAreYou}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <SelectionCard
                      customVisual={
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                          <Tractor className="w-8 h-8 text-green-700" strokeWidth={1.5} />
                        </div>
                      }
                      title={t.farmer}
                      subtitle={t.farmerSub}
                      selected={userType === "farmer"}
                      onClick={() => {
                        setUserType("farmer");
                        go("crop-category");
                      }}
                    />
                    <SelectionCard
                      customVisual={
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100">
                          <Microscope className="w-8 h-8 text-teal-700" strokeWidth={1.5} />
                        </div>
                      }
                      title={t.agronomist}
                      subtitle={t.agronomistSub}
                      selected={userType === "agronomist"}
                      onClick={() => {
                        setUserType("agronomist");
                        go("agro-path");
                      }}
                    />
                  </div>
                </div>
              )}

              {/* ── STEP: Agronomist path ── */}
              {view === "agro-path" && (
                <div className="space-y-5">
                  <h3 className="text-xl font-bold text-gray-900">{t.howSearch}</h3>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => {
                        setAgronomistPath("crop");
                        go("crop-category");
                      }}
                      className="flex items-center gap-4 rounded-2xl border-2 border-gray-200 bg-white p-4 text-left hover:border-[#1B4D3E]/50 hover:bg-gray-50 transition-all group"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1B4D3E]/10 text-2xl">
                        🌿
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-[#1B4D3E]">{t.byCrop}</div>
                        <div className="text-sm text-gray-500">{t.byCropSub}</div>
                      </div>
                      <ChevronRight className="ml-auto w-5 h-5 text-gray-400 group-hover:text-[#1B4D3E]" />
                    </button>
                    <button
                      onClick={() => {
                        setAgronomistPath("category");
                        go("product-category");
                      }}
                      className="flex items-center gap-4 rounded-2xl border-2 border-gray-200 bg-white p-4 text-left hover:border-[#1B4D3E]/50 hover:bg-gray-50 transition-all group"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1B4D3E]/10 text-2xl">
                        🔬
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-[#1B4D3E]">{t.byCategory}</div>
                        <div className="text-sm text-gray-500">{t.byCategorySub}</div>
                      </div>
                      <ChevronRight className="ml-auto w-5 h-5 text-gray-400 group-hover:text-[#1B4D3E]" />
                    </button>
                  </div>
                </div>
              )}

              {/* ── STEP: Crop category ── */}
              {view === "crop-category" && (
                <div className="space-y-5">
                  <h3 className="text-xl font-bold text-gray-900">{t.selectCropCat}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {wizardCropCategories.map((cat) => {
                      const isSelected = selectedCategory?.id === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setSelectedCategory(cat);
                            setSelectedCrop(null);
                            setSelectedPhase(null);
                            go("specific-crop");
                          }}
                          className={`flex flex-col items-center gap-2.5 p-3 rounded-2xl transition-all duration-200 cursor-pointer active:scale-95
                            ${isSelected ? "bg-[#1B4D3E]/8" : "hover:bg-gray-50"}`}
                        >
                          <div className={`relative w-20 h-20 rounded-full overflow-hidden ring-2 transition-all duration-200 shadow-sm
                            ${isSelected
                              ? "ring-[#1B4D3E] ring-offset-2 shadow-md"
                              : "ring-gray-200 hover:ring-[#1B4D3E]/50"
                            }`}
                          >
                            <Image
                              src={`/images/crops/${cat.image}`}
                              alt={isEn ? cat.nameEn : cat.name}
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                          </div>
                          <span className={`font-semibold text-xs text-center leading-tight transition-colors
                            ${isSelected ? "text-[#1B4D3E]" : "text-gray-800"}`}
                          >
                            {isEn ? cat.nameEn : cat.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ── STEP: Specific crop ── */}
              {view === "specific-crop" && selectedCategory && (
                <div className="space-y-5">
                  <h3 className="text-xl font-bold text-gray-900">{t.selectCrop}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {selectedCategory.crops.map((crop) => (
                      <SelectionCard
                        key={crop.id}
                        emoji={crop.emoji}
                        title={isEn ? crop.nameEn : crop.name}
                        selected={selectedCrop?.id === crop.id}
                        onClick={() => {
                          setSelectedCrop(crop);
                          setSelectedPhase(null);
                          go("phase");
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* ── STEP: Phase ── */}
              {view === "phase" && selectedCategory && (
                <div className="space-y-5">
                  <h3 className="text-xl font-bold text-gray-900">{t.selectPhase}</h3>
                  <div className="flex flex-col gap-3">
                    {selectedCategory.phases.map((phase) => (
                      <button
                        key={phase.id}
                        onClick={() => {
                          setSelectedPhase(phase);
                          go("results");
                        }}
                        className={`flex items-center gap-4 rounded-2xl border-2 p-4 text-left hover:shadow-md transition-all group cursor-pointer
                          ${selectedPhase?.id === phase.id
                            ? "border-[#1B4D3E] bg-[#1B4D3E]/5"
                            : "border-gray-200 bg-white hover:border-[#1B4D3E]/40"
                          }`}
                      >
                        <div className="text-3xl leading-none">{phase.emoji}</div>
                        <div>
                          <div className={`font-semibold text-sm group-hover:text-[#1B4D3E] transition-colors ${selectedPhase?.id === phase.id ? "text-[#1B4D3E]" : "text-gray-800"}`}>
                            {isEn ? phase.nameEn : phase.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {isEn ? phase.descriptionEn : phase.description}
                          </div>
                        </div>
                        <ChevronRight className="ml-auto w-5 h-5 text-gray-300 group-hover:text-[#1B4D3E] transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ── STEP: Results (crop path) ── */}
              {view === "results" && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{t.results}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {resultProducts.length > 0
                        ? t.resultsSub(resultProducts.length)
                        : t.noProducts}
                    </p>
                  </div>

                  {resultProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {resultProducts.map(({ product, categoryId }) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          locale={locale}
                          categoryId={categoryId}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-2xl border-2 border-dashed border-gray-200 p-8 text-center text-gray-500">
                      {t.noProducts}
                    </div>
                  )}

                  {/* CTA for farmers: contact distributor */}
                  {userType === "farmer" && (
                    <div className="rounded-2xl bg-[#1B4D3E]/5 border border-[#1B4D3E]/20 p-4 flex items-center gap-3">
                      <div className="text-2xl">📞</div>
                      <div>
                        <div className="font-semibold text-[#1B4D3E] text-sm">
                          {t.contactDistributor}
                        </div>
                        <div className="text-xs text-gray-600 mt-0.5">
                          {isEn
                            ? "A local expert will advise you on the right products and dosages."
                            : "Ένας τοπικός ειδικός θα σε συμβουλέψει για τα σωστά προϊόντα και δοσολογίες."}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ── STEP: Product category browse (agronomist) ── */}
              {view === "product-category" && (
                <div className="space-y-5">
                  <h3 className="text-xl font-bold text-gray-900">{t.selectProductCat}</h3>
                  <div className="flex flex-col gap-3">
                    {productCategories.map((cat) => {
                      const icon = {
                        "microorganism-products": <FlaskConical className="w-5 h-5" />,
                        "solid-fertilizers": <Beaker className="w-5 h-5" />,
                        "liquid-fertilizers": <Sprout className="w-5 h-5" />,
                        "biostimulants-organic": <Leaf className="w-5 h-5" />,
                        "adjuvants": <BookOpen className="w-5 h-5" />,
                        "solid-organic-microorganisms": <Leaf className="w-5 h-5" />,
                      }[cat.id] ?? <Leaf className="w-5 h-5" />;

                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setSelectedProductCategory(cat);
                            go("category-results");
                          }}
                          className="flex items-center gap-4 rounded-2xl border-2 border-gray-200 bg-white p-4 text-left hover:border-[#1B4D3E]/50 hover:bg-gray-50 transition-all group"
                        >
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1B4D3E]/10 text-[#1B4D3E]">
                            {icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm text-gray-900 group-hover:text-[#1B4D3E] leading-tight">
                              {isEn ? cat.nameEn : cat.name}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5 truncate">
                              {cat.products.length} {isEn ? "products" : "προϊόντα"}
                            </div>
                          </div>
                          <ChevronRight className="ml-auto w-5 h-5 text-gray-400 group-hover:text-[#1B4D3E]" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ── STEP: Category results (agronomist category path) ── */}
              {view === "category-results" && selectedProductCategory && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {isEn ? selectedProductCategory.nameEn : selectedProductCategory.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {t.resultsSub(categoryResultProducts.length)}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {categoryResultProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        locale={locale}
                        categoryId={selectedProductCategory.id}
                      />
                    ))}
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer navigation */}
        <div className="shrink-0 border-t border-gray-100 px-6 py-4 flex items-center justify-between gap-3 bg-gray-50">
          <button
            onClick={canGoBack ? goBack : undefined}
            disabled={!canGoBack}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium transition-all
              ${canGoBack
                ? "text-gray-700 hover:bg-gray-200 cursor-pointer"
                : "text-gray-300 cursor-not-allowed"
              }`}
          >
            <ChevronLeft className="w-4 h-4" />
            {t.back}
          </button>

          {(view === "results" || view === "category-results") && (
            <button
              onClick={reset}
              className="flex items-center gap-1.5 rounded-xl bg-[#1B4D3E] px-4 py-2 text-sm font-medium text-white hover:bg-[#1B4D3E]/90 transition-colors cursor-pointer"
            >
              {t.startOver}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
