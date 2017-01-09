import React, { Component } from 'react';
// import request from 'superagent';
// import Dropzone from 'react-dropzone';

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/glimpse/image/upload'
const PROFPIC_PRESET = 'profile picture'
const PHOTOSPHERE_PRESET = 'photosphere'
const FLAT_PHOTO_PRESET = 'flat photo'
const VIDEOSPHERE_PRESET = 'videosphere'
const FLAT_VIDEO_PRESET = 'flat video'

const dropZoneStyles = {
        width: 160,
        height: 100,
        borderWidth: 2,
        borderColor: '#666',
        borderStyle: 'dashed',
        borderRadius: 5
      }

const thumbnailStyles = {
        width: 200,
        height: 100
      }

export default class Upload extends Component{
  constructor(props) {
    super(props);

    this.state = {
      showUploadField: false,
      uploadedFileUrl: ''
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', this.props.preset)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        console.log(response.body.secure_url)
        this.setState({
          uploadedFileUrl: response.body.secure_url
        });

        this.props.setImage(
          this.state.uploadedFileUrl ||
          'http://res.cloudinary.com/glimpse/image/upload/v1483833949/profile%20pictures/uljzqgntgtshodfow0k9.jpg'
        )
      }
    });
  }

  render(){
    return (
      <div>

        <span className="FileUpload">
          <Dropzone
            style={dropZoneStyles}
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
          {this.state.uploadedFileUrl === '' ? null :
          <img src={this.state.uploadedFileUrl}
               style={thumbnailStyles} />}
        </span>

      </div>
    )
  }
}
