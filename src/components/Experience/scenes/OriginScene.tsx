import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Box, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function OriginScene({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Box args={[1, 1, 1]} position={[-2, 0, 0]}>
          <MeshWobbleMaterial color="#f59e0b" factor={0.6} speed={1} />
        </Box>
        <Box args={[0.8, 0.8, 0.8]} position={[2, 1, -1]}>
          <MeshWobbleMaterial color="#ef4444" factor={0.4} speed={1.2} />
        </Box>
        <Box args={[1.2, 1.2, 1.2]} position={[0, -1.5, 1]}>
          <MeshWobbleMaterial color="#10b981" factor={0.5} speed={0.8} />
        </Box>
      </Float>
    </group>
  );
}
