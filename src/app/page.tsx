"use client";
// import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Loader from "@/components/Loader";
// import Island from "@/models/Island-opt";
// import Sky from "@/models/Sky-opt";
// import Plane from "@/models/Plane-opt";
// import Bird from "@/models/Bird-opt";
import HomeInfo from "@/components/home/HomeInfo";
import CameraController from "@/components/home/CameraController";
import FloatingParticles from "@/components/home/FloatingParticles";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false },
);
const Island = dynamic(() => import("@/models/Island-opt"), {
  ssr: false,
});
const Sky = dynamic(() => import("@/models/Sky-opt"), {
  ssr: false,
});
const Plane = dynamic(() => import("@/models/Plane-opt"), {
  ssr: false,
});
const Bird = dynamic(() => import("@/models/Bird-opt"), {
  ssr: false,
});

const Home = () => {
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const [islandScale, setIslandScale] = useState<[number, number, number]>([
    1, 1, 1,
  ]);

  const [islandPosition, setIslandPosition] = useState<
    [number, number, number]
  >([0, -6.5, -43]);

  const [islandRotation, setIslandRotation] = useState<
    [number, number, number]
  >([0.1, 0.5, 0]);

  const [planeScale, setPlaneScale] = useState<[number, number, number]>([
    1, 1, 1,
  ]);

  const [planePosition, setPlanePosition] = useState<[number, number, number]>([
    0, 0, 0,
  ]);

  const handlePointerDown = (e: any) => {
    setIsRotating(true);
    setHasInteracted(true);

    const clientX = e.touches?.[0]?.clientX ?? e.clientX;

    lastX.current = clientX;
  };

  const handlePointerUp = () => {
    setIsRotating(false);
  };

  const handlePointerMove = (e: any) => {
    if (isRotating) {
      const clientX = e.touches?.[0]?.clientX ?? e.clientX;

      const delta = (clientX - lastX.current) * 0.005;

      setIslandRotation((prev: any) => [prev[0], prev[1] + delta, prev[2]]);

      lastX.current = clientX;

      rotationSpeed.current = delta * 0.5;
    }
  };

  useEffect(() => {
    const adjustIslandForScreenSize = () => {
      if (window.innerWidth < 768) {
        setIslandScale([0.9, 0.9, 0.9]);
      } else {
        setIslandScale([1, 1, 1]);
      }

      setIslandPosition([0, -6.5, -43]);
      // setIslandRotation([0.1, 4.7, 0]);
      setIslandRotation([0.1, 0.5, 0]);
    };

    adjustIslandForScreenSize();

    window.addEventListener("resize", adjustIslandForScreenSize);

    return () => {
      window.removeEventListener("resize", adjustIslandForScreenSize);
    };
  }, []);

  useEffect(() => {
    const adjustPlaneForScreenSize = () => {
      if (window.innerWidth > 768) {
        setPlaneScale([1.5, 1.5, 1.5]);
        setPlanePosition([0, -1.5, 0]);
      } else if (window.innerWidth < 768) {
        setPlaneScale([1.5, 1.5, 1.5]);
        setPlanePosition([0, -1.5, 0]);
      } else {
        setPlaneScale([3, 3, 3]);
        setPlanePosition([0, -4, -4]);
      }
    };

    adjustPlaneForScreenSize();

    window.addEventListener("resize", adjustPlaneForScreenSize);

    return () => {
      window.removeEventListener("resize", adjustPlaneForScreenSize);
    };
  }, []);

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      if (!isRotating) {
        rotationSpeed.current *= 0.95;

        if (Math.abs(rotationSpeed.current) < 0.001) {
          rotationSpeed.current = 0;
        }

        setIslandRotation((prev: any) => [
          prev[0],
          prev[1] + rotationSpeed.current,
          prev[2],
        ]);
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [isRotating]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isRotating) {
        rotationSpeed.current = 0.002;
      }
    }, 4000);

    return () => clearTimeout(timeout);
  }, [isRotating]);

  // useEffect(() => {
  //   if (!audioRef.current) return;

  //   if (soundEnabled) {
  //     audioRef.current.play();
  //   } else {
  //     audioRef.current.pause();
  //   }
  // }, [soundEnabled]);

  return (
    <section className="w-full h-screen relative">
      <Suspense fallback={<Loader />}>
        <div className=" absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>
      </Suspense>
      {!hasInteracted && (
        <div className="absolute  bottom-14 left-0 right-0 z-10 flex justify-center">
          <p className="text-white text-sm animate-pulse bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
            Drag to explore
          </p>
        </div>
      )}

      <div className="absolute right-8 top-1/2 z-20 flex flex-col gap-4">
        {[1, 2, 3, 4].map((stage) => (
          <div
            key={stage}
            className={`w-3 h-3 rounded-full transition-all ${
              currentStage === stage
                ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                : "bg-white/30"
            }`}
          />
        ))}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000, fov: 53 }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerUp}
        dpr={[1, 1.5]}
      >
        <CameraController currentStage={currentStage} />
        <FloatingParticles />
        <EffectComposer>
          {
            <Bloom
              intensity={0.18}
              luminanceThreshold={0.6}
              luminanceSmoothing={0.2}
            />
          }
        </EffectComposer>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[5, 5, 5]} intensity={3} />
          <ambientLight intensity={0.9} />
          <hemisphereLight
            color="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Suspense fallback={null}>
            <Bird />
          </Suspense>

          <Suspense fallback={null}>
            <Sky isRotating={isRotating} />
          </Suspense>
          <Suspense fallback={null}>
            <Island
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              setCurrentStage={setCurrentStage}
            />
          </Suspense>

          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
