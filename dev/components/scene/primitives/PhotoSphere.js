import React, { Component } from 'react';
import {Entity} from 'aframe-react';
import 'aframe-gif-shader';
import 'aframe-asset-on-demand-component';

const LOADING_SPINNER = 'url(http://res.cloudinary.com/glimpse/image/upload/v1484179580/wavy_mv9ykh.gif)'

export default class PhotoShpere extends Component {
  constructor(props) {
    super(props);

    this.state=({
      format: 'img',
      shader: 'gif',
      loading: true,
      assetId: LOADING_SPINNER
    })
  }

  componentDidMount(){
    this.src=this.props.src
    if (this.src.endsWith(')')) {
      this.src=this.src.slice(4,-1)
    }
    if (this.props.src.endsWith('.gif')) {
      this.format='img';
      this.shader='gif';
    } else if (this.props.src.endsWith('.jpg') ||
               this.props.src.endsWith('.png') ){
      this.format='img';
      this.shader=this.props.shader||'flat';
    } else if (this.props.src.endsWith('.mpg') ||
               this.props.src.endsWith('.webm') ||
               this.props.src.endsWith('.mov') ||
               this.props.src.endsWith('.mp4') ||
               this.props.src.endsWith('.avi') ){
      this.format='video';
      this.shader=this.props.shader||'flat';
    } else {
      this.format='img';
      this.shader=this.props.shader||'flat';
    }
    
    document.querySelector('#sphere').addEventListener('materialtextureloaded',()=>{
      this.setState({loading:false})
    })
    let assetId = this.guid();

    let assets = document.querySelector('#assets')
    let asset = document.createElement(this.format)
    asset.setAttribute('id',assetId)
    asset.setAttribute('src',this.src) 
    assets.appendChild(asset)

    this.setState({
      format: this.format,
      shader: this.shader,
      assetId: assetId
    })
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.src !== this.props.src) {
      this.setState({loading:true, shader:'gif'})
      this.src=nextProps.src
      if (this.src.endsWith(')')) {
        this.src=this.src.slice(4,-1)
      }
      if (this.src.endsWith('.gif')) {
        this.format='img';
        this.shader='gif';
      } else if (this.src.endsWith('.jpg') ||
                this.src.endsWith('.png') ){
        this.format='img';
        this.shader=nextProps.shader||'flat';
      } else if (this.src.endsWith('.mpg') ||
                this.src.endsWith('.mov') ||
                this.src.endsWith('.webm') ||
                this.src.endsWith('.mp4') ||
                this.src.endsWith('.avi') ){
        this.format='video';
        this.shader=nextProps.shader||'flat';
      } else {
        this.format='img';
      }

      let assetId=this.guid();

      let assets = document.querySelector('a-assets')

      let oldAsset = document.querySelector(`#${this.state.assetId}`)
      oldAsset && document.querySelector('#assets').removeChild(oldAsset)
      let asset = document.createElement(this.format)
      asset.setAttribute('id',assetId)
      asset.setAttribute('src',this.src)
      assets.appendChild(asset)

      this.setState({
        format: this.format,
        shader: this.shader,
        assetId: assetId
      })
    }
  }

  guid () {
    return "a" + this.guidPart() + this.guidPart() + '-' + this.guidPart() + '-' + this.guidPart() + '-' +
      this.guidPart() + '-' + this.guidPart() + this.guidPart() + this.guidPart();
  }
  guidPart(){
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  render() {
    return (
    <a-entity>
      {this.loadingAnim}
      <a-entity id="sphere"
        geometry={`primitive:sphere; radius: 100`}
        material={`shader:${this.state.shader}; 
                   src:#${this.state.assetId};
                   opacity:${this.state.loading ?
                     '0.5' : '1'}`}
        scale="1 1 -1">
      </a-entity>
    </a-entity>
    )
  }
} 
