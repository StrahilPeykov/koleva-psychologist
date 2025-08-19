import { defineField, defineType } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { 
            title: 'Авторска статия', 
            value: 'original',
          },
          { 
            title: 'Превод', 
            value: 'translation',
          },
          { 
            title: 'Научно изследване', 
            value: 'research',
          },
          { 
            title: 'Клинични бележки', 
            value: 'clinical',
          },
        ],
      },
      validation: Rule => Rule.required(),
      initialValue: 'original'
    }),
    defineField({
      name: 'originalSource',
      title: 'Оригинален източник',
      type: 'object',
      description: 'Задължително за преводи - информация за оригиналния източник',
      fields: [
        {
          name: 'title',
          title: 'Оригинално заглавие',
          type: 'string'
        },
        {
          name: 'author',
          title: 'Оригинален автор',
          type: 'string'
        },
        {
          name: 'publication',
          title: 'Публикация',
          type: 'string',
          description: 'Списание, уебсайт или книга'
        },
        {
          name: 'year',
          title: 'Година на публикуване',
          type: 'number'
        },
        {
          name: 'url',
          title: 'Оригинален URL',
          type: 'url'
        },
        {
          name: 'language',
          title: 'Оригинален език',
          type: 'string',
          options: {
            list: [
              { title: 'Английски', value: 'en' },
              { title: 'Руски', value: 'ru' },
              { title: 'Немски', value: 'de' },
              { title: 'Френски', value: 'fr' }
            ]
          }
        }
      ],
      hidden: ({ document }) => document?.category !== 'translation'
    }),
    defineField({
      name: 'tags',
      title: 'Тагове',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      validation: Rule => Rule.max(10).warning('Твърде много тагове могат да навредят на SEO')
    }),
    defineField({
      name: 'readingTime',
      title: 'Време за четене (минути)',
      type: 'number',
      description: 'Ще се изчисли автоматично ако остане празно',
      validation: Rule => Rule.min(1).max(60)
    }),
    defineField({
      name: 'featured',
      title: 'Препоръчана статия',
      type: 'boolean',
      description: 'Препоръчаните статии се показват на началната страница',
      initialValue: false
    }),
    defineField({
      name: 'seo',
      title: 'SEO настройки',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta заглавие',
          type: 'string',
          validation: Rule => Rule.max(60).warning('Meta заглавията трябва да са под 60 символа'),
          description: 'Замести заглавието по подразбиране за SEO'
        },
        {
          name: 'metaDescription',
          title: 'Meta описание',
          type: 'text',
          rows: 3,
          validation: Rule => Rule.max(160).warning('Meta описанията трябва да са под 160 символа'),
          description: 'Замести краткото описание за SEO'
        },
        {
          name: 'keywords',
          title: 'Ключови думи',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags'
          },
          description: 'Основни ключови думи за тази статия'
        }
      ]
    }),
    defineField({
      name: 'relatedArticles',
      title: 'Свързани статии',
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
      category: 'category',
      media: 'image',
      featured: 'featured'
    },
    prepare({ title, category, media, featured }) {
      const categoryIcons = {
        original: '📝',
        translation: '🌐', 
        research: '🔬',
        clinical: '📋'
      }
      
      return {
        title: title,
        subtitle: `${categoryIcons[category as keyof typeof categoryIcons] || ''} ${category}${featured ? ' • ⭐ Препоръчана' : ''}`,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Дата на публикуване, нови',
      name: 'publishedDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }]
    },
    {
      title: 'Дата на публикуване, стари',
      name: 'publishedAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }]
    },
    {
      title: 'Заглавие А-Я',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }]
    }
  ]
})