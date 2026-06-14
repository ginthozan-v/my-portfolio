import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei'
import { useRef, Suspense } from 'react'
import * as THREE from 'three'

function Blob() {
  const mesh = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  useFrame((state) => {
    const t = state.clock.elapsedTime
    mouse.current.x += (state.pointer.x - mouse.current.x) * 0.05
    mouse.current.y += (state.pointer.y - mouse.current.y) * 0.05
    if (mesh.current) {
      mesh.current.rotation.y = t * 0.15 + mouse.current.x * 0.5
      mesh.current.rotation.x = mouse.current.y * 0.4
    }
  })

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={mesh} scale={2.1}>
        <icosahedronGeometry args={[1, 64]} />
        <MeshDistortMaterial
          color="#d8ff3e"
          envMapIntensity={1.1}
          roughness={0.15}
          metalness={0.65}
          distort={0.42}
          speed={1.6}
        />
      </mesh>
    </Float>
  )
}

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 6], fov: 40 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, -2, 2]} intensity={0.6} color="#ff5e3a" />
        <Blob />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}
