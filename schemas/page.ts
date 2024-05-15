export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {
      name: 'navigationHeader',
      title: 'Navigation Header',
      type: 'navigationHeader',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'richTextBlock'}, {type: 'imageGalleryBlock'}],
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'footer',
    },
  ],
}
