"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";

interface IFoxProps {
  currentAnimation: string;
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
}

useGLTF.preload("/assets/3d/fox-opt.glb");

const Fox = ({ currentAnimation, scale = [1, 1, 1], ...props }: IFoxProps) => {
  const group = useRef<THREE.Group>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { scene, animations } = useGLTF("/assets/3d/fox-opt.glb");
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    setMounted(true);
    setIsMobile(/Android|iPhone|iPad/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    const action = actions[currentAnimation];
    if (action) {
      action.reset().fadeIn(0.5).play();
      action.setLoop(THREE.LoopRepeat, Infinity);
    }
    return () => {
      action?.fadeOut(0.5).stop();
    };
  }, [actions, currentAnimation]);

  useEffect(() => {
    return () => {
      clone.traverse((child) => {
        if ((child as THREE.Mesh).geometry)
          (child as THREE.Mesh).geometry.dispose();
        if ((child as THREE.Mesh).material) {
          const material = (child as THREE.Mesh).material;
          Array.isArray(material)
            ? material.forEach((m) => m.dispose())
            : material.dispose();
        }
      });
    };
  }, [clone]);

  if (!mounted) return null;

  // FIX: cast to tuple so TS is happy
  const mobileScale: [number, number, number] = [0.8, 0.8, 0.8];
  const finalScale: [number, number, number] = isMobile ? mobileScale : scale;

  return (
    <group ref={group} {...props} scale={finalScale} dispose={null}>
      <primitive object={clone} />
    </group>
  );
};

export default Fox;
