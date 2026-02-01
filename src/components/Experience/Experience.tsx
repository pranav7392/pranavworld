import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { ScrollControls, Scroll } from '@react-three/drei';
import SceneManager from './SceneManager';
import Overlay from './Overlay';

export default function Experience() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas
          shadows
          camera={{ position: [0, 0, 5], fov: 35 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <SceneManager />
          </Suspense>
        </Canvas>
      </div>
      <Overlay />
    </>
  );
}
