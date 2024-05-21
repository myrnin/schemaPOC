import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

// Sanity Schema

export const scheemu = [
  // Document types
  {
    name: 'page',
    type: 'document',
    title: 'Page',
    fields: [
      {name: 'title', type: 'string', title: 'Title'},
      {
        name: 'header',
        type: 'reference',
        to: [{type: 'header'}],
      },
      {
        name: 'mainContentArea',
        type: 'reference',
        to: [{type: 'mainContentArea'}],
      },
      {
        name: 'sidebar',
        type: 'reference',
        to: [{type: 'sidebar'}],
      },
      {
        name: 'footer',
        type: 'reference',
        to: [{type: 'footer'}],
      },
    ],
  },
  {
    name: 'header',
    type: 'document',
    title: 'Header',
    fields: [
      {name: 'logo', type: 'image', title: 'Logo'},
      {
        name: 'navBar',
        type: 'array',
        title: 'Navigation Bar',
        of: [{type: 'navItem'}],
      },
      {name: 'searchIcon', type: 'image', title: 'Search Icon'},
    ],
  },
  {
    name: 'mainContentArea',
    type: 'document',
    title: 'Main Content Area',
    fields: [
      {
        name: 'articleHeader',
        type: 'object',
        title: 'Article Header',
        fields: [
          {name: 'title', type: 'string', title: 'Title'},
          {name: 'date', type: 'string', title: 'Date'},
          {
            name: 'authorInfo',
            type: 'object',
            title: 'Author Info',
            fields: [
              {name: 'authorName', type: 'string', title: 'Author Name'},
              {
                name: 'socialIcons',
                type: 'array',
                title: 'Social Icons',
                of: [{type: 'socialIcon'}],
              },
            ],
          },
        ],
      },
      {
        name: 'articleBody',
        type: 'array',
        title: 'Article Body',
        of: [{type: 'block'}, {type: 'image'}, {type: 'caption'}, {type: 'footnotes'}],
      },
    ],
  },
  {
    name: 'sidebar',
    type: 'document',
    title: 'Sidebar',
    fields: [
      {
        name: 'searchBox',
        type: 'object',
        title: 'Search Box',
        fields: [
          {name: 'inputField', type: 'string', title: 'Input Field'},
          {name: 'searchButton', type: 'string', title: 'Search Button'},
        ],
      },
      {
        name: 'relatedContent',
        type: 'array',
        title: 'Related Content',
        of: [{type: 'relatedItem'}],
      },
      {
        name: 'subscriptionForm',
        type: 'object',
        title: 'Subscription Form',
        fields: [
          {name: 'inputField', type: 'string', title: 'Input Field'},
          {name: 'subscribeButton', type: 'string', title: 'Subscribe Button'},
        ],
      },
    ],
  },
  {
    name: 'footer',
    type: 'document',
    title: 'Footer',
    fields: [
      {
        name: 'footerLinks',
        type: 'array',
        title: 'Footer Links',
        of: [{type: 'footerLinkItem'}],
      },
      {
        name: 'socialMediaIcons',
        type: 'array',
        title: 'Social Media Icons',
        of: [{type: 'socialMediaIcon'}],
      },
    ],
  },
  // Object types
  {
    name: 'navItem',
    type: 'object',
    title: 'Navigation Item',
    fields: [{name: 'title', type: 'string', title: 'Title'}],
  },
  {
    name: 'socialIcon',
    type: 'object',
    title: 'Social Icon',
    fields: [{name: 'icon', type: 'string', title: 'Icon'}],
  },
  {
    name: 'caption',
    type: 'object',
    title: 'Caption',
    fields: [{name: 'text', type: 'string', title: 'Text'}],
  },
  {
    name: 'footnotes',
    type: 'object',
    title: 'Footnotes',
    fields: [{name: 'text', type: 'string', title: 'Text'}],
  },
  {
    name: 'relatedItem',
    type: 'object',
    title: 'Related Item',
    fields: [{name: 'title', type: 'string', title: 'Title'}],
  },
  {
    name: 'footerLinkItem',
    type: 'object',
    title: 'Footer Link Item',
    fields: [{name: 'title', type: 'string', title: 'Title'}],
  },
  {
    name: 'socialMediaIcon',
    type: 'object',
    title: 'Social Media Icon',
    fields: [{name: 'icon', type: 'string', title: 'Icon'}],
  },
]

export const schoome = [
  // Document types
  {
    name: 'page',
    type: 'document',
    title: 'Page',
    fields: [
      {name: 'title', type: 'string', title: 'Title'},
      {
        name: 'sidebar',
        type: 'reference',
        to: [{type: 'sidebar'}],
      },
      {
        name: 'mainContentArea',
        type: 'reference',
        to: [{type: 'mainContentArea'}],
      },
    ],
  },
  {
    name: 'sidebar',
    type: 'document',
    title: 'Sidebar',
    fields: [
      {name: 'logo', type: 'image', title: 'Logo'},
      {
        name: 'searchBar',
        type: 'object',
        title: 'Search Bar',
        fields: [
          {name: 'placeholder', type: 'string', title: 'Placeholder'},
          {name: 'searchIcon', type: 'image', title: 'Search Icon'},
        ],
      },
      {
        name: 'menu',
        type: 'array',
        title: 'Menu',
        of: [{type: 'menuItem'}],
      },
      {
        name: 'footer',
        type: 'object',
        title: 'Footer',
        fields: [
          {name: 'text', type: 'string', title: 'Text'},
          {
            name: 'links',
            type: 'array',
            title: 'Links',
            of: [{type: 'link'}],
          },
        ],
      },
    ],
  },
  {
    name: 'mainContentArea',
    type: 'document',
    title: 'Main Content Area',
    fields: [
      {
        name: 'header',
        type: 'object',
        title: 'Header',
        fields: [{name: 'title', type: 'string', title: 'Title'}],
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [{type: 'block'}, {type: 'codeBlock'}, {type: 'textBlock'}, {type: 'link'}],
      },
    ],
  },
  // Object types
  {
    name: 'menuItem',
    type: 'object',
    title: 'Menu Item',
    fields: [{name: 'title', type: 'string', title: 'Title'}],
  },
  {
    name: 'link',
    type: 'object',
    title: 'Link',
    fields: [
      {name: 'title', type: 'string', title: 'Title'},
      {name: 'href', type: 'url', title: 'URL'},
    ],
  },
  {
    name: 'codeBlock',
    type: 'object',
    title: 'Code Block',
    fields: [
      {name: 'header', type: 'string', title: 'Header'},
      {name: 'code', type: 'text', title: 'Code'},
    ],
  },
  {
    name: 'textBlock',
    type: 'object',
    title: 'Text Block',
    fields: [{name: 'text', type: 'string', title: 'Text'}],
  },
]

export const schumie = [
  // Document types
  {
    name: 'page',
    type: 'document',
    title: 'Page',
    fields: [
      {name: 'title', type: 'string', title: 'Title'},
      {
        name: 'header',
        type: 'reference',
        to: [{type: 'header'}],
      },
      {
        name: 'mainContentArea',
        type: 'reference',
        to: [{type: 'mainContentArea'}],
      },
      {
        name: 'footer',
        type: 'reference',
        to: [{type: 'footer'}],
      },
    ],
  },
  {
    name: 'header',
    type: 'document',
    title: 'Header',
    fields: [
      {name: 'logo', type: 'image', title: 'Logo'},
      {
        name: 'navigationMenu',
        type: 'array',
        title: 'Navigation Menu',
        of: [{type: 'menuItem'}],
      },
    ],
  },
  {
    name: 'mainContentArea',
    type: 'document',
    title: 'Main Content Area',
    fields: [
      {
        name: 'articleHeader',
        type: 'object',
        title: 'Article Header',
        fields: [
          {name: 'title', type: 'string', title: 'Title'},
          {
            name: 'authorInfo',
            type: 'object',
            title: 'Author Info',
            fields: [
              {name: 'authorName', type: 'string', title: 'Author Name'},
              {name: 'date', type: 'date', title: 'Date'},
            ],
          },
        ],
      },
      {
        name: 'articleContent',
        type: 'array',
        title: 'Article Content',
        of: [{type: 'block'}, {type: 'image'}, {type: 'textBlock'}],
      },
      {
        name: 'sidebar',
        type: 'object',
        title: 'Sidebar',
        fields: [
          {
            name: 'searchBar',
            type: 'object',
            title: 'Search Bar',
            fields: [
              {name: 'placeholder', type: 'string', title: 'Placeholder'},
              {name: 'searchIcon', type: 'image', title: 'Search Icon'},
            ],
          },
          {
            name: 'subscribeSection',
            type: 'object',
            title: 'Subscribe Section',
            fields: [
              {name: 'text', type: 'string', title: 'Text'},
              {name: 'subscribeButton', type: 'string', title: 'Subscribe Button'},
            ],
          },
          {
            name: 'relatedContent',
            type: 'array',
            title: 'Related Content',
            of: [{type: 'relatedArticleLink'}],
          },
        ],
      },
    ],
  },
  {
    name: 'footer',
    type: 'document',
    title: 'Footer',
    fields: [
      {
        name: 'footerLinks',
        type: 'array',
        title: 'Footer Links',
        of: [{type: 'footerLinkItem'}],
      },
      {
        name: 'footerLegalText',
        type: 'text',
        title: 'Footer Legal Text',
      },
    ],
  },
  // Object types
  {
    name: 'menuItem',
    type: 'object',
    title: 'Menu Item',
    fields: [{name: 'title', type: 'string', title: 'Title'}],
  },
  {
    name: 'relatedArticleLink',
    type: 'object',
    title: 'Related Article Link',
    fields: [
      {name: 'title', type: 'string', title: 'Title'},
      {name: 'url', type: 'url', title: 'URL'},
    ],
  },
  {
    name: 'footerLinkItem',
    type: 'object',
    title: 'Footer Link Item',
    fields: [
      {name: 'title', type: 'string', title: 'Title'},
      {name: 'url', type: 'url', title: 'URL'},
    ],
  },
  {
    name: 'textBlock',
    type: 'object',
    title: 'Text Block',
    fields: [{name: 'text', type: 'string', title: 'Text'}],
  },
]

export const schuuue = [
  // Document types
  {
    name: 'page',
    type: 'document',
    title: 'Page',
    fields: [
      {name: 'title', type: 'string', title: 'Title'},
      {
        name: 'header',
        type: 'reference',
        to: [{type: 'header'}],
      },
      {
        name: 'mainContentArea',
        type: 'reference',
        to: [{type: 'mainContentArea'}],
      },
      {
        name: 'footer',
        type: 'reference',
        to: [{type: 'footer'}],
      },
    ],
  },
  {
    name: 'header',
    type: 'document',
    title: 'Header',
    fields: [
      {name: 'Title', type: 'string', title: 'Title'},
      {name: 'logo', type: 'image', title: 'Logo'},
      {
        name: 'navigationMenu',
        type: 'array',
        title: 'Navigation Menu',
        of: [{type: 'menuItem'}],
      },
    ],
  },
  {
    name: 'mainContentArea',
    type: 'document',
    title: 'Main Content Area',
    fields: [
      {
        name: 'articleHeader',
        type: 'object',
        title: 'Article Header',
        fields: [
          {name: 'title', type: 'string', title: 'Title'},
          {
            name: 'authorInfo',
            type: 'object',
            title: 'Author Info',
            fields: [
              {name: 'authorName', type: 'string', title: 'Author Name'},
              {name: 'date', type: 'date', title: 'Date'},
            ],
          },
        ],
      },
      {
        name: 'articleContent',
        type: 'array',
        title: 'Article Content',
        of: [{type: 'block'}, {type: 'image'}, {type: 'textBlock'}],
      },
      {
        name: 'sidebar',
        type: 'object',
        title: 'Sidebar',
        fields: [
          {
            name: 'searchBar',
            type: 'object',
            title: 'Search Bar',
            fields: [
              {name: 'placeholder', type: 'string', title: 'Placeholder'},
              {name: 'searchIcon', type: 'image', title: 'Search Icon'},
            ],
          },
          {
            name: 'subscribeSection',
            type: 'object',
            title: 'Subscribe Section',
            fields: [
              {name: 'text', type: 'string', title: 'Text'},
              {name: 'subscribeButton', type: 'string', title: 'Subscribe Button'},
            ],
          },
          {
            name: 'relatedContent',
            type: 'array',
            title: 'Related Content',
            of: [{type: 'relatedArticleLink'}],
          },
        ],
      },
    ],
  },
  {
    name: 'footer',
    type: 'document',
    title: 'Footer',
    fields: [
      {
        name: 'footerLinks',
        type: 'array',
        title: 'Footer Links',
        of: [{type: 'footerLinkItem'}],
      },
      {
        name: 'footerLegalText',
        type: 'text',
        title: 'Footer Legal Text',
      },
    ],
  },
  // Object types
  {
    name: 'menuItem',
    type: 'object',
    title: 'Menu Item',
    fields: [
      {name: 'title', type: 'string', title: 'Title'},
      {name: 'url', type: 'url', title: 'URL'},
    ],
  },
  {
    name: 'relatedArticleLink',
    type: 'object',
    title: 'Related Article Link',
    fields: [
      {name: 'title', type: 'string', title: 'Title'},
      {name: 'url', type: 'url', title: 'URL'},
    ],
  },
  {
    name: 'footerLinkItem',
    type: 'object',
    title: 'Footer Link Item',
    fields: [
      {name: 'title', type: 'string', title: 'Title'},
      {name: 'url', type: 'url', title: 'URL'},
    ],
  },
  {
    name: 'textBlock',
    type: 'object',
    title: 'Text Block',
    fields: [{name: 'text', type: 'string', title: 'Text'}],
  },
]

export const schumee = [
  {
    name: 'articlePage',
    title: 'Article Page',
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
          maxLength: 200,
        },
      },
      {
        name: 'header',
        title: 'Header',
        type: 'object',
        fields: [
          {
            name: 'logo',
            title: 'Logo',
            type: 'image',
          },
          {
            name: 'menuItems',
            title: 'Menu Items',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                  },
                  {
                    name: 'url',
                    title: 'URL',
                    type: 'url',
                  },
                ],
              },
            ],
          },
          {
            name: 'searchIcon',
            title: 'Search Icon',
            type: 'image',
          },
          {
            name: 'profileIcon',
            title: 'Profile Icon',
            type: 'image',
          },
        ],
      },
      {
        name: 'mainContent',
        title: 'Main Content',
        type: 'object',
        fields: [
          {
            name: 'articleTitle',
            title: 'Article Title',
            type: 'string',
          },
          {
            name: 'articleMetadata',
            title: 'Article Metadata',
            type: 'object',
            fields: [
              {
                name: 'date',
                title: 'Date',
                type: 'datetime',
              },
              {
                name: 'author',
                title: 'Author',
                type: 'string',
              },
            ],
          },
          {
            name: 'articleBody',
            title: 'Article Body',
            type: 'array',
            of: [
              {type: 'block'},
              {type: 'image'},
              {type: 'file'},
              {
                type: 'object',
                name: 'embed',
                title: 'Embedded Content',
                fields: [
                  {
                    name: 'url',
                    title: 'URL',
                    type: 'url',
                  },
                  {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                  },
                ],
              },
            ],
          },
          {
            name: 'articleImage',
            title: 'Article Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'chart',
            title: 'Chart',
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Chart Title',
                type: 'string',
              },
              {
                name: 'data',
                title: 'Chart Data',
                type: 'text', // or custom type for chart data
              },
              {
                name: 'source',
                title: 'Chart Source',
                type: 'string',
              },
            ],
          },
          {
            name: 'subscribeBox',
            title: 'Subscribe Box',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Subscribe Text',
                type: 'string',
              },
              {
                name: 'buttonText',
                title: 'Button Text',
                type: 'string',
              },
            ],
          },
          {
            name: 'relatedArticles',
            title: 'Related Articles',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                  },
                  {
                    name: 'link',
                    title: 'Link',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'sidebar',
        title: 'Sidebar',
        type: 'object',
        fields: [
          {
            name: 'sidebarBox',
            title: 'Sidebar Box',
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Box Title',
                type: 'string',
              },
              {
                name: 'buttonText',
                title: 'Button Text',
                type: 'string',
              },
            ],
          },
          {
            name: 'relatedLinks',
            title: 'Related Links',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                  },
                  {
                    name: 'url',
                    title: 'URL',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'footer',
        title: 'Footer',
        type: 'object',
        fields: [
          {
            name: 'footerLinks',
            title: 'Footer Links',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                  },
                  {
                    name: 'url',
                    title: 'URL',
                    type: 'url',
                  },
                ],
              },
            ],
          },
          {
            name: 'socialMediaIcons',
            title: 'Social Media Icons',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'name',
                    title: 'Name',
                    type: 'string',
                  },
                  {
                    name: 'url',
                    title: 'URL',
                    type: 'url',
                  },
                ],
              },
            ],
          },
          {
            name: 'disclaimer',
            title: 'Disclaimer',
            type: 'text',
          },
          {
            name: 'copyright',
            title: 'Copyright',
            type: 'string',
          },
        ],
      },
    ],
  },
]

export const articleSchema = [
  {
    name: 'articlePage',
    title: 'Article Page',
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
          maxLength: 200,
        },
      },
      {
        name: 'header',
        title: 'Header',
        type: 'object',
        fields: [
          {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'menuItems',
            title: 'Menu Items',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                  },
                  {
                    name: 'url',
                    title: 'URL',
                    type: 'url',
                  },
                ],
              },
            ],
          },
          {
            name: 'searchIcon',
            title: 'Search Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'profileIcon',
            title: 'Profile Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        ],
      },
      {
        name: 'mainContent',
        title: 'Main Content',
        type: 'object',
        fields: [
          {
            name: 'articleTitle',
            title: 'Article Title',
            type: 'string',
          },
          {
            name: 'articleMetadata',
            title: 'Article Metadata',
            type: 'object',
            fields: [
              {
                name: 'date',
                title: 'Date',
                type: 'datetime',
              },
              {
                name: 'author',
                title: 'Author',
                type: 'string',
              },
            ],
          },
          {
            name: 'articleBody',
            title: 'Article Body',
            type: 'array',
            of: [
              {type: 'block'},
              {type: 'image', options: {hotspot: true}},
              {type: 'file'},
              {
                type: 'object',
                name: 'embed',
                title: 'Embedded Content',
                fields: [
                  {
                    name: 'url',
                    title: 'URL',
                    type: 'url',
                  },
                  {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                  },
                ],
              },
            ],
          },
          {
            name: 'articleImage',
            title: 'Article Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'chart',
            title: 'Chart',
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Chart Title',
                type: 'string',
              },
              {
                name: 'data',
                title: 'Chart Data',
                type: 'text',
              },
              {
                name: 'source',
                title: 'Chart Source',
                type: 'string',
              },
            ],
          },
          {
            name: 'subscribeBox',
            title: 'Subscribe Box',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Subscribe Text',
                type: 'string',
              },
              {
                name: 'buttonText',
                title: 'Button Text',
                type: 'string',
              },
            ],
          },
          {
            name: 'relatedArticles',
            title: 'Related Articles',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                  },
                  {
                    name: 'link',
                    title: 'Link',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'sidebar',
        title: 'Sidebar',
        type: 'object',
        fields: [
          {
            name: 'sidebarBox',
            title: 'Sidebar Box',
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Box Title',
                type: 'string',
              },
              {
                name: 'buttonText',
                title: 'Button Text',
                type: 'string',
              },
            ],
          },
          {
            name: 'relatedLinks',
            title: 'Related Links',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                  },
                  {
                    name: 'url',
                    title: 'URL',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'footer',
        title: 'Footer',
        type: 'object',
        fields: [
          {
            name: 'footerLinks',
            title: 'Footer Links',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                  },
                  {
                    name: 'url',
                    title: 'URL',
                    type: 'url',
                  },
                ],
              },
            ],
          },
          {
            name: 'socialMediaIcons',
            title: 'Social Media Icons',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'name',
                    title: 'Name',
                    type: 'string',
                  },
                  {
                    name: 'url',
                    title: 'URL',
                    type: 'url',
                  },
                ],
              },
            ],
          },
          {
            name: 'disclaimer',
            title: 'Disclaimer',
            type: 'text',
          },
          {
            name: 'copyright',
            title: 'Copyright',
            type: 'string',
          },
        ],
      },
    ],
  },
]

export default defineConfig({
  name: 'default',
  title: 'ArticlePOC',

  projectId: '3tp7e68c',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    // types: schemaTypes,
    // types: scheema,
    types: articleSchema,
  },
})
