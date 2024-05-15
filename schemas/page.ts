export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'navigationHeader',
      title: 'Navigation Header',
      type: 'navigationHeader',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'richTextBlock'},
        {type: 'mediaBlock'},
        {type: 'quoteBlock'},
        {type: 'callToActionBlock'},
        {type: 'mapBlock'},
      ],
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'footer',
    },
  ],
}
