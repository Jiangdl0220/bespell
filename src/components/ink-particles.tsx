"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Floating Chinese ink particles — mesh-based for proper alpha
const CHARS = ["补", "白", "词", "海", "印", "墨"];
const PARTICLE_COUNT = 18;

export default function InkParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Shared geometry for char planes
    const charGeo = new THREE.PlaneGeometry(1, 1);
    const dotGeo = new THREE.SphereGeometry(0.12, 8, 8);

    const particles: {
      mesh: THREE.Mesh;
      baseOpacity: number;
      speed: { x: number; y: number; rot: number };
      phase: number;
    }[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const isChar = i < CHARS.length * 3;

      if (isChar) {
        // Draw char at full opacity on canvas
        const char = CHARS[i % CHARS.length];
        const canvas = document.createElement("canvas");
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext("2d")!;
        ctx.fillStyle = "#2d8a4e"; // solid green, no alpha
        ctx.font = "bold 160px 'Ma Shan Zheng', 'Noto Serif SC', serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(char, 128, 128);

        const texture = new THREE.CanvasTexture(canvas);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;

        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          opacity: 0.08 + Math.random() * 0.14,
          depthWrite: false,
          depthTest: false,
        });

        const size = 1.5 + Math.random() * 3.5;
        const mesh = new THREE.Mesh(charGeo, material);
        mesh.scale.set(size, size, 1);
        mesh.renderOrder = -1;

        mesh.position.x = (Math.random() - 0.5) * 38;
        mesh.position.y = (Math.random() - 0.5) * 28;
        mesh.position.z = (Math.random() - 0.5) * 8;

        scene.add(mesh);

        particles.push({
          mesh,
          baseOpacity: material.opacity,
          speed: {
            x: (Math.random() - 0.5) * 0.004,
            y: 0.005 + Math.random() * 0.015,
            rot: (Math.random() - 0.5) * 0.003,
          },
          phase: Math.random() * Math.PI * 2,
        });
      } else {
        // Small green dot
        const material = new THREE.MeshBasicMaterial({
          color: 0x2d8a4e,
          transparent: true,
          opacity: 0.04 + Math.random() * 0.10,
          depthWrite: false,
          depthTest: false,
        });

        const mesh = new THREE.Mesh(dotGeo, material);
        mesh.scale.setScalar(0.5 + Math.random() * 3);
        mesh.renderOrder = -1;

        mesh.position.x = (Math.random() - 0.5) * 38;
        mesh.position.y = (Math.random() - 0.5) * 28;
        mesh.position.z = (Math.random() - 0.5) * 8;

        scene.add(mesh);

        particles.push({
          mesh,
          baseOpacity: material.opacity,
          speed: {
            x: (Math.random() - 0.5) * 0.004,
            y: 0.005 + Math.random() * 0.015,
            rot: (Math.random() - 0.5) * 0.003,
          },
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    // Animation
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      particles.forEach((p) => {
        p.mesh.position.y += p.speed.y;
        p.mesh.position.x += p.speed.x + Math.sin(t * 0.3 + p.phase) * 0.004;
        p.mesh.rotation.z += p.speed.rot;

        // Wrap
        if (p.mesh.position.y > 16) p.mesh.position.y = -16;
        if (p.mesh.position.y < -16) p.mesh.position.y = 16;
        if (p.mesh.position.x > 21) p.mesh.position.x = -21;
        if (p.mesh.position.x < -21) p.mesh.position.x = 21;

        // Gentle opacity pulse
        const mat = p.mesh.material as THREE.MeshBasicMaterial;
        mat.opacity = p.baseOpacity * (0.7 + 0.3 * Math.sin(t * 0.6 + p.phase));
      });

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0"
      style={{ zIndex: 0, pointerEvents: "none" }}
    />
  );
}
