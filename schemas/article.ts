export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'headerImage', title: 'Header Image', type: 'image'},
    {name: 'content', title: 'Content', type: 'array', of: [{type: 'block'}, {type: 'image'}]},
    {name: 'footer', title: 'Footer', type: 'string'},
  ],
}
