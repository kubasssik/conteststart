import * as THREE from 'three'
import { GLTFLoader } from "./GLTFLoader.js"
import { OrbitControls } from './OrbitControls.js'




const $ruby = document.querySelector('.logo_3d')

//LOGO
let controls
const scene = new THREE.Scene()



//scene.fog = new THREE.Fog(0xffffff, 0, 7);
//scene.fog = new THREE.FogExp2( 0xffffff, 0.002 )
const camera = new THREE.PerspectiveCamera(
  75,
  $ruby.clientWidth / 350,
  0.01,
  1000
)
camera.position.set(0, 0, 4)


const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
renderer.setSize($ruby.clientWidth, 350,)
document.querySelector('#canvas').appendChild(renderer.domElement)



const loader = new GLTFLoader()
let obj
loader.load("/static/img/models/ruby_1/scene.gltf", function (gltf) {
  obj = gltf.scene
  gltf.scene.position.set(0, 0, 0)
  scene.add(gltf.scene)
})

const pLight = new THREE.PointLight(0xffffff, 1, 100)//точеченый свет
pLight.position.set(-100, -1000, -100)
scene.add(pLight)

const aLight = new THREE.AmbientLight()//Общий свет
aLight.position.set(100, 500, 1000)
scene.add(aLight)

const spotLight = new THREE.SpotLight()//0xffffff, 1, 0, Math.PI / 3, 1, 2
spotLight.position.set(10, 1000, 100)
scene.add(spotLight)



  function animate() {
    requestAnimationFrame(animate)
    if (obj) {
      controls.update()
      renderer.render(scene, camera)
    }
  }
  animate()

controls = new OrbitControls(camera, renderer.domElement)
controls.autoRotate = true
controls.enableZoom = false
controls.enableRotate = false






