export default {
  name: 'navigationHeader',
  title: 'Navigation Header',
  type: 'object',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [{type: 'tab'}],
    },
  ],
}
