import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { BubsyContainer } from './loader'
import { Spinner } from '@chakra-ui/react'

const VoxelBubsy = () => {
	const refContainer = useRef()
	const [loading, setLoading] = useState(true)
	const refRenderer = useRef()

	const handleWindowResize = useCallback(() => {
		const { current: renderer } = refRenderer
		const { current: container } = refContainer
		if (container && renderer) {
			renderer.setSize(container.clientWidth,
							  container.clientHeight)
		}
	}, [])

	useEffect(() => {
		const { current: container } = refContainer
		if (container) {
			const scH = container.clientHeight

			const renderer = new THREE.WebGLRenderer({ alpha: true })
			renderer.setPixelRatio(window.devicePixelRatio)
			renderer.setSize(container.clientWidth, scH)
			renderer.outputEncoding = THREE.sRGBEncoding
			container.appendChild(renderer.domElement)
			refRenderer.current = renderer

			const scene = new THREE.Scene()
			scene.add(new THREE.AmbientLight(0xcccccc, Math.PI))

			const target = new THREE.Vector3(-0.5, 3, 0)
			const initialCameraPosition = new THREE.Vector3(
				20 * Math.sin(0.2 * Math.PI),
				10,
				20 * Math.cos(0.2 * Math.PI)
			)

			const scale = scH * 0.04
			const camera = new THREE.OrthographicCamera(
				-scale, scale, scale,
				-scale, 0.01, 50000
			)
			camera.position.copy(initialCameraPosition)
			camera.lookAt(target)

			const controls = new OrbitControls(camera, renderer.domElement)
			controls.autoRotate = true
			controls.autoRotateSpeed = 4
			controls.target = target

			loadGLTFModel(scene, '/bubsy.glb').then(() => {
				animate()
				setLoading(false)
			})

			let req = null
			const animate = () => {
				req = requestAnimationFrame(animate)
				controls.update()
				renderer.render(scene, camera)
			}

			return () => {
				cancelAnimationFrame(req)
				renderer.domElement.remove()
				renderer.dispose()
			}
		}
	}, [])

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize, false)
		return () => {
			window.removeEventListener('resize', handleWindowResize, false)
		}
	}, [handleWindowResize])

	return (
		<BubsyContainer ref={refContainer}>
			{loading && <Spinner />}
		</BubsyContainer>
	)
}

export default VoxelBubsy