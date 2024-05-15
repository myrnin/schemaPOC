export default {
  name: 'navigationHeader',
  title: 'Navigation Header',
  type: 'object',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'tabName', title: 'Tab Name', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
          ],
        },
      ],
    },
  ],
}
