import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField({ theme }: { theme: 'light' | 'dark' }) {
  const ref = useRef<THREE.Points>(null);
  
  // Generate particles
  const particles = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Create a spherical distribution
      const r = 15 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  // Use useMemo to keep the rotation array reference stable across renders
  // This prevents R3F from resetting the rotation (and our animation) when theme changes
  const initialRotation = useMemo(() => [0, 0, Math.PI / 4] as [number, number, number], []);

  return (
    <Points 
      ref={ref} 
      positions={particles} 
      stride={3} 
      frustumCulled={false}
      rotation={initialRotation}
    >
      <PointMaterial
        transparent
        color={theme === 'dark' ? "#6366F1" : "#4F46E5"}
        size={0.035}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={theme === 'dark' ? 0.6 : 0.4}
      />
    </Points>
  );
}

interface WebGLBackgroundProps {
  theme?: 'light' | 'dark'; // Make optional to avoid strict type errors if passed incorrectly
}

export const WebGLBackground: React.FC<WebGLBackgroundProps> = ({ theme = 'dark' }) => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-40 dark:opacity-60">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ParticleField theme={theme} />
      </Canvas>
    </div>
  );
};