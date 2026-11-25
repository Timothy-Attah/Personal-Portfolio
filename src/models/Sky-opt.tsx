'use client';

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ISkyProps {
  isRotating: Boolean;
}

const Sky = ({ isRotating }: ISkyProps) => {
  const sky = useGLTF("/assets/3d/sky.glb");
  const skyRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta;
    }
  });
  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
