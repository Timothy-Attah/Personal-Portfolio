import dynamic from "next/dynamic";
import { Suspense, useState } from "react";

import { Loader,  } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  PerformanceMonitor,
  AdaptiveDpr,
  AdaptiveEvents,
} from "@react-three/drei";
import Fox from "./Fox-opt";

const Bird = dynamic(() => import("./Bird-opt"), { ssr: false });
// const OtherModel = dynamic(() => import("./OtherModel"), { ssr: false });

export default function Hero3D() {
  const [dpr, setDpr] = useState(2);

  return (
    <>
      <Canvas
        shadows={false} 
        gl={{ antialias: false, powerPreference: "low-power" }}
      >
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <PerformanceMonitor onDecline={() => console.log("lag detected")} />
        <Suspense fallback={null}>
          <Bird />
          <Fox currentAnimation="idle" />
          {/* other 3 */}
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
