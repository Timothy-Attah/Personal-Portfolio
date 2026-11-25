'use client';

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface IPlaneProps {
  isRotating: Boolean;
  position: number[] | any;
  scale: number[] | any;
  rotation: number[] | any;
}

const Plane = ({ isRotating, ...props }: IPlaneProps) => {
  const ref = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF("/assets/3d/plane-opt.glb");
  const { actions } = useAnimations(animations, ref) as any;

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y =
        props.position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
      ref.current.rotation.z = THREE.MathUtils.lerp(
        ref.current.rotation.z,
        isRotating ? 0.1 : 0,
        0.1,
      );
    }
  });

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};


export default Plane;
