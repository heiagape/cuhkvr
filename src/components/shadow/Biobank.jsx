/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/assets/2023-04-27/v007/biobank.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Lab4(props) {
  const { nodes, materials } = useGLTF('/assets/2023-04-27/v007/biobank.glb')
  return (
    <group position={[29.2, 0, -9]} {...props} dispose={null}>
      <mesh
        geometry={nodes.blueCabinet.geometry}
        material={materials['genericTexture002.002']}
        position={[-4.889, 0.825, -2.652]}
        rotation={[0, -1.571, 0]}
        scale={[0.834, 0.943, 0.943]}
      />
      <group position={[-4.589, 0.869, -1.653]} rotation={[0, -Math.PI / 2, 0]} scale={0.854}>
        <mesh geometry={nodes.Cube109.geometry} material={materials['genericTexture003.002']} />
        <mesh geometry={nodes.Cube109_1.geometry} material={materials['Brush_Metal.001']} />
      </group>
      <mesh
        geometry={nodes.silverRamp.geometry}
        material={materials.bioLabUniqueTexture001}
        position={[2.967, 0.159, 0.564]}
        scale={[1, 1, 1.666]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials.generic}
        position={[-4.037, 0.798, -0.465]}
        scale={[1, 1, 1.013]}
      />
      <mesh geometry={nodes.Floor.geometry} material={materials.BioLabFloor001} position={[-4.037, 0, 6.051]} />
      <mesh geometry={nodes.roof.geometry} material={materials.BioLabRoof001} position={[-4.037, 2.7, 6.051]} />
      <mesh geometry={nodes.silverRamp001.geometry} material={materials.Decals} position={[2.477, 0, 0]} />
      <mesh geometry={nodes.mainDoor.geometry} material={materials.BioLabTrim001} position={[-3.537, 0.798, 6.04]} />
      <mesh geometry={nodes.wall.geometry} material={materials.bioLabWall} position={[-3.251, 1.35, 7.051]} />
      <mesh
        geometry={nodes.fridgelp001.geometry}
        material={materials['lpMaterial.001']}
        position={[-0.617, 1.161, 3.13]}
      />
      <mesh
        geometry={nodes.redSink.geometry}
        material={materials.Brush_Metal}
        position={[-1.94, 1.683, 6.724]}
        rotation={[Math.PI, -0.175, Math.PI]}
        scale={0.088}
      />
      <mesh
        geometry={nodes.roof002.geometry}
        material={materials.BioLabRoofDecal001}
        position={[-4.034, 2.692, 5.384]}
      />
      <mesh
        geometry={nodes.Prop_Cube008.geometry}
        material={materials.Brush_Metal_Version2}
        position={[1.824, 0.532, 2.091]}
        scale={[0.115, 0.115, 0.127]}
      />
      <mesh
        geometry={nodes.Cube014.geometry}
        material={materials['Material.003']}
        position={[2.522, 1.575, 1.625]}
        scale={[0.071, 0.071, 0.079]}
      />
      <mesh
        geometry={nodes.stand.geometry}
        material={materials['generic.001']}
        position={[2.529, 2.366, 1.65]}
        rotation={[0, 0.373, 0]}
        scale={0.62}
      />
      <mesh
        geometry={nodes.computer010.geometry}
        material={materials['BioLabTrim001.002']}
        position={[0.957, 0.995, 6.737]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.192}
      />
      <mesh
        geometry={nodes.computer012.geometry}
        material={materials['Decals.002']}
        position={[0.961, 0.955, 6.431]}
        rotation={[Math.PI, -0.088, Math.PI]}
        scale={0.125}
      />
      <group position={[2.967, 0.311, 6.12]} scale={0.115}>
        <mesh geometry={nodes.Cylinder030.geometry} material={materials['ScreenAndMetal.001']} />
        <mesh geometry={nodes.Cylinder030_1.geometry} material={materials['labProps001.001']} />
      </group>
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials.genericTexture003}
        position={[-0.413, 1.829, 2.339]}
        scale={-0.032}
      />
      <mesh
        geometry={nodes.Plane023.geometry}
        material={materials.DecalsVersion2}
        position={[-9.487, 21.775, 9.517]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={3.877}
      />
      <mesh
        geometry={nodes.pencilCup004.geometry}
        material={materials.pencilCup}
        position={[0.585, 0.997, 6.666]}
        rotation={[0.992, 0.064, 0.806]}
        scale={[0.034, 0.046, 0.034]}
      />
      <mesh
        geometry={nodes.paper002.geometry}
        material={materials.papers}
        position={[-0.134, 0.949, 6.431]}
        rotation={[0, -0.965, 0]}
        scale={[0.327, 0.302, 0.422]}
      />
      <mesh
        geometry={nodes.Cutter.geometry}
        material={nodes.Cutter.material}
        position={[2.489, 1.788, 1.676]}
        rotation={[Math.PI, 0, Math.PI / 2]}
      />
      <instancedMesh
        args={[nodes.Cube065.geometry, materials.DecalsVersion2, 12]}
        instanceMatrix={nodes.Cube065.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Cube038.geometry, materials.Decals, 21]}
        instanceMatrix={nodes.Cube038.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Cube001.geometry, materials['ScreenAndMetal.001'], 8]}
        instanceMatrix={nodes.Cube001.instanceMatrix}
      />
      {/* <instancedMesh
        args={[nodes.Cube001_1.geometry, materials.generic, 8]}
        instanceMatrix={nodes.Cube001_1.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Cube001_2.geometry, materials.genericTexture003, 8]}
        instanceMatrix={nodes.Cube001_2.instanceMatrix}
      /> */}
    </group>
  )
}

useGLTF.preload('/biobank.glb')
