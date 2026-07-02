'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Loader2 } from 'lucide-react';

interface Suggestion {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
  address?: {
    road?: string;
    house_number?: string;
    suburb?: string;
    city?: string;
  };
}

interface AddressAutocompleteProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onSelectCoordinate: (coords: { lat: number; lng: number } | null) => void;
  required?: boolean;
  className?: string;
}

export default function AddressAutocomplete({
  id,
  placeholder,
  value,
  onChange,
  onSelectCoordinate,
  required = false,
  className = '',
}: AddressAutocompleteProps) {
  const [query, setQuery] = useState(value);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  // Sync internal state with external value changes (e.g. reset)
  useEffect(() => {
    setQuery(value);
  }, [value]);

  // Click outside listener to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchAddresses = async (searchQuery: string) => {
    if (searchQuery.trim().length < 3) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    try {
      // Bounding box for Mar del Plata: viewbox=-57.7000,-38.1500,-57.4000,-37.8500&bounded=1
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        searchQuery
      )}&viewbox=-57.7000,-38.1500,-57.4000,-37.8500&bounded=1&addressdetails=1&limit=5`;

      const res = await fetch(url, {
        headers: {
          'Accept-Language': 'es',
        },
      });
      const data = await res.json();
      setSuggestions(data || []);
      setIsOpen(true);
    } catch (error) {
      console.error('Error fetching addresses from Nominatim:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    onChange(val);

    if (val.trim() === '') {
      onSelectCoordinate(null);
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      searchAddresses(val);
    }, 400); // 400ms debounce to comply with OSM usage guidelines
  };

  const handleSelect = (suggestion: Suggestion) => {
    // Format a cleaner display name for user experience
    let displayName = suggestion.display_name;
    
    // Attempt to make a shorter name (Street Number, Suburb, City)
    const addr = suggestion.address;
    if (addr && (addr.road || addr.city)) {
      const parts = [
        addr.road ? `${addr.road}${addr.house_number ? ' ' + addr.house_number : ''}` : '',
        addr.suburb || '',
        addr.city || '',
      ].filter(Boolean);
      if (parts.length > 0) {
        displayName = parts.join(', ');
      }
    }

    setQuery(displayName);
    onChange(displayName);
    onSelectCoordinate({
      lat: parseFloat(suggestion.lat),
      lng: parseFloat(suggestion.lon),
    });
    setIsOpen(false);
    setSuggestions([]);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <input
          type="text"
          id={id}
          required={required}
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
          className={className}
          autoComplete="off"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-slate-400">
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Search className="h-4 w-4" />
          )}
        </div>
      </div>

      {isOpen && suggestions.length > 0 && (
        <ul className="absolute z-50 w-full mt-1 bg-[#0a0d16] border border-white/10 rounded-xl max-h-60 overflow-y-auto shadow-2xl text-slate-200 divide-y divide-white/5">
          {suggestions.map((s) => (
            <li
              key={s.place_id}
              onClick={() => handleSelect(s)}
              className="px-4 py-3 hover:bg-white/5 cursor-pointer flex items-start gap-3 transition-colors text-sm"
            >
              <MapPin className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">
                  {s.address?.road
                    ? `${s.address.road}${s.address.house_number ? ' ' + s.address.house_number : ''}`
                    : s.display_name.split(',')[0]}
                </p>
                <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                  {s.display_name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
