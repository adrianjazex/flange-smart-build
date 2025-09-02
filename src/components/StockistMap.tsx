import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin } from 'lucide-react';

interface Stockist {
  name: string;
  location: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  coordinates: [number, number]; // [lng, lat]
  postcode: string;
  suburb: string;
}

interface StockistMapProps {
  stockists: Stockist[];
}

const StockistMap: React.FC<StockistMapProps> = ({ stockists }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [133.7751, -25.2744], // Center of Australia
      zoom: 4
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for each stockist
    stockists.forEach((stockist) => {
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <div class="p-2">
            <h3 class="font-bold text-sm mb-1">${stockist.name}</h3>
            <p class="text-xs text-gray-600 mb-1">${stockist.address}</p>
            <p class="text-xs"><strong>Phone:</strong> ${stockist.phone}</p>
            <p class="text-xs"><strong>Email:</strong> ${stockist.email}</p>
          </div>
        `);

      const marker = new mapboxgl.Marker({ color: '#dc2626' })
        .setLngLat(stockist.coordinates)
        .setPopup(popup)
        .addTo(map.current!);
    });
  };

  const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();
    if (!query || !map.current) return;

    // Find stockist by postcode or suburb
    const matchedStockist = stockists.find(stockist => 
      stockist.postcode.toLowerCase().includes(query) ||
      stockist.suburb.toLowerCase().includes(query) ||
      stockist.location.toLowerCase().includes(query)
    );

    if (matchedStockist) {
      map.current.flyTo({
        center: matchedStockist.coordinates,
        zoom: 12,
        duration: 2000
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    if (mapboxToken) {
      initializeMap();
      setShowTokenInput(false);
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken, stockists]);

  if (showTokenInput) {
    return (
      <div className="bg-background rounded-lg p-6 border">
        <div className="text-center mb-4">
          <MapPin className="h-12 w-12 text-accent mx-auto mb-2" />
          <h3 className="text-lg font-semibold mb-2">Interactive Stockist Map</h3>
          <p className="text-sm text-muted-foreground mb-4">
            To view the interactive map, please enter your Mapbox public token.
            You can get one free at{' '}
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              mapbox.com
            </a>
          </p>
        </div>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter your Mapbox public token"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1"
          />
          <Button 
            onClick={() => mapboxToken && initializeMap()}
            disabled={!mapboxToken}
          >
            Load Map
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by suburb or postcode..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="pl-10"
          />
        </div>
        <Button onClick={handleSearch} disabled={!searchQuery.trim()}>
          <Search className="h-4 w-4" />
        </Button>
      </div>
      
      <div 
        ref={mapContainer} 
        className="w-full h-96 rounded-lg shadow-lg border"
        style={{ minHeight: '400px' }}
      />
    </div>
  );
};

export default StockistMap;