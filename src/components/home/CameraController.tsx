"use client";

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface Props {
  currentStage: number;
}

const CameraController = ({ currentStage }: Props) => {
  const { camera } = useThree();

  useFrame(() => {
    const positions: Record<number, THREE.Vector3> = {
      // 1: new THREE.Vector3(0, 0, 20),
      // 2: new THREE.Vector3(2, 1, 18),
      // 3: new THREE.Vector3(-2, 2, 17),
      // 4: new THREE.Vector3(0, 1, 15),

      1: new THREE.Vector3(0, 0, 10),
      2: new THREE.Vector3(1, 1, 9),
      3: new THREE.Vector3(-1, 1, 9),
      4: new THREE.Vector3(0, 1, 8),
    };

    camera.position.lerp(positions[currentStage], 0.03);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

export default CameraController;
