import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost, stageEntity } from '../actions/postsActionCreators';
import PhotoSphereGen from './post-generator/PhotoSphereGen';
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
      id: 1,
      src: ''
    };

    this.entityCollection = [];
  }

  componentWillReceiveProps(nextProps) {
    this.entityCollection.push(nextProps.newPost.stagedEntity);
    console.log('starting props in post generator', this.props);
    console.log('next props in post generato', nextProps);
    console.log('here is the entity collection with our newly staged entity', this.entityCollection);
  }

  submitPost(event) {
    /**
     * be sure to JSON.stringify the entityCollection before submitting
     * also iterate through the object and pass the data to entityCollection w/o id
     * i.e. when saving to db save w/o id? 
     */
    event.preventDefault();
    this.props.createPost(this.state);
    this.setState({
      content: [],
      description: '',
      private: 0,
      tags: '',
      sceneComplete: true,
      selectedPrimitive: 'PhotoSphere',
      id: 1,
      src: ''
    });
  }

  submitScene(event) {
    event.preventDefault();
    let id = this.state.id;
    let entity = templateIndex.photoSphereGenerator(this.state.id, this.state.src);
    console.log('here is the submission of the entity', entity);
    this.props.stageEntity(entity);
    console.log('state id was', this.state.id);
    this.setState({id: id += 1});
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
     * edit_entity
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
  }

  onPrimitiveChange(event) {
    /**
     * here we would want to load the various forms so that the user can edit them 
     * so on change we can set a different form as visible 
     */
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    this.basePrimitive.primitive = value;
  }

  render() {
    console.log('state id is', this.state.id);
    let stagedEntities = this.entityCollection.map((entity) => {
      if (entity.primitive === "PhotoSphere") {
        return (
          <PhotoSphereGen
            key={entity.id}
            stagedEntity={entity} />
        );
      }
    })

    console.log('here is the staged entity that we submitted', this.props.newPost.stagedEntity);
    return (
      <div>
        <h3>Create A New Scene</h3>

        <select
          name="primitive"
          onChange={event => this.onPrimitiveChange(event)} >
          <option value="PhotoSphere">PhotoSphere</option>
        </select>

        <form
          id="photosphere"
          onSubmit={this.submitScene.bind(this)} >
          <div>
            <label>Image URL (click add before clicking submit!)</label>
            <input
              type="text"
              name="url"
              value={this.state.src}
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
