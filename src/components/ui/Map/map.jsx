"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "react-leaflet";

export default function Map() {
  return (
    <>
      <MapContainer
        className="map-container w-[100%] h-[100%] lg:w-[250px] h-[250px] m-4"
        center={[50.893123, 34.84068]}
        zoom={17}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[50.893123, 34.84068]}
           icon={L.divIcon({
            iconSize: [36, 36],
            iconAnchor: [18, 36],
            className: "mymarker",
            html: "<img src='/marker-icon.png' />",
          })}
        >
          <Popup>
            Кабінет ЕТ-504.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
