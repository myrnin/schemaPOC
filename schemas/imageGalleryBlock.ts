export default {
  name: 'imageGalleryBlock',
  title: 'Image Gallery Block',
  type: 'object',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    },
  ],
}
