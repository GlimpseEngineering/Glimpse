function photoSphereGenerator(id, src) {
  return {
    id: id,
    primitive: 'PhotoSphere',
    components: {
      src: src
    },
    children: null
  }
};

export const templateIndex = {
  photoSphereGenerator: photoSphereGenerator
}