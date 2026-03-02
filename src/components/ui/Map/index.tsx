'use client';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./map'), {
  ssr: false,
});

export default function Page( props: { marker: string, position: {x: number, y: number} }) {
  return <Map marker={props.marker} position={props.position} />;
}
