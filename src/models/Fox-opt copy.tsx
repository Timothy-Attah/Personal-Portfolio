'use client';

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import * as THREE from "three";

// type ActionName = 'hit' | 'idle' | 'walk' | 'walk.left'


interface IFoxProps {
  currentAnimation: string;
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
}

type GraphResult = {
  nodes: {
    Object_7: THREE.SkinnedMesh;
    Object_8: THREE.SkinnedMesh;
    Object_9: THREE.SkinnedMesh;
    Object_10: THREE.SkinnedMesh;
    Object_11: THREE.SkinnedMesh;
    GLTF_created_0_rootJoint: THREE.Bone;
  };
  materials: {
    ["Material.012"]: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["Material.016"]: THREE.MeshStandardMaterial;
    ["Material.017"]: THREE.MeshStandardMaterial;
  };
};

const Fox = ({ currentAnimation, ...props }:IFoxProps) => {
  const group = React.useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/assets/3d/fox-opt.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone) as unknown as GraphResult;

  const { actions } = useAnimations(animations, group);

  React.useEffect(() => {
    actions[currentAnimation]?.reset().fadeIn(0.5).play();

    return () => {
      actions[currentAnimation]?.fadeOut(0.5);
    };
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature002_27">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <group name="Cube002_26" />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials["Material.012"]}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials["Material.013"]}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials["Material.014"]}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials["Material.016"]}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials["Material.017"]}
                    skeleton={nodes.Object_11.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/3d/fox-opt.glb");

export default Fox;
