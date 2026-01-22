"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { distributors, type Distributor } from "@/data/distributors";
import { Phone, MapPin, Building2 } from "lucide-react";
import "leaflet/dist/leaflet.css";

// Fix for default marker icon in Next.js
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface GreeceLeafletMapProps {
  onDistributorSelect?: (distributor: Distributor) => void;
  selectedDistributorId?: string | null;
}

export default function GreeceLeafletMap({
  onDistributorSelect,
  selectedDistributorId,
}: GreeceLeafletMapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Greece center coordinates
  const greeceCenter: [number, number] = [39.0742, 21.8243];
  const defaultZoom = 6;

  if (!mounted) {
    return (
      <div className="flex h-[500px] w-full items-center justify-center rounded-xl bg-muted">
        <div className="text-muted-foreground">Φόρτωση χάρτη...</div>
      </div>
    );
  }

  return (
    <MapContainer
      center={greeceCenter}
      zoom={defaultZoom}
      className="h-[500px] w-full rounded-xl"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {distributors.map((distributor) => (
        <Marker
          key={distributor.id}
          position={[distributor.coordinates.lat, distributor.coordinates.lng]}
          icon={customIcon}
          eventHandlers={{
            click: () => {
              if (onDistributorSelect) {
                onDistributorSelect(distributor);
              }
            },
          }}
        >
          <Popup>
            <div className="min-w-[200px] p-1">
              <div className="mb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-foreground">{distributor.region}</h3>
              </div>
              <p className="mb-2 text-sm text-muted-foreground">{distributor.areas}</p>
              {distributor.company && (
                <div className="mb-2 flex items-center gap-2 text-sm">
                  <Building2 className="h-4 w-4 text-primary" />
                  <span className="font-medium">{distributor.company}</span>
                </div>
              )}
              <div className="space-y-1 border-t pt-2">
                {distributor.contacts.slice(0, 2).map((contact, i) => (
                  <div key={i} className="text-sm">
                    {contact.name && <p className="font-medium">{contact.name}</p>}
                    {contact.phone && (
                      <a
                        href={`tel:+30${contact.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-1 text-primary hover:underline"
                      >
                        <Phone className="h-3 w-3" />
                        {contact.phone}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
