
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FitnessModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Creating a simple 3D fitness tracker model
  useFrame((state) => {
    if (groupRef.current) {
      // Add a gentle floating animation
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Wristband */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1, 0.2, 16, 100]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
      
      {/* Watch face */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 0.15]} />
        <meshStandardMaterial color="#1d4ed8" />
      </mesh>
      
      {/* Watch screen */}
      <mesh position={[0, 0, 0.08]}>
        <boxGeometry args={[0.8, 0.8, 0.05]} />
        <meshStandardMaterial color="#000" />
      </mesh>
      
      {/* Activity rings */}
      <mesh position={[0, 0, 0.15]}>
        <torusGeometry args={[0.3, 0.05, 16, 100]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>
      
      <mesh position={[0, 0, 0.15]} rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[0.25, 0.05, 16, 100]} />
        <meshStandardMaterial color="#22c55e" />
      </mesh>
      
      <mesh position={[0, 0, 0.15]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.2, 0.05, 16, 100]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
      
      {/* Watch buttons */}
      <mesh position={[0.55, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 32]} />
        <meshStandardMaterial color="#64748b" />
      </mesh>
      
      <mesh position={[0.55, -0.25, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 32]} />
        <meshStandardMaterial color="#64748b" />
      </mesh>
    </group>
  );
};

export default FitnessModel;
