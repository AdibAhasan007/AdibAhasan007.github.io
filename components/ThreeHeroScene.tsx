'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeHeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x02040a, isMobile ? 0.04 : 0.035);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = isMobile ? 32 : 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile, // optimize for mobile 60fps
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    container.appendChild(renderer.domElement);

    // --- Ambient & Point Lights ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f0ff, 4, 50);
    cyanLight.position.set(10, 10, 10);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0xbd00ff, 4, 50);
    purpleLight.position.set(-10, -10, 10);
    scene.add(purpleLight);

    // --- Central 3D Torus Knot (Neural Core) ---
    const torusGroup = new THREE.Group();
    scene.add(torusGroup);

    // Wireframe Torus Knot
    const torusGeo = new THREE.TorusKnotGeometry(
      isMobile ? 4.0 : 4.8,
      isMobile ? 1.0 : 1.2,
      isMobile ? 80 : 120,
      isMobile ? 16 : 24,
      2,
      3
    );
    const torusWireMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: isMobile ? 0.28 : 0.35,
    });
    const torusWireMesh = new THREE.Mesh(torusGeo, torusWireMat);
    torusGroup.add(torusWireMesh);

    // Inner Glowing Core
    const coreGeo = new THREE.IcosahedronGeometry(isMobile ? 2.0 : 2.5, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xbd00ff,
      emissive: 0x5a0099,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    torusGroup.add(coreMesh);

    // --- Floating Polyhedra (Satellites) ---
    const satelliteGroup = new THREE.Group();
    scene.add(satelliteGroup);

    const satGeos = [
      new THREE.OctahedronGeometry(1.2, 0),
      new THREE.IcosahedronGeometry(1.4, 0),
      new THREE.TetrahedronGeometry(1.3, 0),
      new THREE.DodecahedronGeometry(1.1, 0),
    ];

    const satMats = [
      new THREE.MeshStandardMaterial({ color: 0x00f0ff, wireframe: true, emissive: 0x0080ff, emissiveIntensity: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0xbd00ff, wireframe: true, emissive: 0x7c3aed, emissiveIntensity: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0x00ff66, wireframe: true, emissive: 0x00aa44, emissiveIntensity: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0xff007f, wireframe: true, emissive: 0xaa0055, emissiveIntensity: 0.5 }),
    ];

    const satellites: { mesh: THREE.Mesh; speed: number; radius: number; angle: number; yOffset: number }[] = [];
    const satCount = isMobile ? 4 : 6;

    for (let i = 0; i < satCount; i++) {
      const geo = satGeos[i % satGeos.length];
      const mat = satMats[i % satMats.length];
      const mesh = new THREE.Mesh(geo, mat);
      const radius = (isMobile ? 7 : 9) + Math.random() * 5;
      const angle = (i / satCount) * Math.PI * 2;
      const yOffset = (Math.random() - 0.5) * 5;
      mesh.position.set(Math.cos(angle) * radius, yOffset, Math.sin(angle) * radius);
      satelliteGroup.add(mesh);
      satellites.push({
        mesh,
        speed: 0.006 + Math.random() * 0.008,
        radius,
        angle,
        yOffset,
      });
    }

    // --- Particle Stars Cloud ---
    const particlesCount = isMobile ? 400 : 800;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    const color1 = new THREE.Color(0x00f0ff);
    const color2 = new THREE.Color(0xbd00ff);
    const color3 = new THREE.Color(0x00ff66);

    for (let i = 0; i < particlesCount; i++) {
      const idx = i * 3;
      posArray[idx] = (Math.random() - 0.5) * 80;
      posArray[idx + 1] = (Math.random() - 0.5) * 80;
      posArray[idx + 2] = (Math.random() - 0.5) * 60;

      const chosenColor = Math.random() > 0.6 ? color1 : Math.random() > 0.3 ? color2 : color3;
      colorArray[idx] = chosenColor.r;
      colorArray[idx + 1] = chosenColor.g;
      colorArray[idx + 2] = chosenColor.b;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeo.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: isMobile ? 0.18 : 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    });

    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // --- Mouse & Touch Parallax Interaction ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.001;
      mouseY = (e.clientY - windowHalfY) * 0.001;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;
        mouseX = (touch.clientX - windowHalfX) * 0.0012;
        mouseY = (touch.clientY - windowHalfY) * 0.0012;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    // --- Resize Handler --- (ResizeObserver handles iOS URL bar show/hide too)
    const onResize = () => {
      if (!container) return;
      const mobileNow = window.innerWidth < 768;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.position.z = mobileNow ? 32 : 24;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', onResize);

    // ResizeObserver catches iOS Safari URL-bar slide transitions
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);

    // --- Animation Loop ---
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse / touch follow + automatic continuous sinusoidal wave on mobile
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      const autoRotateY = isMobile ? Math.sin(elapsedTime * 0.5) * 0.4 : 0;
      const autoRotateX = isMobile ? Math.cos(elapsedTime * 0.4) * 0.3 : 0;

      torusGroup.rotation.x = elapsedTime * 0.25 + targetY * 2 + autoRotateX;
      torusGroup.rotation.y = elapsedTime * 0.35 + targetX * 2 + autoRotateY;
      torusGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.6;

      coreMesh.rotation.y = -elapsedTime * 0.6;
      coreMesh.rotation.z = elapsedTime * 0.4;

      // Rotate satellites
      satellites.forEach((sat) => {
        sat.angle += sat.speed;
        sat.mesh.position.x = Math.cos(sat.angle) * sat.radius;
        sat.mesh.position.z = Math.sin(sat.angle) * sat.radius;
        sat.mesh.position.y = sat.yOffset + Math.sin(elapsedTime * 1.5 + sat.angle) * 1.2;
        sat.mesh.rotation.x += 0.02;
        sat.mesh.rotation.y += 0.03;
      });

      // Slowly spin particles
      particlesMesh.rotation.y = elapsedTime * 0.03;
      particlesMesh.rotation.x = elapsedTime * 0.015;

      camera.position.x += (targetX * 8 - camera.position.x) * 0.05;
      camera.position.y += (-targetY * 8 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', onResize);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      torusGeo.dispose();
      torusWireMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      satGeos.forEach((g) => g.dispose());
      satMats.forEach((m) => m.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 w-full h-full z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
