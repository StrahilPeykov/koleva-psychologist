import { defineField, defineType } from 'sanity'
import { CalendarIcon } from '@sanity/icons'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Заглавие на събитието',
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
      name: 'description',
      title: 'Кратко описание',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required().max(300),
      description: 'Кратко описание за списъци и прегледи'
    }),
    defineField({
      name: 'content',
      title: 'Подробно съдържание',
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
            ],
          },
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
        },
        {
          type: 'image',
          options: { 
            hotspot: true,
            metadata: ['blurhash', 'lqip']
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
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
          name: 'schedule',
          title: 'Програма',
          fields: [
            {
              name: 'title',
              title: 'Заглавие на програмата',
              type: 'string'
            },
            {
              name: 'items',
              title: 'Елементи от програмата',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'time',
                      title: 'Време',
                      type: 'string'
                    },
                    {
                      name: 'activity',
                      title: 'Дейност',
                      type: 'string'
                    },
                    {
                      name: 'description',
                      title: 'Описание',
                      type: 'text',
                      rows: 2
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      description: 'Подробна информация за събитието, учебна програма и график'
    }),
    defineField({
      name: 'image',
      title: 'Изображение на събитието',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['blurhash', 'lqip']
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text'
        }
      ]
    }),
    
    // Date and Time
    defineField({
      name: 'startDate',
      title: 'Начална дата',
      type: 'date',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'endDate',
      title: 'Крайна дата',
      type: 'date',
      description: 'Остави празно за еднодневни събития'
    }),
    defineField({
      name: 'startTime',
      title: 'Начален час',
      type: 'string',
      validation: Rule => Rule.required().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
        name: 'time',
        invert: false
      }),
      placeholder: 'HH:MM (напр. 09:00)'
    }),
    defineField({
      name: 'endTime',
      title: 'Краен час',
      type: 'string',
      validation: Rule => Rule.regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
        name: 'time',
        invert: false
      }),
      placeholder: 'HH:MM (напр. 17:00)'
    }),
    defineField({
      name: 'duration',
      title: 'Описание на продължителността',
      type: 'string',
      description: 'напр. "2 часа", "3 уикенда", "60 часа общо"',
      placeholder: 'напр. 2 часа, 3 уикенда, 60 часа общо'
    }),
    
    // Pricing
    defineField({
      name: 'price',
      title: 'Редовна цена (лв.)',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'discountPrice',
      title: 'Ранна птичка / Намалена цена (лв.)',
      type: 'number',
      validation: Rule => Rule.min(0)
    }),
    defineField({
      name: 'discountDeadline',
      title: 'Краен срок за отстъпка',
      type: 'date',
      description: 'До кога важи намалената цена',
      hidden: ({ document }) => !document?.discountPrice
    }),
    
    // Location
    defineField({
      name: 'location',
      title: 'Тип местоположение',
      type: 'string',
      options: {
        list: [
          { title: '💻 Онлайн (Zoom)', value: 'online' },
          { title: '🏢 Бургас', value: 'burgas' },
          { title: '🏛️ Пловдив', value: 'plovdiv' },
          { title: '🏙️ София', value: 'sofia' },
          { title: '📍 Друго', value: 'other' },
        ],
      },
      validation: Rule => Rule.required(),
      initialValue: 'burgas'
    }),
    defineField({
      name: 'locationDetails',
      title: 'Детайли за местоположението',
      type: 'object',
      fields: [
        {
          name: 'venue',
          title: 'Име на мястото',
          type: 'string'
        },
        {
          name: 'address',
          title: 'Адрес',
          type: 'text',
          rows: 2
        },
        {
          name: 'instructions',
          title: 'Специални инструкции',
          type: 'text',
          rows: 3,
          description: 'Паркиране, достъп до сградата и др.'
        },
        {
          name: 'mapUrl',
          title: 'Google Maps URL',
          type: 'url'
        }
      ]
    }),
    
    // Event Details
    defineField({
      name: 'eventType',
      title: 'Тип събитие',
      type: 'string',
      options: {
        list: [
          { title: '📚 Семинар', value: 'seminar' },
          { title: '🛠️ Работилница', value: 'workshop' },
          { title: '📖 Курс', value: 'course' },
          { title: '💻 Уебинар', value: 'webinar' },
          { title: '🎯 Конференция', value: 'conference' },
          { title: '👥 Групова терапия', value: 'group-therapy' },
        ],
      },
      validation: Rule => Rule.required(),
      initialValue: 'seminar'
    }),
    defineField({
      name: 'capacity',
      title: 'Максимален брой участници',
      type: 'number',
      validation: Rule => Rule.min(1).max(100),
      description: 'Остави празно за неограничен капацитет'
    }),
    defineField({
      name: 'currentRegistrations',
      title: 'Текущи записвания',
      type: 'number',
      validation: Rule => Rule.min(0),
      initialValue: 0,
      description: 'Следи записванията'
    }),
    
    // Target Audience
    defineField({
      name: 'targetAudience',
      title: 'Целева аудитория',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: '🎓 Студенти по психология', value: 'students' },
          { title: '🧠 Практикуващи психолози', value: 'psychologists' },
          { title: '💼 Психотерапевти', value: 'psychotherapists' },
          { title: '👥 Широка публика', value: 'general' },
          { title: '🏥 Медицински професионалисти', value: 'medical' },
          { title: '👨‍👩‍👧‍👦 Семейства', value: 'families' },
          { title: '👩‍🏫 Педагози', value: 'educators' },
          { title: '💼 HR професионалисти', value: 'hr' },
        ],
      },
      validation: Rule => Rule.required().min(1)
    }),
    
    // Certification
    defineField({
      name: 'certificate',
      title: 'Информация за сертификат',
      type: 'object',
      fields: [
        {
          name: 'provided',
          title: 'Предоставя се сертификат',
          type: 'boolean',
          initialValue: false
        },
        {
          name: 'type',
          title: 'Тип сертификат',
          type: 'string',
          options: {
            list: [
              { title: 'Сертификат за присъствие', value: 'attendance' },
              { title: 'Сертификат за завършване', value: 'completion' },
              { title: 'Професионален сертификат', value: 'professional' },
              { title: 'Европейски признат', value: 'european' },
            ]
          },
          hidden: ({ parent }) => !parent?.provided
        },
        {
          name: 'hours',
          title: 'Часове обучение',
          type: 'number',
          hidden: ({ parent }) => !parent?.provided
        },
        {
          name: 'issuingOrganization',
          title: 'Издаваща организация',
          type: 'string',
          hidden: ({ parent }) => !parent?.provided
        }
      ]
    }),
    
    // Status and Organization
    defineField({
      name: 'status',
      title: 'Статус на събитието',
      type: 'string',
      options: {
        list: [
          { title: '📅 Предстоящо', value: 'upcoming' },
          { title: '✅ Записването е отворено', value: 'open' },
          { title: '🔒 Записването е затворено', value: 'closed' },
          { title: '❌ Отменено', value: 'cancelled' },
          { title: '✅ Завършено', value: 'completed' },
          { title: '⏳ В ход', value: 'in-progress' },
        ],
      },
      initialValue: 'upcoming',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'featured',
      title: 'Препоръчано събитие',
      type: 'boolean',
      description: 'Препоръчаните събития се показват на началната страница',
      initialValue: false
    }),
    defineField({
      name: 'tags',
      title: 'Тагове',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    })
  ],
  preview: {
    select: {
      title: 'title',
      startDate: 'startDate',
      eventType: 'eventType',
      status: 'status',
      media: 'image',
      featured: 'featured'
    },
    prepare({ title, startDate, eventType, status, media, featured }) {
      const statusIcons = {
        upcoming: '📅',
        open: '✅',
        closed: '🔒', 
        cancelled: '❌',
        completed: '✅',
        'in-progress': '⏳'
      }
      
      const typeIcons = {
        seminar: '📚',
        workshop: '🛠️',
        course: '📖',
        webinar: '💻',
        conference: '🎯',
        'group-therapy': '👥'
      }
      
      const formattedDate = startDate ? new Date(startDate).toLocaleDateString('bg-BG') : 'Без дата'
      
      return {
        title: title,
        subtitle: `${formattedDate} • ${typeIcons[eventType as keyof typeof typeIcons] || ''} ${eventType} • ${statusIcons[status as keyof typeof statusIcons] || ''} ${status}${featured ? ' • ⭐' : ''}`,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Дата на събитието, предстоящи първо',
      name: 'dateAsc',
      by: [{ field: 'startDate', direction: 'asc' }]
    },
    {
      title: 'Дата на събитието, скорошни първо',
      name: 'dateDesc',
      by: [{ field: 'startDate', direction: 'desc' }]
    },
    {
      title: 'Приоритет по статус',
      name: 'statusPriority',
      by: [
        { field: 'status', direction: 'asc' },
        { field: 'startDate', direction: 'asc' }
      ]
    }
  ]
})