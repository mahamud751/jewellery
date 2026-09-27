"use client";

import { RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { RefObject } from "react";
import * as THREE from "three";
import { Diamond, Glow, TINTS } from "@/components/jewels";
import { RigPoint, RigSpot, type LightProxy } from "@/components/room-rig";
import { CHAMBER_ORIGIN } from "@/lib/sections";

const WALL = { color: "#08070b", roughness: 0.9, metalness: 0.1 };

/** The final room: one stone suspended in a shaft of light beside a monolith. */
export function NamesChamber({ fancy, reduced, sectionRef }: { fancy: boolean; reduced: boolean; sectionRef: RefObject<number> }) {
  const stone = useRef<THREE.Group>(null);
  const shaft = useRef<LightProxy>(null);
  const beam = useRef<THREE.ShaderMaterial>(null);
  const beamUniforms = useMemo(() => ({ uOpacity: { value: 0.08 } }), []);

  useFrame((_, delta) => {
    const s = stone.current;
    if (s) {
      s.rotation.y += delta * (reduced ? 0.03 : 0.2);
      s.position.y = 1.55 + Math.sin(performance.now() * 0.0006) * (reduced ? 0 : 0.04);
    }
    const near = 1 - Math.min(1, Math.abs((sectionRef.current ?? 0) - 7) / 1.2);
    if (shaft.current) shaft.current.intensity = 8 + near * 60;
    if (beam.current) beam.current.uniforms.uOpacity.value = 0.04 + near * 0.1;
  });

  return (
    <group position={CHAMBER_ORIGIN}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.4, 0, 0.35]} receiveShadow>
        <planeGeometry args={[8.5, 7]} />
        <meshStandardMaterial color="#09080c" metalness={0.84} roughness={0.28} envMapIntensity={0.8} />
      </mesh>
      <mesh position={[0.3, 2.3, 2.15]}>
        <boxGeometry args={[6.2, 4.6, 0.1]} />
        <meshStandardMaterial {...WALL} />
      </mesh>
      <mesh position={[-2.55, 2.1, 0.2]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[4.4, 4.2, 0.1]} />
        <meshStandardMaterial {...WALL} />
      </mesh>
      <RoundedBox args={[0.62, 2.85, 0.4]} radius={0.03} position={[0, 1.42, 0]} castShadow receiveShadow>
        <meshPhysicalMaterial color="#16131c" roughness={0.3} metalness={0.4} clearcoat={0.6} />
      </RoundedBox>
      <mesh position={[0, 2.86, 0]}>
        <boxGeometry args={[0.64, 0.012, 0.42]} />
        <meshStandardMaterial color="#e2dff0" metalness={1} roughness={0.18} />
      </mesh>

      <group ref={stone} position={[0.75, 1.55, 0.3]} rotation={[0.32, 0, 0.12]}>
        <Diamond fancy={fancy} bounces={fancy ? 5 : 2} scale={0.34} tint={TINTS.white} />
      </group>

      <mesh position={[0.75, 3.05, 0.3]}>
        <cylinderGeometry args={[0.03, 0.42, 3.2, 32, 1, true]} />
        <shaderMaterial
          ref={beam}
          transparent
          depthWrite={false}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          uniforms={beamUniforms}
          vertexShader={`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`}
          fragmentShader={`varying vec2 vUv; uniform float uOpacity;
            void main(){ float a = smoothstep(0.0, 0.45, vUv.y) * smoothstep(1.0, 0.8, vUv.y); gl_FragColor = vec4(vec3(0.89, 0.86, 1.0), a * uOpacity); }`}
        />
      </mesh>
      <Glow position={[0.75, 0.01, 0.3]} size={1.6} opacity={0.55} color="#a47bff" />

      <RigSpot ref={shaft} room="chamber" position={[0.75, 4.4, 0.3]} target={[0.75, 0, 0.3]} angle={0.24} penumbra={0.7} intensity={40} distance={8} color="#f7f4ff" castShadow />
      <RigPoint room="chamber" position={[-1.4, 1.2, 1.1]} intensity={3} distance={5} color="#3d4dff" />
    </group>
  );
}
