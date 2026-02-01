import { ThreeElement } from '@react-three/fiber'
import * as THREE from 'three'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: ThreeElement<typeof THREE.Group>
      mesh: ThreeElement<typeof THREE.Mesh>
      ambientLight: ThreeElement<typeof THREE.AmbientLight>
      pointLight: ThreeElement<typeof THREE.PointLight>
      directionalLight: ThreeElement<typeof THREE.DirectionalLight>
      fog: ThreeElement<typeof THREE.Fog>
      color: ThreeElement<typeof THREE.Color>
      bufferGeometry: ThreeElement<typeof THREE.BufferGeometry>
      bufferAttribute: ThreeElement<typeof THREE.BufferAttribute>
      planeGeometry: ThreeElement<typeof THREE.PlaneGeometry>
      boxGeometry: ThreeElement<typeof THREE.BoxGeometry>
      sphereGeometry: ThreeElement<typeof THREE.SphereGeometry>
      torusGeometry: ThreeElement<typeof THREE.TorusGeometry>
      torusKnotGeometry: ThreeElement<typeof THREE.TorusKnotGeometry>
      icosahedronGeometry: ThreeElement<typeof THREE.IcosahedronGeometry>
      meshStandardMaterial: ThreeElement<typeof THREE.MeshStandardMaterial>
      meshBasicMaterial: ThreeElement<typeof THREE.MeshBasicMaterial>
    }
  }
}
