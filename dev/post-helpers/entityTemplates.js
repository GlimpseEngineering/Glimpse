function photoSphereGenerator(id, src) {
  return {
    id: id,
    primitive: 'PhotoSphere',
    components: {
      src: src,
      material: {
        color: ''
      }
    },
    children: null
  };
};

function textGenerator(id, text, color, x, y, z) {
  function position(x, y, z) {
    return x.toString() + ' ' + y.toString() + ' ' + z.toString();
  };

  return {
    id: id,
    primitive: 'Text',
    components: {
      text: text,
      position: position(x, y, z),
      material: {
        color: color
      }
    },
    children: null
  };
};

function boxGenerator(id, width, height, depth, color, src, x, y, z) {
  function position(x, y, z) {
    return x.toString() + ' ' + y.toString() + ' ' + z.toString();
  };
  
  return {
    id: id,
    primitive: 'Box',
    components: {
      width: width,
      height: height,
      depth: depth,
      position: position(x, y, z),
      material: {
        src: src,
        color: color
      }
    },
    children: null
  };
};

export const templateIndex = {
  photoSphereGenerator: photoSphereGenerator,
  textGenerator: textGenerator,
  boxGenerator: boxGenerator
}