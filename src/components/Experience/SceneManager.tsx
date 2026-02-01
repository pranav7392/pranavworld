import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useLayoutEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Float, Stars, Environment, Text, useScroll, PresentationControls } from '@react-three/drei';
import HeroScene from './scenes/HeroScene';
import OriginScene from './scenes/OriginScene';
import SkillsScene from './scenes/SkillsScene';
import ProjectsScene from './scenes/ProjectsScene';
import FutureScene from './scenes/FutureScene';
import CTAScene from './scenes/CTAScene';

gsap.registerPlugin(ScrollTrigger);

export default function SceneManager() {
  const { camera, scene } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for camera movement
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#overlay-container',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      // Define camera path
      tl.to(camera.position, { z: 2, y: 0.5, x: 0, duration: 2, ease: "none" }) // Hero to Origin
        .to(camera.position, { z: -5, y: -0.5, x: 2, duration: 2, ease: "none" }) // Origin to Skills
        .to(camera.position, { z: -15, y: 0, x: -2, duration: 2, ease: "none" }) // Skills to Projects
        .to(camera.position, { z: -25, y: 1, x: 0, duration: 2, ease: "none" }) // Projects to Future
        .to(camera.position, { z: -35, y: 0, x: 0, duration: 2, ease: "none" }); // Future to CTA

      // Scene transitions
      tl.to(scene.fog, { density: 0.05, duration: 1 }, 0);
    });

    return () => ctx.revert();
  }, [camera, scene]);

  useFrame((state) => {
    // Subtle parallax with mouse
    const x = state.mouse.x * 0.2;
    const y = state.mouse.y * 0.2;
    camera.position.x += (x - camera.position.x) * 0.05;
    camera.position.y += (y - camera.position.y) * 0.05;
    camera.lookAt(0, 0, camera.position.z - 5);
  });

  return (
    <>
      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 5, 45]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Environment preset="city" />

      <group ref={groupRef}>
        <HeroScene position={[0, 0, 0]} />
        <OriginScene position={[0, 0, -5]} />
        <SkillsScene position={[0, 0, -15]} />
        <ProjectsScene position={[0, 0, -25]} />
        <FutureScene position={[0, 0, -35]} />
        <CTAScene position={[0, 0, -45]} />
      </group>
    </>
  );
}
