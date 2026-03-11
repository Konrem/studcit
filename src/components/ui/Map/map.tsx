"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

export default function Map(props: { marker: string, position: {x: number, y: number} }) {
  return (
    <>
      <MapContainer
        className="map-container w-full h-[200px] m-4"
        center={[props.position.y, props.position.x]}
        zoom={17}
        maxZoom={18}
        minZoom={14}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[props.position.y, props.position.x]}
           icon={L.divIcon({
            iconSize: [36, 36],
            iconAnchor: [18, 36],
            className: "mymarker",
            html: `<img src="/marker-icon.png" alt="Marker" width="36" height="36" />`,
          })}
        >
          <Popup>
            {props.marker}
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
