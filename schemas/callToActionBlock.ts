export default {
  name: 'callToActionBlock',
  title: 'Call to Action Block',
  type: 'object',
  fields: [
    {
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
    },
    {
      name: 'ctaUrl',
      title: 'CTA URL',
      type: 'url',
    },
    {
      name: 'ctaSlug',
      title: 'CTA Slug',
      type: 'slug',
      options: {
        source: 'ctaText',
        maxLength: 96,
      },
    },
  ],
}
