"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./map"), { ssr: false });

export default function Page(props: {
  marker: string;
  position: { x: number; y: number };
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {visible && <Map marker={props.marker} position={props.position} />}
    </div>
  );
}
