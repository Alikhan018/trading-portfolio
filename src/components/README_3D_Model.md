# 3D Model Integration Guide

## Current Status
The hero section now includes a 3D model using Three.js with React Three Fiber. Currently, it displays a placeholder Bitcoin-style coin model.

## Using Your USDZ Model

### Why USDZ Won't Work Directly
USDZ files are designed for AR (Augmented Reality) and are not directly supported by Three.js. You need to convert your `base_basic_shaded.usdz` file to a format that Three.js can understand.

### Conversion Steps

1. **Convert USDZ to GLTF/GLB**:
   - Use **Blender** (free): https://www.blender.org/
   - Open your USDZ file in Blender
   - Export as GLTF 2.0 (.glb) format
   - Place the .glb file in the `public` folder

2. **Update the Model Component**:
   ```tsx
   // In ThreeDModel.tsx, replace the Model3D component with:
   const Model3D: React.FC = () => {
     const { scene } = useGLTF('/path-to-your-model.glb');
     
     return (
       <primitive object={scene} scale={[1, 1, 1]} />
     );
   };
   ```

3. **Alternative Tools**:
   - **Maya** (if available)
   - **Online converters** (limited functionality)
   - **USDZ to GLTF converters**

### Current Features
- ✅ Three.js integration with React Three Fiber
- ✅ Interactive 3D model with auto-rotation
- ✅ Professional lighting setup
- ✅ Shadow effects
- ✅ Responsive design
- ✅ Loading states
- ✅ Orbit controls for user interaction

### File Structure
```
src/
├── components/
│   ├── ThreeDModel.tsx          # Main 3D component
│   └── README_3D_Model.md       # This guide
├── utils/
│   └── modelLoader.ts           # Model loading utilities
└── styles/
    └── Hero.css                 # Styling for 3D container
```

### Next Steps
1. Convert your USDZ file to GLTF/GLB
2. Place the converted file in the `public` folder
3. Update the model path in `ThreeDModel.tsx`
4. Test the integration

The current placeholder model will be replaced with your actual 3D model once converted.
