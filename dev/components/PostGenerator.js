import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost, stageEntity } from '../actions/postsActionCreators';
import PostPreview from './post-generator/PostPreview';
import EntityGenerator from './post-generator/EntityGenerator';
import { templateIndex } from '../post-helpers/entityTemplates';

class PostGenerator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: this.props.auth.activeUser.id,
      content: [],
      description: '',
      private: 0,
      tags: '',
      sceneComplete: false,
      selectedPrimitive: 'PhotoSphere',
      id: 1,
      src: '',
      width: '',
      height: '',
      depth: '',
      color: '',
      text: '',
      x: '',
      y: '',
      z: ''
    };

    this.entityCollection = [];

    this.editOrDeleteEntity = (target) => {
      let targetIndex
      this.entityCollection.forEach((entity, index) => {
        if (entity.id === target.id || entity.id === target) targetIndex = index;
      });
      if (typeof target === 'object') this.entityCollection[targetIndex] = target;
      if (typeof target === 'number') this.entityCollection.splice(targetIndex, 1);
    } 
  }

  componentWillReceiveProps(nextProps) {
    nextProps.newPost.stagedEntity && !nextProps.newPost.entityToDeleteId && !nextProps.newPost.entityToEditId && this.entityCollection.push(nextProps.newPost.stagedEntity) && this.setState({content: JSON.stringify(this.entityCollection)});
    nextProps.newPost.entityToDeleteId && this.editOrDeleteEntity(nextProps.newPost.entityToDeleteId);
    nextProps.newPost.entityToEditId && this.editOrDeleteEntity(nextProps.newPost.editedEntity);
  }

  submitPost(event) {
    /**
     * note: as of yet, no need to remove the keys from the entities, seems to render just fine with them
     * 
     * be sure to JSON.stringify the entityCollection before submitting
     * setState({content: this.entityCollection})
     * 
     * also be sure to dispatch an action at some point that clears the created post from the reducer state
     * also clear the collection of entities from this.entityCollection 
     */
    event.preventDefault();
    this.props.createPost(this.state);
    this.entityCollection = [];
    this.setState({
      content: [],
      description: '',
      private: 0,
      tags: '',
      sceneComplete: false,
      selectedPrimitive: 'PhotoSphere',
      id: 1,
      src: '',
      width: '',
      height: '',
      depth: '',
      color: '',
      text: '',
      x: '',
      y: '',
      z: ''
    });
  }

  submitScene(event) {
    event.preventDefault();
    let entity;
    if (this.state.selectedPrimitive === 'PhotoSphere') {
      entity = templateIndex.photoSphereGenerator(this.state.id, this.state.src);
    }
    if (this.state.selectedPrimitive === 'Text') {
      entity = templateIndex.textGenerator(this.state.id, this.state.text, this.state.color, this.state.x, this.state.y, this.state.z);
    }
    if (this.state.selectedPrimitive === 'Box')  {
      entity = templateIndex.boxGenerator(this.state.id, this.state.width, this.state.height, this.state.depth, this.state.color, this.state.src, this.state.x, this.state.y, this.state.z);
    }
    console.log('here is the submission of the entity', entity);
    this.props.stageEntity(entity);
    this.setState({
      id: this.state.id += 1,
      src: '',
      width: '',
      height: '',
      depth: '',
      color: '',
      text: '',
      x: '',
      y: '',
      z: ''
    });
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

  onPrimitiveChange(event) {
    event.preventDefault();
    let value = event.target.value;
    value === 'PhotoSphere' && this.setState({selectedPrimitive: value});
    value === 'Text' && this.setState({selectedPrimitive: value});
    value === 'Box' && this.setState({selectedPrimitive: value});
  }

  render() {
    // console.log('after inserting edited entity', this.entityCollection);
    let stagedEntities = this.entityCollection.map((entity) => {
      return (
        <EntityGenerator
          key={entity.id}
          stagedEntity={entity} />
      );
    });

    // console.log('here is the staged entity that we submitted', this.props.newPost);
    return (
      <div>
        <div className="col-4">
          {this.state.selectedPrimitive}
          <h3>Create A New Scene</h3>

          <form
            id="post" >
            <div>
              <label>Description</label>
              <textarea
                name="description"
                value={this.state.description}
                onChange={event => this.onInputChange(event)} >
              </textarea>
            </div>

            <div>
              <label>Tags</label>
              <input
                type="text"
                name="tags"
                value={this.state.tags}
                onChange={event => this.onInputChange(event)} />
            </div>
          </form>

          <select
            value={this.state.selectedPrimitive}
            onChange={event => this.onPrimitiveChange(event)} >
            <option name="PhotoSphere" value="PhotoSphere">PhotoSphere</option>
            <option name="Text" value="Text">Text</option>
            <option name="Box" value="Box">Box</option>
          </select>

          <form
            id="photosphere"
            className={this.state.selectedPrimitive === "PhotoSphere" ? "" : "hide-post-details"}
            onSubmit={this.submitScene.bind(this)} >
            <div>
              <label>Image URL</label>
              <input
                type="text"
                name="src"
                value={this.state.src}
                onChange={event => this.onInputChange(event)} />
            </div>

            <button type="submit">Add this scene!</button>
          </form>

          <form
            id="text"
            className={this.state.selectedPrimitive === "Text" ? "" : "hide-post-details"}
            onSubmit={this.submitScene.bind(this)} >
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

          <form
            id="box"
            className={this.state.selectedPrimitive === "Box" ? "" : "hide-post-details"}
            onSubmit={this.submitScene.bind(this)} >
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

            <button type="submit">Add this scene!</button>
          </form>

          <button onClick={this.submitPost.bind(this)}>Submit Post</button>

          <ul>
            {stagedEntities}
          </ul>
        </div>

        <PostPreview currentScene={JSON.stringify(this.entityCollection)} />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    newPost: state.newPost
  };
};

export default connect(mapStateToProps, { createPost, stageEntity })(PostGenerator);
