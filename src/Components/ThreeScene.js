import React from 'react';
// import {  Link } from 'react-router-dom';
import * as THREE from 'three';

import './Styles/DetailCard.css';

class ThreeScene extends React.Component {
  constructor(props) {
      super(props);
      this.mouseX = 0;
      this.state= {
         mx: 0, my: 0
      }
      this.gamma = 0;
      this.radius = 20;
      this.camera = 0;
      this.renderer = 0;
      this.width = 0
      this.height = 0
      this.mouseX = 0
  }

  componentDidMount() {
    //window.addEventListener("resize", this.onWindowResize.bind(this));
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    //CREATE CANVAS
    // this.mount.addEventListener( 'mousemove', this.onDocumentMouseMove, true );
    // document.addEventListener( 'resize', this.onWindowResize, true );
    // document.addEventListener("keyup", this.onKeyUp.bind(this))
    //ADD SCENE
    this.scene = new THREE.Scene()
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
        45, window.innerWidth / window.innerHeight, 1, 2000 )
    this.camera.position.z = 20
    this.camera.position.x = 1
    //ADD Light
    const ambientLight = new THREE.AmbientLight( 0xffaacc, 0.4 );
    const pointLight = new THREE.PointLight( 0xffeeee, 0.8 );

    this.scene.add( ambientLight );
    this.scene.add( pointLight );
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({
      antialias: true
    })
    this.renderer.setClearColor('#ffffff')
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)

    const intensity = 7.0;
    const distance = 50;
    const decay = 2.0;
    const c1 = 0x3c23ca, c2 = 0xc41fd5, c3 = 0x7f740;
    const wireMaterial = new THREE.MeshStandardMaterial( { color: 0xffffff, wireframe: true, roughness: 0, metalness: 0.8, envMapIntensity: 0.9 } );
    const metalMaterial = new THREE.MeshStandardMaterial( { color: 0xffffff, roughness: 0, metalness: 0.8, envMapIntensity: 0.9 } );

    // const material = new THREE.MeshBasicMaterial({
    //   color: '#FF1111'
    // })
    //ADD POINTSLIGHTS
    const sphere = new THREE.SphereBufferGeometry( 1.01, 32, 32 );
    this.light1 = new THREE.PointLight( c1, intensity, distance, decay );
    this.light1.add( new THREE.Mesh( sphere, metalMaterial ) );
    this.scene.add( this.light1 );
    this.light2 = new THREE.PointLight( c2, intensity, distance, decay );
    this.light2.add( new THREE.Mesh( sphere, metalMaterial ) );
    this.scene.add( this.light2 );
    this.light3 = new THREE.PointLight( c3, intensity, distance, decay );
    this.light3.add( new THREE.Mesh( sphere, metalMaterial ) );
    this.scene.add( this.light3 );

    //ADD TorusKnotGeometry
    const geometry = new THREE.TorusKnotGeometry(17, 2.3 ,360 , 20)
    this.meshRing = new THREE.Mesh( geometry, wireMaterial  );
    this.meshRing.position.set( 0,-4,0 );
    this.meshRing.rotation.x=  Math.random() * 100;
    this.meshRing.rotation.y=  Math.random() * 100;
    this.scene.add( this.meshRing );

    this.cube = new THREE.Mesh(geometry, metalMaterial)
    //this.scene.add(this.cube)

    this.start()
  }
  componentWillMount() {

  }
  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  onWindowResize() {
    console.log('resize')
    this.renderer.setSize(window.innerWidth,window.innerHeight);
  	const aspectRatio = window.innerWidth/window.innerHeight;
    this.camera.aspect = aspectRatio;
	  this.camera.updateProjectionMatrix();

  }

  _onMouseMove(e) {
    this.setState({ mx: e.nativeEvent.offsetX, my: e.nativeEvent.offsetY });
  }

  stop = () => {
    cancelAnimationFrame(this.frameId)
  }
  animate = () => {

    const time = Date.now() * 0.0025;
    this.gamma +=0.005;

    this.meshRing.rotation.x += 0.001
    this.meshRing.rotation.y += 0.001
    const z = 9;
    this.light1.position.x = z * Math.sin( THREE.Math.degToRad( time*0.278 ) );
    this.light1.position.y = z * Math.cos( THREE.Math.degToRad( time/10 ) );
    this.light1.position.z = z * Math.sin( THREE.Math.degToRad( time/10*0.33 ) );
    this.light2.position.x = z * Math.sin( THREE.Math.degToRad( time*0.678 ) );
    this.light2.position.y = z * Math.cos( THREE.Math.degToRad( time/10 ) );
    this.light2.position.z = z * Math.sin( THREE.Math.degToRad( time/10*0.53 ) );
    this.light3.position.x = z * Math.sin( THREE.Math.degToRad( time*0.678 ) );
    this.light3.position.y = z * Math.cos( THREE.Math.degToRad( time/50 ) );
    this.light3.position.z = z * Math.sin( THREE.Math.degToRad( time/10*0.33 ) );

    this.camera.position.x = this.radius * Math.sin( THREE.Math.degToRad( this.gamma ) );
    this.camera.position.y = this.radius * Math.cos( THREE.Math.degToRad( this.gamma ) );
    // this.camera.rotation.y = (Math.cos( THREE.Math.degToRad( this.gamma ) )*this.state.mx) ;
    // this.camera.position.z = (0.6*this.state.my) ;
    this.camera.lookAt( this.meshRing.position );
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }
  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return ( <
      div style = {
        {
          position: 'relative',
          width: '100%',
          height: '420px'
        }
      }
      onMouseMove={this._onMouseMove.bind(this)}
      ref={(mount) => {this.mount = mount}}
      />
    )
  }
}
export default ThreeScene
