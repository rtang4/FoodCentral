import Expo, { AR } from 'expo';
import ExpoTHREE, { THREE, AR as ThreeAR } from 'expo-three';
import React from 'react';

import { View as GraphicsView } from 'expo-graphics';
import TouchableView from './TouchableView';
import newburyStores from '../yelp/newbury_ids.json'

import coordinates from 'coordinates';
import AssetUtils from 'expo-asset-utils';

const rawData = newburyStores["businesses"];

console.disableYellowBox = true;

class HitTest extends React.Component {
  state = {
    data: []
  }

  componentDidMount(){
    console.log("hello")
    const data = rawData.map(item => {
      // return coordinates({x: 42000.349138, y: -71000.084184}, {x: point.x*1000, y: point.y*1000})
      return Object.assign(coordinates({x: -71.084184*1000, y: 42.349138*1000},
        {x: item.coordinates.longitude*1000, y: item.coordinates.latitude*1000}), {name: item.name, img: item.image_url})
    })
    // console.log(data)
    this.setState({ data })
  }

  render() {
    return (
      <TouchableView
        style={{ flex: 1 }}
        shouldCancelWhenOutside={false}
        onTouchesBegan={this.onTouchesBegan}>
        <GraphicsView
          style={{ flex: 1 }}
          onContextCreate={this.onContextCreate}
          onRender={this.onRender}
          onResize={this.onResize}
          arTrackingConfiguration={AR.TrackingConfigurations.World}
          isArEnabled
          isArRunningStateEnabled
          isArCameraStateEnabled
        />
      </TouchableView>
    );
  }

  /*
    Standard AR setup
  */
  onContextCreate = ({ gl, scale, width, height }) => {
    // Get horizontal plane data
    AR.setPlaneDetection(AR.PlaneDetectionTypes.Horizontal);

    // Basic Three Renderer with polyfill for expo-three
    this.renderer = new ExpoTHREE.Renderer({
      gl,
      width,
      height,
      pixelRatio: scale,
    });

    this.scene = new THREE.Scene();
    // Add the camera stream to the background of the scene
    this.scene.background = new ThreeAR.BackgroundTexture(this.renderer);
    // Create an AR Camera that updates with the device position
    this.camera = new ThreeAR.Camera(width, height, 0.01, 1000);
    // Add an equal lighting to the scene
    this.scene.add(new THREE.AmbientLight(0xdddddd));

    // hardcoding points
    this.state.data.forEach(async rest => {
      // console.log('expo asset', Expo.Asset.fromModule(require('./food1.jpg')))
      // console.log('assetutil', await AssetUtil.resolveAsync({uri: rest["img"]}))

      console.log(rest.x*10, rest.y*10, rest.name)
      const geometry = new THREE.BoxGeometry(0.50,0.50, 0.50);
      // const material = new THREE.MeshPhongMaterial({ color: 0x00ff00})
      const material = new THREE.MeshBasicMaterial({
        map: await ExpoTHREE.createTextureAsync({
          asset: Expo.Asset.fromModule(require('./food1.jpg'))
          // asset: AssetUtil.resolveAsync({uri: rest.img})
        })
      })
      const temp = new THREE.Mesh(geometry, material);
      temp.position.set(rest.x*10,rest.y*10,rest.y*10);
      this.scene.add(temp)
    })

    // Add a light to give depth to the scene
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(1, 1, 1);
    this.scene.add(light);
  };

  onResize = ({ x, y, scale, width, height }) => {
    // When the phone resizes, we update the camera aspect ratio, and change the renderer
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(scale);
    this.renderer.setSize(width, height);
  };

  onRender = delta => {
    // Update the renderer with the scene and camera
    // console.log(AR.getCurrentFrame({ rawFeaturePoints: true }).rawFeaturePoints.length)
    this.renderer.render(this.scene, this.camera);
    // const frame = AR.getCurrentFrame({ anchors: true, rawFeaturePoints: true });
    // console.log(frame.anchors, frame.rawFeaturePoints)
  };
  /*
    End Standard AR setup
  */

  onTouchesBegan = (event) => {
    console.log('touched', event.locationX, event.locationY)
    // this.newPoint(event.locationX, event.locationY)
  }
}

export default HitTest;


/*
HitTestResultTypes = {

   * Result type from intersecting the nearest feature point.
  FeaturePoint: 'featurePoint',

   * Result type from intersecting a horizontal plane estimate, determined for the current frame.
  HorizontalPlane: 'horizontalPlane',

   * Result type from intersecting a vertical plane estimate, determined for the current frame.
  VerticalPlane: 'verticalPlane',

   * Result type from intersecting with an existing plane anchor.
  ExistingPlane: 'existingPlane',

   * Result type from intersecting with an existing plane anchor, taking into account the plane’s extent.
  ExistingPlaneUsingExtent: 'existingPlaneUsingExtent',

   * Result type from intersecting with an existing plane anchor, taking into account the plane’s geometry.
  ExistingPlaneUsingGeometry: 'existingPlaneUsingGeometry',
};
*/
