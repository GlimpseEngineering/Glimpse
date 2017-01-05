import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost, stageEntity } from '../actions/postsActionCreators';
import EntityGenerator from './post-generator/EntityGenerator';
import { templateIndex } from '../entityTemplates';

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
      color: ''
    };

    this.entityCollection = [];

    this.editEntity = (editedEntity) => {
      let targetIndex;
      this.entityCollection.forEach((entity, index) => {
        if (entity.id === editedEntity.id) targetIndex = index;
      });
      console.log('prior to inserting edited entity', this.entityCollection);
      this.entityCollection[targetIndex] = editedEntity;
    }

    this.deleteEntity = (id) => {
      let targetIndex;
      this.entityCollection.forEach((entity, index) => {
        if (entity.id === id) targetIndex = index;
      });
      this.entityCollection.splice(targetIndex, 1);
    };
  }

  componentWillReceiveProps(nextProps) {
    /**
     * issue is probably in here with the conditionals
     * if deleteId still exists, then will call deleteEntity
     */
    nextProps.newPost.stagedEntity && !nextProps.newPost.entityToDeleteId && !nextProps.newPost.entityToEditId && this.entityCollection.push(nextProps.newPost.stagedEntity);
    nextProps.newPost.entityToDeleteId && this.deleteEntity(nextProps.newPost.entityToDeleteId);
    nextProps.newPost.entityToEditId && this.editEntity(nextProps.newPost.editedEntity);
  }

  submitPost(event) {
    /**
     * be sure to JSON.stringify the entityCollection before submitting
     * also iterate through the object and pass the data to entityCollection w/o id
     * i.e. when saving to db save w/o id? 
     * 
     * also be sure to dispatch an action at some point that clears the created post from the reducer state
     */
    event.preventDefault();
    this.props.createPost(this.state);
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
      color: ''
    });
  }

  submitScene(event) {
    event.preventDefault();
    let entity;
    if (this.state.selectedPrimitive === 'PhotoSphere') {
      entity = templateIndex.photoSphereGenerator(this.state.id, this.state.src);
    }
    if (this.state.selectedPrimitive === 'Box')  {
      entity = templateIndex.boxGenerator(this.state.id, this.state.width, this.state.height,this.state.depth, this.state.color);
    }
    console.log('here is the submission of the entity', entity);
    this.props.stageEntity(entity);
    this.setState({
      id: this.state.id += 1,
      src: '',
      width: '',
      height: '',
      depth: '',
      color: ''
    });
    /**
     * going to have figure a way to manipulate data passed in to the store using this function
     * can use the store to simply pass around an object
     * initial state can just be an entity with a value of null
     * replace the entity value with an object containing the requisite properties
     * pass that value back to PostGenerator via props
     * once back in props can make a copy of it, manipulate it however necessary
     * then put it into the entityCollection in the correct format
     * alternatively, we can give each entity a key that we can use for when we want to edit a scene
     * 
     * actions to dispatch:
     * stage_entity
     * edit_entity -> make a copy of staged entity info, pass parameter back up to parent via passed down f(x)?
     */
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
  }

  onPrimitiveChange(event) {
    event.preventDefault();
    let value = event.target.value;
    value === 'PhotoSphere' && this.setState({selectedPrimitive: value});
    value === 'Box' && this.setState({selectedPrimitive: value});
  }

  render() {
    console.log('after inserting edited entity', this.entityCollection);
    let stagedEntities = this.entityCollection.map((entity) => {
      return (
        <EntityGenerator
          key={entity.id}
          stagedEntity={entity} />
      );
    });

    console.log('here is the staged entity that we submitted', this.props.newPost.stagedEntity);
    return (
      <div>
      {this.state.selectedPrimitive}
        <h3>Create A New Scene</h3>

        <select
          value={this.state.selectedPrimitive}
          onChange={event => this.onPrimitiveChange(event)} >
          <option name="PhotoSphere" value="PhotoSphere">PhotoSphere</option>
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
              name="url"
              value={this.state.src}
              onChange={event => this.onInputChange(event)} />
          </div>

          <button type="submit">Add this scene!</button>
        </form>

        <form
          id="box"
          className={this.state.selectedPrimitive === "Box" ? "" : "hide-post-details"}
          onSubmit={this.submitScene.bind(this)} >
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
            <label>Box depth</label>
            <input
              type="number"
              name="depth"
              value={this.state.depth}
              onChange={event => this.onInputChange(event)} />
          </div>

          <div>
            <label>Box color</label>
            <input
              type="text"
              name="color"
              value={this.state.color}
              onChange={event => this.onInputChange(event)} />
          </div>

          <button type="submit">Add this scene!</button>
        </form>

        <ul>
          {stagedEntities}
        </ul>

        <form
          id="post"
          onSubmit={this.submitPost.bind(this)}
          className={this.state.sceneComplete ? "" : "hide-post-details"} >
          <div>
            <label>Description</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={event => this.onInputChange(event)} >
            </textarea>
          </div>

          <div>
            <label>Make Private</label>
            <input
              type="radio"
              name="private"
              value={this.state.private}
              onChange={event => this.onInputChange(event)} />
          </div>

          <div>
            <label>Tags</label>
            <input
              type="text"
              name="tags"
              value={this.state.tags}
              onChange={event => this.onInputChange(event)} />
          </div>

          <button type="submit">Submit</button>
        </form>
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
