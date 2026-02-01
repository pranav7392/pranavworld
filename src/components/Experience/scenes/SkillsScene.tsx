import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Points, PointMaterial, Grid } from '@react-three/drei';
import * as THREE from 'three';

export default function SkillsScene({ position }: { position: [number, number, number] }) {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
    }
  });

  // Generate random particles for AI metaphor
  const count = 1000;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <group position={position}>
      {/* Web Dev - Glowing Grid */}
      <Grid
        infiniteGrid
        fadeDistance={20}
        fadeStrength={5}
        sectionSize={1}
        sectionThickness={1.5}
        sectionColor="#3b82f6"
        cellSize={0.5}
        cellThickness={1}
        cellColor="#1e40af"
        position={[0, -2, 0]}
      />

      {/* AI - Neural Nodes */}
      <Points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Design - Morphing Geometry */}
      <mesh position={[3, 2, -2]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#ec4899" wireframe />
      </mesh>
    </group>
  );
}
