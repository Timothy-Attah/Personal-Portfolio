"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { a } from "@react-spring/three";
import * as THREE from "three";
import { SkeletonUtils } from "three-stdlib";

interface IslandProps {
  setCurrentStage: (stage: number) => void;
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
}

useGLTF.preload("./assets/3d/island-opt.glb");

const Island = ({
  setCurrentStage,
  rotation,
  scale,
  ...props
}: IslandProps) => {
  const islandRef = useRef<THREE.Group>(null!);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const frameCounter = useRef(0); // <- add this

  const { scene } = useGLTF("./assets/3d/island-opt.glb");
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  const currentStageRef = useRef(1);
  const lastRotation = useRef(0);

  useEffect(() => {
    setMounted(true);
    setIsMobile(/Android|iPhone|iPad/i.test(navigator.userAgent));
  }, []);

  const getStageFromRotation = (rotation: number) => {
    const normalizedRotation =
      ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    const section = (2 * Math.PI) / 4;
    if (normalizedRotation < section) return 1;
    if (normalizedRotation < section * 2) return 2;
    if (normalizedRotation < section * 3) return 3;
    return 4;
  };

  useFrame(() => {
    if (!mounted || !islandRef.current) return;

    frameCounter.current += 1; // <- count frames ourselves
    const throttle = isMobile ? 3 : 1; // run every 3rd frame on mobile

    if (frameCounter.current % throttle !== 0) return;

    const currentRotation = rotation[1];
    const rotationDifference = Math.abs(currentRotation - lastRotation.current);

    if (rotationDifference > 1.0) {
      const newStage = getStageFromRotation(currentRotation);
      if (newStage !== currentStageRef.current) {
        currentStageRef.current = newStage;
        setCurrentStage(newStage);
      }
      lastRotation.current = currentRotation;
    }
  });

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

  const mobileScale: [number, number, number] = [0.6, 0.6, 0.6];
  const finalScale: [number, number, number] = isMobile ? mobileScale : scale;

  return (
    <a.group ref={islandRef} {...props} scale={finalScale} dispose={null}>
      <primitive object={clone} />
    </a.group>
  );
};

export default Island;
