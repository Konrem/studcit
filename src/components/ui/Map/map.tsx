"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

export default function Map(props: {
  marker: string;
  markerAlt: string;
  attribution: string;
  position: { x: number; y: number };
}) {
  return (
    <>
      <MapContainer
        className="map-container h-[220px] w-full overflow-hidden rounded-xl"
        center={[props.position.y, props.position.x]}
        zoom={17}
        maxZoom={18}
        minZoom={14}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution={props.attribution}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[props.position.y, props.position.x]}
           icon={L.divIcon({
            iconSize: [36, 36],
            iconAnchor: [18, 36],
            className: "mymarker",
            html: `<img src="/marker-icon.png" alt="${props.markerAlt}" width="36" height="36" />`,
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
