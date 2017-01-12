import React, { Component } from 'react';
import { connect } from 'react-redux';
import Upload from '../Upload';
import { stageEntity, editEntity, deleteEntity } from '../../actions/postsActionCreators';

class EntityGenerator extends Component {
  constructor(props) {
    super(props)
      let primitive = this.props.stagedEntity.primitive;
      if (primitive === 'Text' || primitive === 'Box') {
        this.position = this.props.stagedEntity.components.position.split(' ');
      }

      this.state = {
        enableEdit: false,
        id: '',
        primitive: '',
        text: this.props.stagedEntity.components.text,
        color: this.props.stagedEntity.components.material.color,
        src: this.props.stagedEntity.components.src ? this.props.stagedEntity.components.src : this.props.stagedEntity.components.material.src,
        x: this.position ? this.position[0] : '',
        y: this.position ? this.position[1] : '',
        z: this.position ? this.position[2] : '',
        width: this.props.stagedEntity.components.width,
        height: this.props.stagedEntity.components.height,
        depth: this.props.stagedEntity.components.depth,
      }
  }

  openEditMenu() {
    this.state.enableEdit === true ? this.setState({enableEdit: false}) : this.setState({enableEdit: true});
  }

  editOrCopyEntity(event) {
    event.preventDefault();
    const position = (x, y, z) => {
      return x.toString() + ' ' + y.toString() + ' ' + z.toString();
    };
    let copiedEntity;
    if (this.props.stagedEntity.primitive === 'PhotoSphere') {
      copiedEntity = Object.assign({}, this.props.stagedEntity, {
        components: {
          src: this.state.src,
        }
      });
    }
    if (this.props.stagedEntity.primitive === 'Text') {
      copiedEntity = Object.assign({}, this.props.stagedEntity, {
        components: {
          text: this.state.text,
          color: this.state.color,
          position: position(this.state.x, this.state.y, this.state.z)
        }
      });
    }
    if (this.props.stagedEntity.primitive === 'Box') {
      copiedEntity = Object.assign({}, this.props.stagedEntity, {
        components: {
          width: this.state.width,
          height: this.state.height,
          depth: this.state.depth,
          position: position(this.state.x, this.state.y, this.state.z),
          material: {
            src: this.state.src,
            color: this.state.color
          }
        }
      });
    }
    event.target.value === 'copy' && this.props.stageEntity(copiedEntity);
    event.target.value !== 'copy' && this.props.editEntity(copiedEntity);
  }

  deleteEntity() {
    this.props.deleteEntity(this.props.stagedEntity.id);
  }

  onInputChange(event) {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    name === 'description' && this.setState({description: value});
    name === 'private' && this.setState({private: value});
    name === 'tags' && this.setState({tags: value});
    name === 'src' && this.setState({src: value});
    name === 'width' && this.setState({width: value});
    name === 'height' && this.setState({height: value});
    name === 'depth' && this.setState({depth: value});
    name === 'color' && this.setState({color: value});
    name === 'text' && this.setState({text: value});
    name === 'x' && this.setState({x: value});
    name === 'y' && this.setState({y: value});
    name === 'z' && this.setState({z: value});
  }

  setSrc(url) {
    console.log('setting src to:', url);
    this.setState({src: url});
  }

  render() {
    console.log('this is the src', this.state.src);
    console.log('passing delete scene to child', this.props.deleteScene);
    return (
      <div className="postComponent">
        <div >
          <div className="primitiveType">
            {this.props.stagedEntity.primitive}
          </div>
          <div className="editPostButtons">

            <button className="btn-select-edit"
              onClick={this.deleteEntity.bind(this)}>Delete</button>
              <button className="btn-select-edit"
                onClick={this.openEditMenu.bind(this)}>{this.state.enableEdit === true ? 'Hide' : 'Edit'}</button>
          </div>

        </div>

        <div className="editPopUp">
          <form
              id="photosphere"
              className={this.props.stagedEntity.primitive === "PhotoSphere" && this.state.enableEdit === true ? "" : "hide-post-details"}
              onSubmit={this.editOrCopyEntity.bind(this)} >
              <div>
                {/* <label>Image URL</label> */}
                <Upload preset="photosphere"
                        setImage={url=>this.setSrc(url)}/>
              </div>
              <button
                type="submit"
                className={this.props.newPost.loading === true ? "hide-post-details" : 'btn-select-edit'} >
                Edit this scene!
              </button>
            </form>

          <form
              id="text"
              className={this.props.stagedEntity.primitive === "Text" && this.state.enableEdit === true ? "" : "hide-post-details"}
              onSubmit={this.editOrCopyEntity.bind(this)} >

              <div className="input-fifths">
                <div className="col-6" >
                  {/* <label>Text Content</label> */}
                  <input className="text_content_fifth_post"
                    placeholder="Text Content"
                    type="text"
                    name="text"
                    value={this.state.text}
                    onChange={event => this.onInputChange(event)} />
                </div>

                <div className="col-6" >
                  {/* <label>Text Color</label> */}
                  <input className="text_content_fifth_post"
                    placeholder="Text Color"
                    type="text"
                    name="color"
                    value={this.state.color}
                    onChange={event => this.onInputChange(event)} />
                </div>


              </div>
              <div>
                <div className="col-4">
                  {/* <label>Text X-Axis</label> */}
                  <input className="text_content_third"
                    placeholder="X-Axis"
                    type="number"
                    name="x"
                    value={this.state.x}
                    onChange={event => this.onInputChange(event)} />
                </div>

                <div className="col-4">
                  {/* <label>Text </label> */}
                  <input className="text_content_third"
                    placeholder="Y-Axis"
                    type="number"
                    name="y"
                    value={this.state.y}
                    onChange={event => this.onInputChange(event)} />
                </div>

                <div className="col-4">
                  {/* <label>Text Z-Axis</label> */}
                  <input className="text_content_third"
                    placeholder="Z-Axis"
                    type="number"
                    name="z"
                    value={this.state.z}
                    onChange={event => this.onInputChange(event)} />
                </div>
              </div>
              <button type="submit" className="btn-select-edit">Edit this scene!</button>

            </form>

            <form
              id="box"
              className={this.props.stagedEntity.primitive === "Box" && this.state.enableEdit === true ? "" : "hide-post-details"}
              onSubmit={this.editOrCopyEntity.bind(this)} >
              <div>
                {/* <label>Image URL</label> */}
                <Upload preset="photosphere"
                        setImage={url=>this.setSrc(url)}/>
              </div>

              <div className="col-12">
                {/* <label>Box Color</label> */}
                <input className="text_content_full"
                  placeholder="Box Color"
                  type="text"
                  name="color"
                  value={this.state.color}
                  onChange={event => this.onInputChange(event)} />
              </div>
              <div>
                <div className="col-4">
                  {/* <label>Box Width</label> */}
                  <input className="text_content_third"
                    placeholder="Width"
                    type="number"
                    name="width"
                    value={this.state.width}
                    onChange={event => this.onInputChange(event)} />
                </div>

                <div className="col-4">
                  {/* <label>Box Height</label> */}
                  <input className="text_content_third"
                    placeholder="Height"
                    type="number"
                    name="height"
                    value={this.state.height}
                    onChange={event => this.onInputChange(event)} />
                </div>

                <div className="col-4">
                  {/* <label>Box Depth</label> */}
                  <input className="text_content_third"
                    placeholder="Depth"
                    type="number"
                    name="depth"
                    value={this.state.depth}
                    onChange={event => this.onInputChange(event)} />
                </div>
              </div>

              <div>
                <div className="col-4">
                  {/* <label>Box X-Axis</label> */}
                  <input className="text_content_third"
                    place="X-Axis"
                    type="number"
                    name="x"
                    value={this.state.x}
                    onChange={event => this.onInputChange(event)} />
                </div>

                <div className="col-4">
                  {/* <label>Box Y-Axis</label> */}
                  <input className="text_content_third"
                    placeholder="Y-Axis"
                    type="number"
                    name="y"
                    value={this.state.y}
                    onChange={event => this.onInputChange(event)} />
                </div>

                <div className="col-4">
                  {/* <label>Box Z-Axis</label> */}
                  <input className="text_content_third"
                    placeholder="Z-Axis"
                    type="number"
                    name="z"
                    value={this.state.z}
                    onChange={event => this.onInputChange(event)} />
                </div>
              </div>



              <button
                type="submit"
                className={this.props.newPost.loading === true ? "hide-post-details" : 'btn-select-edit'} >
                Edit this scene!
              </button>
            </form>
        </div>

      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    newPost: state.newPost
  };
};


const entityGenerator = connect(mapStateToProps, { stageEntity, editEntity, deleteEntity })(EntityGenerator);
export default entityGenerator;
