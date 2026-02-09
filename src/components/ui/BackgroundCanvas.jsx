import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BackgroundCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const container = canvasRef.current;
        if (!container) return;

        let animationId;
        let renderer, scene, camera, shapes = [];

        const initThreeJS = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({
                alpha: true,
                antialias: true,
                powerPreference: "high-performance"
            });

            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            // Create floating shapes with better visibility
            const geometry = new THREE.IcosahedronGeometry(1.2, 1);

            const count = 6; // Reduced count for better performance

            for (let i = 0; i < count; i++) {
                const material = new THREE.MeshBasicMaterial({
                    color: i % 2 === 0 ? 0x3b82f6 : 0x8b5cf6, // Blue and Purple
                    wireframe: true,
                    transparent: true,
                    opacity: 0.8
                });

                const shape = new THREE.Mesh(geometry, material);
                shape.position.x = (Math.random() - 0.5) * 15;
                shape.position.y = (Math.random() - 0.5) * 10;
                shape.position.z = (Math.random() - 0.5) * 10;
                shape.scale.setScalar(Math.random() * 0.7 + 0.5);

                // Add random rotation speed
                shape.rotationSpeed = {
                    x: (Math.random() - 0.5) * 0.02,
                    y: (Math.random() - 0.5) * 0.02,
                    z: (Math.random() - 0.5) * 0.02
                };

                scene.add(shape);
                shapes.push(shape);
            }

            camera.position.z = 8;

            // Animation loop
            const animate = () => {
                animationId = requestAnimationFrame(animate);

                shapes.forEach(shape => {
                    shape.rotation.x += shape.rotationSpeed.x;
                    shape.rotation.y += shape.rotationSpeed.y;
                    shape.rotation.z += shape.rotationSpeed.z;

                    // Add floating motion
                    shape.position.y += Math.sin(Date.now() * 0.001 + shape.position.x) * 0.01;
                });

                renderer.render(scene, camera);
            };

            animate();
        };

        // Handle window resize
        const handleResize = () => {
            if (!camera || !renderer) return;

            const width = window.innerWidth;
            const height = window.innerHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        initThreeJS();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            if (renderer && container && renderer.domElement) {
                container.removeChild(renderer.domElement);
                renderer.dispose();
            }
        };
    }, []);

    return <div ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

export default BackgroundCanvas;
