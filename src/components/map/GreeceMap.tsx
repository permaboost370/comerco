"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { distributors, getDistributorByRegion, type Distributor } from "@/data/distributors";

interface GreeceMapProps {
  onRegionSelect: (distributor: Distributor | null, regionName: string) => void;
  selectedRegion: string | null;
}

// Simplified SVG paths for Greek regions (approximate shapes)
const regions = [
  {
    id: "east-macedonia-thrace",
    name: "East Macedonia & Thrace",
    nameGr: "Ανατ. Μακεδονία & Θράκη",
    path: "M280,20 L380,20 L400,60 L380,100 L320,100 L280,80 Z",
    center: { x: 340, y: 60 },
  },
  {
    id: "central-macedonia",
    name: "Central Macedonia",
    nameGr: "Κεντρική Μακεδονία",
    path: "M180,40 L280,20 L280,80 L320,100 L300,140 L220,140 L180,100 Z",
    center: { x: 240, y: 80 },
  },
  {
    id: "west-macedonia",
    name: "West Macedonia",
    nameGr: "Δυτική Μακεδονία",
    path: "M120,60 L180,40 L180,100 L220,140 L180,160 L120,140 Z",
    center: { x: 155, y: 100 },
  },
  {
    id: "epirus",
    name: "Epirus",
    nameGr: "Ήπειρος",
    path: "M60,100 L120,60 L120,140 L180,160 L160,220 L80,220 L40,160 Z",
    center: { x: 100, y: 160 },
  },
  {
    id: "thessaly",
    name: "Thessaly",
    nameGr: "Θεσσαλία",
    path: "M180,160 L220,140 L300,140 L320,180 L280,220 L200,220 L160,220 Z",
    center: { x: 240, y: 180 },
  },
  {
    id: "ionian-islands",
    name: "Ionian Islands",
    nameGr: "Ιόνια Νησιά",
    path: "M20,180 L40,160 L50,200 L40,260 L50,320 L30,340 L10,300 L20,240 Z",
    center: { x: 30, y: 260 },
  },
  {
    id: "west-greece",
    name: "West Greece",
    nameGr: "Δυτική Ελλάδα",
    path: "M80,220 L160,220 L200,220 L180,280 L140,320 L80,320 L60,280 Z",
    center: { x: 130, y: 270 },
  },
  {
    id: "central-greece",
    name: "Central Greece",
    nameGr: "Στερεά Ελλάδα",
    path: "M200,220 L280,220 L320,180 L360,200 L340,260 L280,280 L200,280 L180,280 Z",
    center: { x: 270, y: 250 },
  },
  {
    id: "attica",
    name: "Attica",
    nameGr: "Αττική",
    path: "M280,280 L340,260 L360,290 L340,320 L300,320 L280,300 Z",
    center: { x: 315, y: 290 },
  },
  {
    id: "peloponnese",
    name: "Peloponnese",
    nameGr: "Πελοπόννησος",
    path: "M140,320 L180,280 L200,280 L280,280 L280,300 L260,360 L200,400 L140,400 L100,360 Z",
    center: { x: 190, y: 350 },
  },
  {
    id: "north-aegean",
    name: "North Aegean",
    nameGr: "Βόρειο Αιγαίο",
    path: "M360,80 L400,60 L420,100 L400,140 L360,140 L340,120 Z",
    center: { x: 380, y: 100 },
  },
  {
    id: "south-aegean",
    name: "South Aegean",
    nameGr: "Νότιο Αιγαίο",
    path: "M320,340 L380,320 L420,340 L440,380 L400,420 L340,420 L300,380 Z",
    center: { x: 370, y: 370 },
  },
  {
    id: "crete",
    name: "Crete",
    nameGr: "Κρήτη",
    path: "M200,460 L360,440 L400,460 L380,490 L280,500 L200,490 L180,470 Z",
    center: { x: 290, y: 470 },
  },
];

// Create color mapping based on distributor index
const getDistributorColor = (regionId: string, isSelected: boolean, isHovered: boolean) => {
  const distributor = getDistributorByRegion(regionId);
  if (!distributor) return "fill-muted stroke-border";

  if (isSelected) return "fill-primary stroke-primary";
  if (isHovered) return "fill-primary/60 stroke-primary";

  // Assign colors based on distributor
  const distributorIndex = distributors.findIndex((d) => d.id === distributor.id);
  const colors = [
    "fill-emerald-400/40 stroke-emerald-600", // Attica etc
    "fill-sky-400/40 stroke-sky-600", // Fthiotida
    "fill-violet-400/40 stroke-violet-600", // West-Central Macedonia
    "fill-amber-400/40 stroke-amber-600", // East Macedonia Thrace
    "fill-rose-400/40 stroke-rose-600", // West Peloponnese
    "fill-teal-400/40 stroke-teal-600", // East Peloponnese
    "fill-indigo-400/40 stroke-indigo-600", // Thessaly Epirus
    "fill-orange-400/40 stroke-orange-600", // Crete
    "fill-cyan-400/40 stroke-cyan-600", // Aegean Islands
  ];
  return colors[distributorIndex % colors.length];
};

export default function GreeceMap({ onRegionSelect, selectedRegion }: GreeceMapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const handleRegionClick = (regionId: string, regionName: string) => {
    const distributor = getDistributorByRegion(regionId);
    onRegionSelect(distributor || null, regionName);
  };

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 450 520"
        className="h-auto w-full"
        style={{ maxHeight: "600px" }}
      >
        {/* Background - Sea */}
        <rect x="0" y="0" width="450" height="520" className="fill-blue-50 dark:fill-blue-950/20" />

        {/* Regions */}
        {regions.map((region) => {
          const isSelected = selectedRegion === region.id;
          const isHovered = hoveredRegion === region.id;
          const colorClass = getDistributorColor(region.id, isSelected, isHovered);

          return (
            <g key={region.id}>
              <motion.path
                d={region.path}
                className={`cursor-pointer transition-colors ${colorClass}`}
                strokeWidth="2"
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
                onClick={() => handleRegionClick(region.id, region.name)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              />
              {/* Region label on hover */}
              {(hoveredRegion === region.id || selectedRegion === region.id) && (
                <motion.text
                  x={region.center.x}
                  y={region.center.y}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="pointer-events-none fill-foreground text-[8px] font-medium"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {region.nameGr}
                </motion.text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="mt-6 text-center">
        <p className="text-xs text-muted-foreground">
          Κάντε κλικ σε μια περιοχή για να δείτε τον συνεργάτη
        </p>
      </div>
    </div>
  );
}
