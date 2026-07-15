"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// 3D seal stamp animation — shown on course completion
// A green seal falls from above, rotates, stamps, then fades

interface SealStampProps {
  trigger: boolean; // fire when course is done
  onComplete?: () => void;
}

export default function SealStamp({ trigger, onComplete }: SealStampProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    setVisible(true);

    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 50);
    camera.position.set(0, 2, 12);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(300, 300);
    renderer.setPixelRatio(2);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const dir = new THREE.DirectionalLight(0xffffff, 0.9);
    dir.position.set(3, 5, 5);
    scene.add(dir);

    // Seal body — cylinder
    const bodyGeo = new THREE.CylinderGeometry(1.2, 1.3, 1.8, 32);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x2d8a4e,
      roughness: 0.3,
      metalness: 0.15,
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);

    // Seal face — slightly wider
    const faceGeo = new THREE.CylinderGeometry(1.45, 1.45, 0.15, 32);
    const faceMat = new THREE.MeshStandardMaterial({
      color: 0x1b5c32,
      roughness: 0.2,
      metalness: 0.3,
    });
    const face = new THREE.Mesh(faceGeo, faceMat);
    face.position.y = -1;

    // Seal top knob
    const knobGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const knobMat = new THREE.MeshStandardMaterial({
      color: 0x3d9a5e,
      roughness: 0.2,
      metalness: 0.4,
    });
    const knob = new THREE.Mesh(knobGeo, knobMat);
    knob.position.y = 1.1;

    // "补" character textured plane on face
    const charCanvas = document.createElement("canvas");
    charCanvas.width = 256;
    charCanvas.height = 256;
    const ctx = charCanvas.getContext("2d")!;
    ctx.fillStyle = "#e8dcc8";
    ctx.fillRect(0, 0, 256, 256);
    ctx.fillStyle = "#c41e3a";
    ctx.font = "bold 140px 'Noto Serif SC', 'Songti SC', serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("补", 128, 128);

    const charTexture = new THREE.CanvasTexture(charCanvas);
    charTexture.minFilter = THREE.LinearFilter;
    const charPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(2.7, 2.7),
      new THREE.MeshBasicMaterial({
        map: charTexture,
        transparent: true,
        depthWrite: false,
      })
    );
    charPlane.position.y = -1.08;
    charPlane.rotation.x = -Math.PI / 2;

    // Light ring — torus
    const ringGeo = new THREE.TorusGeometry(1.55, 0.06, 16, 48);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0xffd700,
      emissiveIntensity: 0.4,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.y = -1;

    const sealGroup = new THREE.Group();
    sealGroup.add(body, face, knob, charPlane, ring);
    // Start above screen
    sealGroup.position.y = 8;
    sealGroup.rotation.x = 0.3;
    sealGroup.rotation.y = Math.random() * 0.5;
    scene.add(sealGroup);

    // Spark particles on impact
    const sparkGeo = new THREE.SphereGeometry(0.06, 6, 6);
    const sparks: THREE.Mesh[] = [];
    for (let i = 0; i < 20; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffd700,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      });
      const spark = new THREE.Mesh(sparkGeo, mat);
      spark.position.set(0, -1, 0);
      spark.visible = false;
      scene.add(spark);
      sparks.push(spark);
    }

    // Animation
    const startTime = performance.now();
    const DURATION = 2000; // 2 seconds total
    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = performance.now() - startTime;
      const t = Math.min(elapsed / DURATION, 1);

      if (t < 0.25) {
        // Descend phase
        const p = t / 0.25;
        const eased = 1 - Math.pow(1 - p, 4); // easeOutQuart
        sealGroup.position.y = 8 - eased * 8;
        sealGroup.rotation.x = 0.3 * (1 - eased);
      } else if (t < 0.35) {
        // Impact — bounce down
        const p = (t - 0.25) / 0.1;
        sealGroup.position.y = -0.2 * Math.sin(p * Math.PI);
        sealGroup.scale.setScalar(1 + 0.08 * Math.sin(p * Math.PI));
        // Fire sparks
        if (p < 0.5) {
          sparks.forEach((s, i) => {
            const angle = (i / sparks.length) * Math.PI * 2;
            const speed = 2 + Math.random() * 3;
            s.position.set(
              Math.cos(angle) * speed * p * 2,
              -1 + Math.random() * speed * p * 2,
              Math.sin(angle) * speed * p * 2
            );
            (s.material as THREE.MeshBasicMaterial).opacity =
              (1 - p * 2) * 0.8;
            s.visible = true;
          });
        }
      } else if (t < 0.5) {
        // Settle
        sealGroup.position.y = 0;
        sealGroup.scale.setScalar(1);
        sparks.forEach((s) => {
          (s.material as THREE.MeshBasicMaterial).opacity *= 0.9;
          if (
            (s.material as THREE.MeshBasicMaterial).opacity < 0.01
          )
            s.visible = false;
        });
      } else {
        // Hold then fade out
        const fadeP = (t - 0.5) / 0.5;
        const opacity = 1 - fadeP;
        sealGroup.position.y = fadeP * 2;
        sealGroup.scale.setScalar(1 - fadeP * 0.3);
        // Fade scene objects
        bodyMat.opacity = opacity;
        bodyMat.transparent = true;
        faceMat.opacity = opacity;
        faceMat.transparent = true;
        knobMat.opacity = opacity;
        knobMat.transparent = true;
      }

      sealGroup.rotation.y += 0.03 * (1 - t);

      renderer.render(scene, camera);

      if (t >= 1) {
        cancelAnimationFrame(frameId);
        setVisible(false);
        onComplete?.();
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [trigger, onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center"
      style={{ zIndex: 100, pointerEvents: "none" }}
    />
  );
}
