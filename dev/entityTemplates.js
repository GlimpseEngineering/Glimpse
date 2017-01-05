function photoSphereGenerator(id, src) {
  return {
    id: id,
    primitive: 'PhotoSphere',
    components: {
      src: src
    },
    children: null
  };
};

function boxGenerator(id, width, height, depth, color) {
  return {
    id: id,
    primitive: 'Box',
    components: {
      width: width,
      height: height,
      depth: depth,
      color: color
    },
    children: null
  };
};

export const templateIndex = {
  photoSphereGenerator: photoSphereGenerator,
  boxGenerator: boxGenerator
}