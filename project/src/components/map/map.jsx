import React from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import offersPropTypes from '../offers/offers.prop';

export default function Map({offers}) {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
    });
    const zoom = 12;
    const map = leaflet.map(mapRef.current, {
      center: city,
      zoom: zoom,
      zoomControl: false,
      marker: true,
    });
    map.setView(city, zoom);
    leaflet
      .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      })
      .addTo(map);

    offers.forEach((offer) => {
      leaflet
        .marker([offer.location.latitude, offer.location.longitude], {icon})
        .addTo(map);
    });
  });

  return <section className="cities__map map" id="map" ref={mapRef} style={{height:'100%'}} />;
}

Map.propTypes = {
  offers: offersPropTypes,
};
