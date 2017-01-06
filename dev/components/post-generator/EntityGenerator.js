import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editEntity, deleteEntity } from '../../actions/postsActionCreators';

class EntityGenerator extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        enableEdit: false,
        id: '',
        primitive: '',
        text: '',
        color: '',
        x: '',
        y: '',
        z: ''
      }
  }

  componentWillReceiveProps(nextProps) {
    console.log('current props', this.props);
    console.log('next props', nextProps);
  }

  openEditMenu() {
    this.state.enableEdit === true ? this.setState({enableEdit: false}) : this.setState({enableEdit: true});
  }

  editEntity() {
    let copiedEntity = Object.assign({}, this.props.stagedEntity, {
      children: 'yas'
    });
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
    name === 'url' && this.setState({src: value});
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
    console.log('this is the props of the entity', this.props);
    console.log('passing delete scene to child', this.props.deleteScene);
    return (
      <div>
        {this.props.stagedEntity.id}
        {this.props.stagedEntity.primitive}: some kind of content {this.props.stagedEntity.children}
        <button onClick={this.openEditMenu.bind(this)}>{this.state.enableEdit === true ? 'Hide' : 'Edit'}</button>
        <button onClick={this.deleteEntity.bind(this)}>Delete</button>

        <form
            id="text"
            className={this.props.stagedEntity.primitive === "Text" && this.state.enableEdit === true ? "" : "hide-post-details"} >
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
            <button type="submit">Add this scene!</button>
          </form>
      </div> 
    );
  }
};

const entityGenerator = connect(null, { editEntity, deleteEntity })(EntityGenerator);
export default entityGenerator;