// import { useEffect, useRef } from "react";
// import * as THREE from "three";

// const ThreeBackground = () => {
//   const mountRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000,
//     );
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     if (mountRef.current) {
//       mountRef.current?.appendChild(renderer.domElement);
//     }
//     camera.position.z = 5;

//     //Create dense white stars for the background
//     const starGeometry = new THREE.BufferGeometry();
//     const starCount = 700;
//     const starPositions = new Float32Array(starCount * 3);
//     for (let i = 0; i < starCount * 3; i++) {
//       starPositions[i] = (Math.random() - 0.5) * 100; //Spread stars over a larger area
//     }
//     starGeometry.setAttribute(
//       "position",
//       new THREE.BufferAttribute(starPositions, 3),
//     );
//     const starMaterial = new THREE.PointsMaterial({
//       color: 0xffffff,
//       size: 0.03,
//       transparent: true,
//       opacity: 0.7,
//     });
//     const starField = new THREE.Points(starGeometry, starMaterial);
//     scene.add(starField);

//     //Make stars move or interact with the mouse (parallex effect)
//     const handleMouseMove = (event: { clientX: number; clientY: number }) => {
//       const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
//       const mouseY = (event.clientY / window.innerHeight) * 2 + 1;
//       starField.rotation.x += mouseY * 0.01;
//       starField.rotation.y += mouseX * 0.01;
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     //Handle window resize for responsiveness
//     const handleResize = () => {
//       const width = window.innerWidth;
//       const height = window.innerHeight;
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     };

//     window.addEventListener("resize", handleResize);

//     //Render loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       // starField.rotation.x += 0.001; //Slow rotation for movement
//       // starField.rotation.y += 0.001;
//       starField.rotation.x += 0.0001;
//       starField.rotation.y += 0.0001;
//       renderer.render(scene, camera);
//     };

//     animate();
//   }, []);

//   return <div ref={mountRef} className=" fixed inset-0 -z-1 w-full h-full" />;
// };

// export default ThreeBackground;

"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.setClearColor(0x000000, 1);

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // renderer.setSize(window.innerWidth, window.innerHeight);

    // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    mountRef.current?.appendChild(renderer.domElement);

    camera.position.z = 5;

    const starGeometry = new THREE.BufferGeometry();

    const isMobile = window.innerWidth < 768;

    const starCount = isMobile ? 500 : 1500;

    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 100;
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3),
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: isMobile ? 0.06 : 0.1,
    });

    const starField = new THREE.Points(starGeometry, starMaterial);

    scene.add(starField);

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(width, height);

      camera.aspect = width / height;

      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      requestAnimationFrame(animate);

      starField.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);

      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();

      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10 h-full w-full overflow-hidden"
    />
  );
};

export default ThreeBackground;
