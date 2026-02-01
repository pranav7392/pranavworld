import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, TorusKnot, MeshPortalMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function ProjectsScene({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <PortalBox position={[-3, 0, 0]} color="#3b82f6" />
        <PortalBox position={[0, 2, -2]} color="#8b5cf6" />
        <PortalBox position={[3, -1, 1]} color="#ec4899" />
      </Float>
    </group>
  );
}

function PortalBox({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusKnotGeometry args={[0.8, 0.2, 128, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        roughness={0}
        metalness={1}
      />
    </mesh>
  );
}
