import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editEntity, deleteEntity } from '../../actions/postsActionCreators';

class EntityGenerator extends Component {
  constructor(props) {
    super(props)
      let primitive = this.props.stagedEntity.primitive;
      if (primitive === 'Text' || primitive === 'Box') {
        this.position = this.props.stagedEntity.components.position.split(' ');
      }

      this.state = {
        /**
         * ideally would be nice for state to be set to whatever was submitted on load
         * this way the person can decide what to keep and what to change
         */
        enableEdit: false,
        id: '',
        primitive: '',
        text: this.props.stagedEntity.components.text,
        color: this.props.stagedEntity.components.color,
        x: this.position ? this.position[0] : '',
        y: this.position ? this.position[1] : '',
        z: this.position ? this.position[2] : '',
        width: this.props.stagedEntity.components.width,
        height: this.props.stagedEntity.components.height,
        depth: this.props.stagedEntity.components.depth,
        src: this.props.stagedEntity.components.src
      }
  }

  openEditMenu() {
    this.state.enableEdit === true ? this.setState({enableEdit: false}) : this.setState({enableEdit: true});
  }

  editEntity(event) {
    event.preventDefault();
    const position = (x, y, z) => {
      return x.toString() + ' ' + y.toString() + ' ' + z.toString();
    };
    let copiedEntity;
    if (this.props.stagedEntity.primitive === 'Text') {
      copiedEntity = Object.assign({}, this.props.stagedEntity, {
        components: {
          color: this.state.color,
          text: this.state.text,
          position: position(this.state.x, this.state.y, this.state.z)
        }
      });
    }
    if (this.props.stagedEntity.primitive === 'Box') {
      copiedEntity = Object.assign({}, this.props.stagedEntity, {
        components: {
          color: this.state.color,
          src: this.state.src,
          position: position(this.state.x, this.state.y, this.state.z),
          width: this.state.width,
          height: this.state.height,
          depth: this.state.depth, 
        }
      });
    }
    console.log('original entity', this.props.stagedEntity);
    console.log('copied entity', copiedEntity);
    this.props.editEntity(copiedEntity);
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

  render() {
    console.log('passing delete scene to child', this.props.deleteScene);
    return (
      <div>
        {this.props.stagedEntity.id}
        {this.props.stagedEntity.primitive}: some kind of content {this.props.stagedEntity.children}
        <button onClick={this.openEditMenu.bind(this)}>{this.state.enableEdit === true ? 'Hide' : 'Edit'}</button>
        <button onClick={this.deleteEntity.bind(this)}>Delete</button>

        <form
            id="text"
            className={this.props.stagedEntity.primitive === "Text" && this.state.enableEdit === true ? "" : "hide-post-details"}
            onSubmit={this.editEntity.bind(this)} >
            <div>
              <label>Text Content</label>
              <input
                type="text"
                name="text"
                value={this.state.text}
                onChange={event => this.onInputChange(event)} />
            </div>

            <div>
              <label>Text Color</label>
              <input
                type="text"
                name="color"
                value={this.state.color}
                onChange={event => this.onInputChange(event)} />
            </div>

            <div>
              <label>Text X-Axis</label>
              <input
                type="number"
                name="x"
                value={this.state.x}
                onChange={event => this.onInputChange(event)} />
            </div>

            <div>
              <label>Text Y-Axis</label>
              <input
                type="number"
                name="y"
                value={this.state.y}
                onChange={event => this.onInputChange(event)} />
            </div>

            <div>
              <label>Text Z-Axis</label>
              <input
                type="number"
                name="z"
                value={this.state.z}
                onChange={event => this.onInputChange(event)} />
            </div>
            <button type="submit">Edit this scene!</button>
          </form>

          <form
            id="box"
            className={this.props.stagedEntity.primitive === "Box" && this.state.enableEdit === true ? "" : "hide-post-details"}
            onSubmit={this.editEntity.bind(this)} >
             <div>
              <label>Image URL</label>
              <input
                type="text"
                name="src"
                value={this.state.src}
                onChange={event => this.onInputChange(event)} />
            </div>

            <div>
              <label>Box Width</label>
              <input
                type="number"
                name="width"
                value={this.state.width}
                onChange={event => this.onInputChange(event)} />
            </div>

            <div>
              <label>Box Height</label>
              <input
                type="number"
                name="height"
                value={this.state.height}
                onChange={event => this.onInputChange(event)} />
            </div>

            <div>
              <label>Box Depth</label>
              <input
                type="number"
                name="depth"
                value={this.state.depth}
                onChange={event => this.onInputChange(event)} />
            </div>

            <div>
              <label>Box Color</label>
              <input
                type="text"
                name="color"
                value={this.state.color}
                onChange={event => this.onInputChange(event)} />
            </div>

            <div>
              <label>Box X-Axis</label>
              <input
                type="number"
                name="x"
                value={this.state.x}
                onChange={event => this.onInputChange(event)} />
            </div>

            <div>
              <label>Box Y-Axis</label>
              <input
                type="number"
                name="y"
                value={this.state.y}
                onChange={event => this.onInputChange(event)} />
            </div>

            <div>
              <label>Box Z-Axis</label>
              <input
                type="number"
                name="z"
                value={this.state.z}
                onChange={event => this.onInputChange(event)} />
            </div>

            <button type="submit">Edit this scene!</button>
          </form>
      </div> 
    );
  }
};

const entityGenerator = connect(null, { editEntity, deleteEntity })(EntityGenerator);
export default entityGenerator;