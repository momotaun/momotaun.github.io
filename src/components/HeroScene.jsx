import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroScene() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth || window.innerWidth
    const height = container.clientHeight || 500

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.set(0, 0, 18)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const dirLight1 = new THREE.DirectionalLight(0x00a1e0, 2.5)
    dirLight1.position.set(10, 10, 10)
    scene.add(dirLight1)

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 1.8)
    dirLight2.position.set(-10, -5, -5)
    scene.add(dirLight2)

    const pointLight = new THREE.PointLight(0x0284c7, 3, 50)
    pointLight.position.set(0, 2, 5)
    scene.add(pointLight)

    const group = new THREE.Group()
    scene.add(group)

    const cloudCoreGeo = new THREE.IcosahedronGeometry(3.5, 1)
    const wireframeMat = new THREE.MeshStandardMaterial({
      color: 0x00a1e0,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.1,
      transparent: true,
      opacity: 0.6,
    })
    const coreMesh = new THREE.Mesh(cloudCoreGeo, wireframeMat)
    group.add(coreMesh)

    const innerNodeGeo = new THREE.OctahedronGeometry(2.0, 0)
    const innerMat = new THREE.MeshPhongMaterial({
      color: 0x0284c7,
      emissive: 0x00a1e0,
      emissiveIntensity: 0.35,
      shininess: 90,
      transparent: true,
      opacity: 0.85,
    })
    const innerMesh = new THREE.Mesh(innerNodeGeo, innerMat)
    group.add(innerMesh)

    const nodeCount = 14
    const nodes = []
    const nodeGeo = new THREE.SphereGeometry(0.35, 16, 16)
    const nodeMat = new THREE.MeshPhongMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.5,
      shininess: 100,
    })

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount)
      const theta = Math.sqrt(nodeCount * Math.PI) * phi
      const radius = 5.6 + Math.sin(i * 1.5) * 0.8

      const mesh = new THREE.Mesh(nodeGeo, nodeMat)
      mesh.position.set(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi) * 0.7,
        radius * Math.cos(phi)
      )
      mesh.userData = {
        origX: mesh.position.x,
        origY: mesh.position.y,
        origZ: mesh.position.z,
        speed: 0.8 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
      }
      group.add(mesh)
      nodes.push(mesh)
    }

    const ringGeo = new THREE.TorusGeometry(7.2, 0.04, 16, 100)
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00a1e0, transparent: true, opacity: 0.3 })
    const orbitRing1 = new THREE.Mesh(ringGeo, ringMat)
    orbitRing1.rotation.x = Math.PI / 3
    orbitRing1.rotation.y = Math.PI / 6
    group.add(orbitRing1)

    const ringGeo2 = new THREE.TorusGeometry(6.4, 0.03, 16, 100)
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.25 })
    const orbitRing2 = new THREE.Mesh(ringGeo2, ringMat2)
    orbitRing2.rotation.x = -Math.PI / 4
    orbitRing2.rotation.z = Math.PI / 5
    group.add(orbitRing2)

    const particlesCount = 90
    const particlePos = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 26
      particlePos[i + 1] = (Math.random() - 0.5) * 16
      particlePos[i + 2] = (Math.random() - 0.5) * 18
    }
    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3))
    const particleMat = new THREE.PointsMaterial({ color: 0x00a1e0, size: 0.12, transparent: true, opacity: 0.4 })
    const particleSystem = new THREE.Points(particleGeo, particleMat)
    scene.add(particleSystem)

    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    function onMouseMove(event) {
      const rect = container.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      mouseX = (x / rect.width) * 2 - 1
      mouseY = -(y / rect.height) * 2 + 1
    }
    window.addEventListener('mousemove', onMouseMove)

    function onResize() {
      const w = container.clientWidth || window.innerWidth
      const h = container.clientHeight || 500
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    const clock = new THREE.Clock()
    let frameId

    function animate() {
      frameId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      coreMesh.rotation.y = elapsedTime * 0.18
      coreMesh.rotation.x = elapsedTime * 0.1

      innerMesh.rotation.y = -elapsedTime * 0.25
      innerMesh.rotation.z = elapsedTime * 0.15

      orbitRing1.rotation.z = elapsedTime * 0.08
      orbitRing2.rotation.y = -elapsedTime * 0.12

      nodes.forEach((node) => {
        const t = elapsedTime * node.userData.speed + node.userData.phase
        node.position.y = node.userData.origY + Math.sin(t) * 0.4
        node.position.x = node.userData.origX + Math.cos(t * 0.7) * 0.3
      })

      particleSystem.rotation.y = elapsedTime * 0.03

      targetX += (mouseX * 0.6 - targetX) * 0.05
      targetY += (mouseY * 0.4 - targetY) * 0.05
      group.rotation.y = targetX
      group.rotation.x = -targetY

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      container.removeChild(renderer.domElement)
      renderer.dispose()
      cloudCoreGeo.dispose()
      innerNodeGeo.dispose()
      nodeGeo.dispose()
      ringGeo.dispose()
      ringGeo2.dispose()
      particleGeo.dispose()
      wireframeMat.dispose()
      innerMat.dispose()
      nodeMat.dispose()
      ringMat.dispose()
      ringMat2.dispose()
      particleMat.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80 z-0 bg-transparent"
    />
  )
}
