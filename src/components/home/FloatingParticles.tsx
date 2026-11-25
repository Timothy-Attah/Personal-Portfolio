"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";
import * as random from "maath/random";

const FloatingParticles = () => {
  const sphere = useMemo(() => {
    return new Float32Array(
      random.inSphere(new Float32Array(2000 * 3), {
        radius: 20,
      }),
    );
  }, []);

  return (
    <Points positions={sphere} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

export default FloatingParticles;
