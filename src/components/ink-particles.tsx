"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Floating Chinese ink particles — subtle background atmosphere
// Characters: 补 白 词 海 印 墨 · dots

const CHARS = ["补", "白", "词", "海", "印", "墨"];
const PARTICLE_COUNT = 28;

export default function InkParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 30;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    // Canvas textures for characters
    const textures: THREE.Sprite[] = [];

    const createCharSprite = (char: string, size: number, opacity: number) => {
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext("2d")!;
      ctx.font = `bold 80px "Ma Shan Zheng", "Noto Serif SC", serif`;
      ctx.fillStyle = `rgba(45, 138, 78, ${opacity})`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(char, 64, 64);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;

      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(material);
      sprite.scale.set(size, size, 1);
      return sprite;
    };

    // Create dot particles
    const dotGeo = new THREE.SphereGeometry(0.08, 8, 8);

    const particles: {
      mesh: THREE.Sprite | THREE.Mesh;
      speed: { x: number; y: number; rot: number };
      phase: number;
    }[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const isChar = i < CHARS.length * 2;
      let mesh: THREE.Sprite | THREE.Mesh;

      if (isChar) {
        const char = CHARS[i % CHARS.length];
        const size = 0.8 + Math.random() * 2.5;
        const opacity = 0.04 + Math.random() * 0.08;
        mesh = createCharSprite(char, size, opacity);
      } else {
        const material = new THREE.MeshBasicMaterial({
          color: 0x2d8a4e,
          transparent: true,
          opacity: 0.03 + Math.random() * 0.06,
          depthWrite: false,
        });
        mesh = new THREE.Mesh(dotGeo, material);
        mesh.scale.setScalar(0.5 + Math.random() * 2);
      }

      mesh.position.x = (Math.random() - 0.5) * 40;
      mesh.position.y = (Math.random() - 0.5) * 30;
      mesh.position.z = (Math.random() - 0.5) * 10;

      scene.add(mesh);

      particles.push({
        mesh,
        speed: {
          x: (Math.random() - 0.5) * 0.003,
          y: 0.004 + Math.random() * 0.012,
          rot: (Math.random() - 0.5) * 0.005,
        },
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Animation loop
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      particles.forEach((p) => {
        p.mesh.position.y += p.speed.y;
        p.mesh.position.x += p.speed.x + Math.sin(t * 0.3 + p.phase) * 0.003;
        p.mesh.rotation.z += p.speed.rot;

        // Wrap around
        if (p.mesh.position.y > 18) p.mesh.position.y = -18;
        if (p.mesh.position.y < -18) p.mesh.position.y = 18;
        if (p.mesh.position.x > 22) p.mesh.position.x = -22;
        if (p.mesh.position.x < -22) p.mesh.position.x = 22;

        // Subtle opacity pulse
        if ("material" in p.mesh) {
          const mat = p.mesh.material as THREE.MeshBasicMaterial;
          mat.opacity = 0.03 + Math.sin(t * 0.5 + p.phase) * 0.02 + 0.02;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
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
      scene.clear();
      textures.forEach((s) => {
        (s.material as THREE.SpriteMaterial).map?.dispose();
        (s.material as THREE.SpriteMaterial).dispose();
      });
      dotGeo.dispose();
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
