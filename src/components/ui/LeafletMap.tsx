'use client';

import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet marker icons in Next.js
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

export default function LeafletMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const [pointA, setPointA] = useState<L.LatLng | null>(null);
  const [pointB, setPointB] = useState<L.LatLng | null>(null);
  const [distance, setDistance] = useState<number | null>(null);

  // Markers and line layers
  const markerAInstance = useRef<L.Marker | null>(null);
  const markerBInstance = useRef<L.Marker | null>(null);
  const polylineInstance = useRef<L.Polyline | null>(null);

  // Mar del Plata bounds
  const mdpCenter: L.LatLngExpression = [-38.0055, -57.5426];
  const southWest = L.latLng(-38.1500, -57.7000);
  const northEast = L.latLng(-37.8500, -57.4000);
  const bounds = L.latLngBounds(southWest, northEast);

  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return;

    // Initialize map
    const map = L.map(mapContainer.current, {
      center: mdpCenter,
      zoom: 13,
      minZoom: 12,
      maxZoom: 16,
      maxBounds: bounds,
      maxBoundsViscosity: 0.8,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    mapInstance.current = map;

    // Click handler
    map.on('click', (e: L.LeafletMouseEvent) => {
      const clickedLatLng = e.latlng;

      if (!pointA) {
        // Set Point A
        setPointA(clickedLatLng);
        const marker = L.marker(clickedLatLng, {
          icon: L.divIcon({
            html: `<div class="bg-emerald-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center border-2 border-white shadow-md">A</div>`,
            className: '',
            iconSize: [32, 32],
            iconAnchor: [16, 16],
          })
        }).addTo(map);
        markerAInstance.current = marker;
      } else if (!pointB) {
        // Set Point B
        setPointB(clickedLatLng);
        const marker = L.marker(clickedLatLng, {
          icon: L.divIcon({
            html: `<div class="bg-brand-yellow text-brand-blue font-bold rounded-full w-8 h-8 flex items-center justify-center border-2 border-white shadow-md">B</div>`,
            className: '',
            iconSize: [32, 32],
            iconAnchor: [16, 16],
          })
        }).addTo(map);
        markerBInstance.current = marker;

        // Calculate distance
        const distMeters = pointA.distanceTo(clickedLatLng);
        setDistance(distMeters);

        // Draw Polyline (Tailwind blue-600 color #2563eb)
        const line = L.polyline([pointA, clickedLatLng], {
          color: '#2563eb',
          weight: 4,
          dashArray: '8, 8',
        }).addTo(map);
        polylineInstance.current = line;
      }
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [pointA, pointB]);

  const handleReset = () => {
    if (mapInstance.current) {
      if (markerAInstance.current) mapInstance.current.removeLayer(markerAInstance.current);
      if (markerBInstance.current) mapInstance.current.removeLayer(markerBInstance.current);
      if (polylineInstance.current) mapInstance.current.removeLayer(polylineInstance.current);
    }
    markerAInstance.current = null;
    markerBInstance.current = null;
    polylineInstance.current = null;
    setPointA(null);
    setPointB(null);
    setDistance(null);
  };

  return (
    <div className="space-y-4">
      {/* Metrics Card */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-slate-50 border border-slate-100 p-4 rounded-2xl gap-4">
        <div className="flex flex-wrap gap-4 text-sm font-sans text-slate-600 w-full sm:w-auto">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
            <span>Punto A: {pointA ? `${pointA.lat.toFixed(4)}, ${pointA.lng.toFixed(4)}` : 'Sin marcar'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow inline-block" />
            <span>Punto B: {pointB ? `${pointB.lat.toFixed(4)}, ${pointB.lng.toFixed(4)}` : 'Sin marcar'}</span>
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0">
          {distance !== null && (
            <div className="text-slate-800">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-sans">
                Distancia Línea Recta
              </span>
              <span className="text-xl font-display font-bold text-brand-blue">
                {(distance / 1000).toFixed(2)} km
              </span>
            </div>
          )}
          
          <button
            onClick={handleReset}
            disabled={!pointA}
            className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-sans text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            Limpiar Mapa
          </button>
        </div>
      </div>

      {/* Map container */}
      <div className="relative border border-slate-100 rounded-3xl overflow-hidden shadow-inner bg-slate-100">
        <div ref={mapContainer} className="w-full h-[400px] z-10" />
        {!pointA && (
          <div className="absolute top-4 left-4 right-4 z-20 pointer-events-none flex justify-center">
            <span className="bg-slate-900/90 text-white font-sans text-xs px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
              Hacé clic en el mapa para marcar el Punto A de origen
            </span>
          </div>
        )}
        {pointA && !pointB && (
          <div className="absolute top-4 left-4 right-4 z-20 pointer-events-none flex justify-center">
            <span className="bg-slate-900/90 text-white font-sans text-xs px-4 py-2 rounded-full shadow-lg backdrop-blur-sm animate-pulse">
              Hacé clic en el mapa para marcar el Punto B de destino
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
