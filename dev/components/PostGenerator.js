import React, { Component } from 'react';
import { connect } from 'react-redux';
import Upload from './Upload';
import { createPost, editPost, stageEntity } from '../actions/postsActionCreators';
import PostPreview from './post-generator/PostPreview';
import EntityGenerator from './post-generator/EntityGenerator';
import { templateIndex } from '../post-helpers/entityTemplates';

class PostGenerator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: this.props.auth.activeUser.id,
      editMode: false,
      content: [],
      description: '',
      previewUrl:'',
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
  
  componentDidMount() {
    console.log('here is the index to edit', this.props.indexToEdit);
    if (this.props.postToEdit) {
      this.entityCollection = JSON.parse(this.props.postToEdit.content);
      this.setState({
        id: this.entityCollection.length + 1,
        editMode: true,
        description: this.props.postToEdit.description,
        content: this.props.postToEdit.content
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    nextProps.newPost.stagedEntity && 
      !nextProps.newPost.entityToDeleteId && 
      !nextProps.newPost.entityToEditId && 
      nextProps.newPost.stagedEntity !== this.props.newPost.stagedEntity &&
      this.entityCollection.push(nextProps.newPost.stagedEntity) && 
      this.setState({content: JSON.stringify(this.entityCollection)});
    console.log('preview url:',nextProps.newPost.previewUrl)
    if (nextProps.newPost.previewUrl && nextProps.newPost.previewUrl !== this.props.newPost.previewUrl) {
      this.setState({previewUrl:nextProps.newPost.previewUrl} , ()=>{
        this.finalizePost();
      });
    }
    nextProps.newPost.entityToDeleteId && this.editOrDeleteEntity(nextProps.newPost.entityToDeleteId);
    nextProps.newPost.entityToEditId && this.editOrDeleteEntity(nextProps.newPost.editedEntity);
  }

  submitPost(event) {
    event.preventDefault();
    // let scene = document.querySelector('#scene')
    // let screenShot = document.querySelector('#scene').components.createPreview;
    // console.log(scene.components.screenshot);
    // console.log(screenShot);
    // scene.components.createPreview.init();
    // scene.components.createPreview.capture('perspective')
    this.screenshot = document.querySelector('#preview').components.createPreview;
    this.screenshot.init();
    this.screenshot.capture('perspective');
  }

  finalizePost(url){
    console.log('sending post to db:', this.state)
    if (this.state.editMode) {
      this.setState({editMode: false});
      this.props.editPost(this.state, this.props.postToEdit.id, this.props.indexToEdit);
      this.props.closeEditModal();
    } else {
      this.props.createPost(this.state);
    }
    this.entityCollection = [];
    this.setState({
      content: [],
      description: '',
      previewUrl: '',
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
    console.log('cleared state:',this.state)
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

  setSrc(url) {
    console.log('setting src to:', url);
    this.setState({src: url});
  }

  // <input
  //               type="url"
  //               name="src"
  //               value={this.state.src}
  //               onChange={event => this.onInputChange(event)} />

  render() {
    let stagedEntities = this.entityCollection.map((entity) => {
      return (
        <EntityGenerator
          key={entity.id}
          stagedEntity={entity} />
      );
    });

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
              <Upload preset="photosphere"
                      setImage={url=>this.setSrc(url)}/>
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

export default connect(mapStateToProps, { createPost, editPost, stageEntity })(PostGenerator);
