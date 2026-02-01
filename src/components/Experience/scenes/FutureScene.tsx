import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sparkles, Float } from '@react-three/drei';
import * as THREE from 'three';

export default function FutureScene({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <Sparkles count={200} scale={[10, 10, 10]} size={2} speed={0.5} color="#ffffff" />
      <Float speed={5} rotationIntensity={0.1} floatIntensity={10}>
        <mesh position={[0, 0, -10]}>
          <planeGeometry args={[20, 20]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
        </mesh>
      </Float>
      
      {/* Light at the end of the tunnel */}
      <pointLight position={[0, 0, -15]} intensity={5} color="#3b82f6" />
    </group>
  );
}
