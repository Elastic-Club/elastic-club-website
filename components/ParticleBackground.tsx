'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, Grid } from '@react-three/drei'
import * as THREE from 'three'

interface RainParticle {
  x: number
  y: number
  z: number
  speed: number
}

interface NeuralDot {
  pos: THREE.Vector3
  target: THREE.Vector3
  velocity: THREE.Vector3
}

// --- 1. Rain and Splash System ---
function RainAndSplashes({ count = 400 }) {
  const rainRef = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const p: RainParticle[] = []
    for (let i = 0; i < count; i++) {
      p.push({
        x: (Math.random() - 0.5) * 40,
        y: Math.random() * 20 + 10,
        z: (Math.random() - 0.5) * 40,
        speed: 0.1 + Math.random() * 0.2,
      })
    }
    return p
  }, [count])

  const [rainPositions] = useMemo(() => [new Float32Array(count * 3)], [count])

  useFrame((state) => {
    if (!rainRef.current) return
    const pos = rainRef.current.geometry.attributes.position.array as Float32Array

    particles.forEach((p, i) => {
      p.y -= p.speed
      if (p.y < -5) {
        p.y = 20
      }
      pos[i * 3] = p.x
      pos[i * 3 + 1] = p.y
      pos[i * 3 + 2] = p.z
    })
    rainRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <group>
      <points ref={rainRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={rainPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#444" transparent opacity={0.6} />
      </points>
    </group>
  )
}

// --- 2. Interactive Dots and Shooting Lines ---
function NeuralDots({ count = 80 }) {
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  const { mouse, viewport } = useThree()

  const dots = useMemo(() => {
    const temp: NeuralDot[] = []
    for (let i = 0; i < count; i++) {
      temp.push({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 10
        ),
        target: new THREE.Vector3(),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.01
        ),
      })
    }
    return temp
  }, [count])

  const [pointPos, linePos] = useMemo(
    () => [new Float32Array(count * 3), new Float32Array(count * count * 6)],
    [count]
  )

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return
    const pAttr = pointsRef.current.geometry.attributes.position.array as Float32Array
    const lAttr = linesRef.current.geometry.attributes.position.array as Float32Array
    let lIdx = 0

    const mX = (mouse.x * viewport.width) / 2
    const mY = (mouse.y * viewport.height) / 2

    dots.forEach((dot, i) => {
      dot.pos.add(dot.velocity)

      const mPos = new THREE.Vector3(mX, mY, 0)
      const dist = dot.pos.distanceTo(mPos)
      if (dist < 5) {
        const force = (5 - dist) * 0.01
        dot.pos.x += (dot.pos.x - mX) * force
        dot.pos.y += (dot.pos.y - mY) * force
      }

      if (Math.abs(dot.pos.x) > 20) dot.velocity.x *= -1
      if (Math.abs(dot.pos.y) > 20) dot.velocity.y *= -1

      pAttr[i * 3] = dot.pos.x
      pAttr[i * 3 + 1] = dot.pos.y
      pAttr[i * 3 + 2] = dot.pos.z

      for (let j = i + 1; j < count; j++) {
        const dot2 = dots[j]
        const d = dot.pos.distanceTo(dot2.pos)
        if (d < 6) {
          lAttr[lIdx++] = dot.pos.x
          lAttr[lIdx++] = dot.pos.y
          lAttr[lIdx++] = dot.pos.z
          lAttr[lIdx++] = dot2.pos.x
          lAttr[lIdx++] = dot2.pos.y
          lAttr[lIdx++] = dot2.pos.z
        }
      }
    })

    pointsRef.current.geometry.attributes.position.needsUpdate = true
    linesRef.current.geometry.attributes.position.needsUpdate = true
    linesRef.current.geometry.setDrawRange(0, lIdx / 3)
  })

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={pointPos}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.15} color="#00ffff" transparent opacity={0.8} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePos.length / 3}
            array={linePos}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00ffff" transparent opacity={0.1} />
      </lineSegments>
    </group>
  )
}

function InteractiveGrid() {
  const gridRef = useRef<THREE.Group>(null)
  const { mouse } = useThree()

  useFrame((state) => {
    if (!gridRef.current) return
    gridRef.current.rotation.x = Math.PI / 2.5 + mouse.y * 0.1
    gridRef.current.rotation.y = mouse.x * 0.1
  })

  return (
    <group ref={gridRef} position={[0, -8, 0]}>
      <Grid
        infiniteGrid
        cellSize={1}
        sectionSize={5}
        fadeDistance={50}
        fadeStrength={1}
        cellColor="#111"
        sectionColor="#222"
      />
    </group>
  )
}

function MouseGlow() {
  const lightRef = useRef<THREE.PointLight>(null)
  const { mouse, viewport } = useThree()

  useFrame(() => {
    if (!lightRef.current) return
    lightRef.current.position.set(
      (mouse.x * viewport.width) / 2,
      (mouse.y * viewport.height) / 2,
      2
    )
  })

  return <pointLight ref={lightRef} intensity={2} distance={10} color="#00ffff" />
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={50} />
      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 10, 50]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />

      <NeuralDots count={100} />
      <RainAndSplashes count={500} />
      <InteractiveGrid />
      <MouseGlow />
    </>
  )
}

export default function ParticleBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="fixed inset-0 -z-10 bg-[#050505]" />

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[#050505]">
      <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <Scene />
      </Canvas>
    </div>
  )
}
