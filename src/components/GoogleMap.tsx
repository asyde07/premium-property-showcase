import { useEffect, useRef, useState } from "react";

// Carrega a Maps JavaScript API uma única vez, de forma assíncrona.
let mapsPromise: Promise<void> | null = null;

function loadMaps(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (mapsPromise) return mapsPromise;

  const key = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY;
  const channel = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID;

  mapsPromise = new Promise<void>((resolve, reject) => {
    if ((window as any).google?.maps) {
      resolve();
      return;
    }
    (window as any).__initMap = () => resolve();
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&loading=async&callback=__initMap&channel=${channel}`;
    script.async = true;
    script.onerror = () => reject(new Error("Falha ao carregar o Google Maps"));
    document.head.appendChild(script);
  });

  return mapsPromise;
}

export function GoogleMap({
  lat,
  lng,
  zoom = 14,
}: {
  lat: number;
  lng: number;
  zoom?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadMaps()
      .then(() => {
        if (cancelled || !ref.current) return;
        const g = (window as any).google;
        const map = new g.maps.Map(ref.current, {
          center: { lat, lng },
          zoom,
          disableDefaultUI: true,
          zoomControl: true,
          styles: [
            { elementType: "geometry", stylers: [{ color: "#f5f3ee" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#5b5b5b" }] },
            { featureType: "water", stylers: [{ color: "#cfe2dd" }] },
            { featureType: "poi", stylers: [{ visibility: "off" }] },
          ],
        });
        new g.maps.Marker({ position: { lat, lng }, map });
      })
      .catch(() => setError(true));
    return () => {
      cancelled = true;
    };
  }, [lat, lng, zoom]);

  if (error) {
    return (
      <div className="flex h-full min-h-[320px] items-center justify-center rounded-2xl bg-muted text-sm text-muted-foreground">
        Mapa indisponível no momento.
      </div>
    );
  }

  return <div ref={ref} className="h-full min-h-[320px] w-full rounded-2xl" />;
}
