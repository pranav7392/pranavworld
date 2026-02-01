import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function CTAScene({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= 0.002;
    }
  });

  return (
    <group position={position}>
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <MeshDistortMaterial
          color="#050505"
          attach="material"
          distort={0.2}
          speed={1}
          roughness={0.5}
          metalness={0.5}
        />
      </Sphere>
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 5, 5]} intensity={1} color="#ffffff" />
    </group>
  );
}
