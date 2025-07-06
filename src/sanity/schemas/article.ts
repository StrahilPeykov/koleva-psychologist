// sanity/schemas/article.ts - Enhanced article schema for psychology content

import { defineField, defineType } from 'sanity'
import { DocumentIcon, TranslateIcon, SearchIcon, ClipboardIcon } from '@sanity/icons'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().max(100)
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]+/g, '')
          .slice(0, 96)
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(300).warning('Keep excerpts under 300 characters for better SEO')
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                    validation: Rule => Rule.uri({
                      scheme: ['http', 'https', 'mailto', 'tel']
                    })
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    type: 'boolean',
                    initialValue: true
                  }
                ],
              },
              {
                title: 'Internal Link',
                name: 'internalLink',
                type: 'object',
                fields: [
                  {
                    title: 'Page',
                    name: 'reference',
                    type: 'reference',
                    to: [
                      { type: 'article' },
                      { type: 'event' }
                    ]
                  }
                ]
              }
            ],
          },
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
        },
        {
          type: 'image',
          title: 'Image',
          options: { 
            hotspot: true,
            metadata: ['blurhash', 'lqip', 'palette']
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              description: 'Important for SEO and accessibility',
              validation: Rule => Rule.required()
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption'
            }
          ]
        },
        {
          type: 'object',
          name: 'callout',
          title: 'Callout',
          fields: [
            {
              name: 'type',
              type: 'string',
              options: {
                list: [
                  { title: 'Note', value: 'note' },
                  { title: 'Warning', value: 'warning' },
                  { title: 'Tip', value: 'tip' },
                  { title: 'Important', value: 'important' }
                ]
              },
              initialValue: 'note'
            },
            {
              name: 'content',
              type: 'text',
              rows: 3
            }
          ],
          preview: {
            select: {
              type: 'type',
              content: 'content'
            },
            prepare({ type, content }) {
              return {
                title: type ? type.charAt(0).toUpperCase() + type.slice(1) : 'Callout',
                subtitle: content
              }
            }
          }
        }
      ],
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['blurhash', 'lqip', 'palette']
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'Important for SEO and accessibility'
        }
      ]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required(),
      initialValue: () => new Date().toISOString()
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'Bulgarian', value: 'bg' },
          { title: 'English', value: 'en' },
        ],
      },
      validation: Rule => Rule.required(),
      initialValue: 'bg'
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { 
            title: 'Original Article', 
            value: 'original',
          },
          { 
            title: 'Translation', 
            value: 'translation',
          },
          { 
            title: 'Research', 
            value: 'research',
          },
          { 
            title: 'Clinical Notes', 
            value: 'clinical',
          },
        ],
      },
      validation: Rule => Rule.required(),
      initialValue: 'original'
    }),
    defineField({
      name: 'originalSource',
      title: 'Original Source',
      type: 'object',
      description: 'Required for translations - provide original source information',
      fields: [
        {
          name: 'title',
          title: 'Original Title',
          type: 'string'
        },
        {
          name: 'author',
          title: 'Original Author',
          type: 'string'
        },
        {
          name: 'publication',
          title: 'Publication',
          type: 'string',
          description: 'Journal, website, or book name'
        },
        {
          name: 'year',
          title: 'Publication Year',
          type: 'number'
        },
        {
          name: 'url',
          title: 'Original URL',
          type: 'url'
        },
        {
          name: 'language',
          title: 'Original Language',
          type: 'string',
          options: {
            list: [
              { title: 'English', value: 'en' },
              { title: 'Russian', value: 'ru' },
              { title: 'German', value: 'de' },
              { title: 'French', value: 'fr' }
            ]
          }
        }
      ],
      hidden: ({ document }) => document?.category !== 'translation'
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      validation: Rule => Rule.max(10).warning('Too many tags can dilute SEO value')
    }),
    defineField({
      name: 'readingTime',
      title: 'Estimated Reading Time (minutes)',
      type: 'number',
      description: 'Will be auto-calculated if left empty',
      validation: Rule => Rule.min(1).max(60)
    }),
    defineField({
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      description: 'Featured articles appear prominently on the homepage',
      initialValue: false
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: Rule => Rule.max(60).warning('Meta titles should be under 60 characters'),
          description: 'Override the default title for SEO'
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: Rule => Rule.max(160).warning('Meta descriptions should be under 160 characters'),
          description: 'Override the excerpt for SEO'
        },
        {
          name: 'keywords',
          title: 'Focus Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags'
          },
          description: 'Main keywords for this article'
        }
      ]
    }),
    defineField({
      name: 'relatedArticles',
      title: 'Related Articles',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'article' }]
        }
      ],
      validation: Rule => Rule.max(3)
    })
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
      category: 'category',
      media: 'image',
      featured: 'featured'
    },
    prepare({ title, language, category, media, featured }) {
      const categoryIcons = {
        original: '📝',
        translation: '🌐', 
        research: '🔬',
        clinical: '📋'
      }
      
      return {
        title: title,
        subtitle: `${language?.toUpperCase()} • ${categoryIcons[category as keyof typeof categoryIcons] || ''} ${category}${featured ? ' • ⭐ Featured' : ''}`,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }]
    },
    {
      title: 'Published Date, Old',
      name: 'publishedAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }]
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }]
    }
  ]
})