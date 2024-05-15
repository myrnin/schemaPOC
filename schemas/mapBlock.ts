export default {
  name: 'mapBlock',
  title: 'Map Block',
  type: 'object',
  fields: [
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    },
    {
      name: 'mapTitle',
      title: 'Map Title',
      type: 'string',
    },
    {
      name: 'mapStyle',
      title: 'Map Style',
      type: 'string',
      options: {
        list: [
          {title: 'Standard', value: 'standard'},
          {title: 'Satellite', value: 'satellite'},
        ],
      },
    },
  ],
}
