import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

const draco = new DRACOLoader();
draco.setDecoderConfig({ type: 'js' });
draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')

export function loadGLTFModel(scene, glbPath) {
    return new Promise((resolve, reject) => {
		const loader = new GLTFLoader()
		loader.setDRACOLoader(draco)

		loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene
                obj.name = 'bubsy'
                obj.position.set(0, 0, 0)
                scene.add(obj)
                resolve(obj)
            },
            undefined,
            function (error) {
                reject(error)
            }
        )
    })
}