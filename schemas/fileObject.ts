export default {
  name: 'fileObject',
  title: 'File Object',
//   type: 'object',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'file',
      title: 'File',
      type: 'file',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
