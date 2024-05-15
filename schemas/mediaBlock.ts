export default {
  name: 'mediaBlock',
  title: 'Media Block',
  type: 'object',
  fields: [
    {
      name: 'mediaTitle',
      title: 'Media Title',
      type: 'string',
    },
    {
      name: 'fileReference',
      title: 'File Reference',
      type: 'reference',
      to: [{type: 'fileObject'}],
    },
    // {
    //   name: 'fileObject',
    //   title: 'File Object',
    //   type: 'fileObject',
    // },
    {
      name: 'manualfile',
      title: 'Manual File',
      type: 'file',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
    },
  ],
}
