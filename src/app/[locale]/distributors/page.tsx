"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Phone, MapPin, User, X, Building2, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { distributors, type Distributor } from "@/data/distributors";

// Dynamically import Leaflet map to avoid SSR issues
const GreeceLeafletMap = dynamic(() => import("@/components/map/GreeceLeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[500px] w-full items-center justify-center rounded-xl bg-muted">
      <div className="text-muted-foreground">Loading map...</div>
    </div>
  ),
});

export default function DistributorsPage() {
  const [selectedDistributor, setSelectedDistributor] = useState<Distributor | null>(null);
  const [selectedRegionName, setSelectedRegionName] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const t = useTranslations("distributors");
  const tc = useTranslations("common");

  const handleDistributorSelect = (distributor: Distributor) => {
    setSelectedDistributor(distributor);
    setSelectedRegionName(distributor.region);
    setSelectedRegion(distributor.regionIds[0]);
  };

  const handleDistributorCardClick = (distributor: Distributor) => {
    setSelectedDistributor(distributor);
    setSelectedRegionName(distributor.region);
    setSelectedRegion(distributor.regionIds[0]);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">
              {t("title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur-sm p-6 shadow-lg shadow-black/5"
            >
              <div className="mb-4 flex items-center gap-2">
                <Map className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">
                  {t("mapTitle")}
                </h2>
              </div>
              <GreeceLeafletMap
                onDistributorSelect={handleDistributorSelect}
                selectedDistributorId={selectedDistributor?.id}
              />
            </motion.div>

            {/* Selected Distributor Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence mode="wait">
                {selectedDistributor ? (
                  <motion.div
                    key={selectedDistributor.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border-primary/30 bg-white/60 backdrop-blur-sm shadow-xl shadow-primary/10">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="mb-1 text-sm font-medium text-primary">
                              {selectedDistributor.region}
                            </p>
                            <CardTitle className="text-2xl">{selectedDistributor.areas}</CardTitle>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                              setSelectedDistributor(null);
                              setSelectedRegion(null);
                            }}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Company if exists */}
                        {selectedDistributor.company && (
                          <div className="flex items-center gap-3 rounded-lg bg-primary/5 p-3">
                            <Building2 className="h-5 w-5 text-primary" />
                            <span className="font-medium text-foreground">
                              {selectedDistributor.company}
                            </span>
                          </div>
                        )}

                        {/* Contacts */}
                        <div className="space-y-3">
                          <h3 className="font-semibold text-foreground">{t("contact")}</h3>
                          {selectedDistributor.contacts.map((contact, index) => (
                            <div
                              key={index}
                              className="rounded-lg border border-border p-4 transition-colors hover:border-primary/50"
                            >
                              {contact.name && (
                                <div className="mb-2 flex items-center gap-2">
                                  <User className="h-4 w-4 text-primary" />
                                  <span className="font-medium text-foreground">{contact.name}</span>
                                </div>
                              )}
                              {contact.role && (
                                <p className="mb-2 text-sm text-muted-foreground">{contact.role}</p>
                              )}
                              {contact.phone && (
                                <a
                                  href={`tel:+30${contact.phone.replace(/\s/g, "")}`}
                                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                                >
                                  <Phone className="h-4 w-4" />
                                  {contact.phone}
                                </a>
                              )}
                            </div>
                          ))}
                        </div>

                        <Button className="w-full" asChild>
                          <a href="tel:+302103612754">
                            <Phone className="mr-2 h-4 w-4" />
                            {t("callComerco")}
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-full min-h-[400px] items-center justify-center rounded-2xl border-2 border-dashed border-primary/20 bg-white/40 backdrop-blur-sm p-8"
                  >
                    <div className="text-center">
                      <MapPin className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
                      <h3 className="mb-2 text-lg font-semibold text-foreground">
                        {t("selectRegion")}
                      </h3>
                      <p className="text-muted-foreground">
                        {t("selectRegionDesc")}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Distributors Grid */}
      <section className="bg-gradient-to-b from-muted/20 via-muted/40 to-muted/20 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="mb-2 text-2xl font-bold text-foreground lg:text-3xl">
              {t("allPartners")}
            </h2>
            <p className="text-muted-foreground">
              {t("teamCoversGreece")}
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {distributors.map((distributor, index) => (
              <motion.div
                key={distributor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="h-full"
              >
                <Card
                  className={`flex h-full cursor-pointer flex-col border-white/40 bg-white/60 backdrop-blur-sm shadow-lg shadow-black/5 transition-all duration-300 hover:bg-white/80 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 ${
                    selectedDistributor?.id === distributor.id ? "border-primary bg-white/80" : ""
                  }`}
                  onClick={() => handleDistributorCardClick(distributor)}
                >
                  <CardContent className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <MapPin className="h-5 w-5 shrink-0 text-primary" />
                      <h3 className="font-semibold text-foreground">{distributor.region}</h3>
                    </div>
                    <p className="mb-4 text-sm text-muted-foreground">{distributor.areas}</p>
                    {distributor.company && (
                      <p className="mb-3 text-sm font-medium text-primary">{distributor.company}</p>
                    )}
                    <div className="mt-auto space-y-2">
                      {distributor.contacts.map((contact, i) => (
                        <div key={i} className="text-sm">
                          {contact.name && (
                            <p className="text-muted-foreground">{contact.name}</p>
                          )}
                          {contact.phone && (
                            <a
                              href={`tel:+30${contact.phone.replace(/\s/g, "")}`}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 text-primary hover:underline"
                            >
                              <Phone className="h-3 w-3" />
                              {contact.phone}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/90 p-8 text-center shadow-2xl shadow-primary/25 ring-1 ring-white/10 lg:p-12"
          >
            <h2 className="mb-4 text-2xl font-bold text-primary-foreground lg:text-3xl">
              {t("notFoundTitle")}
            </h2>
            <p className="mb-6 text-primary-foreground/90">
              {t("notFoundDesc")}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="secondary" asChild>
                <a href="tel:+302103612754">
                  <Phone className="mr-2 h-4 w-4" />
                  210 361 2754
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
