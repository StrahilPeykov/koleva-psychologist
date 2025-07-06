// sanity/schemas/event.ts - Enhanced event schema for psychology seminars and courses

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
      title: 'Event Title',
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
      title: 'Short Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required().max(300),
      description: 'Brief description for listings and previews'
    }),
    defineField({
      name: 'content',
      title: 'Detailed Content',
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
          title: 'Schedule Block',
          fields: [
            {
              name: 'title',
              title: 'Schedule Title',
              type: 'string'
            },
            {
              name: 'items',
              title: 'Schedule Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'time',
                      title: 'Time',
                      type: 'string'
                    },
                    {
                      name: 'activity',
                      title: 'Activity',
                      type: 'string'
                    },
                    {
                      name: 'description',
                      title: 'Description',
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
      description: 'Detailed event information, curriculum, and schedule'
    }),
    defineField({
      name: 'image',
      title: 'Event Image',
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
      title: 'Start Date',
      type: 'date',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave empty for single-day events'
    }),
    defineField({
      name: 'startTime',
      title: 'Start Time',
      type: 'string',
      validation: Rule => Rule.required().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
        name: 'time',
        invert: false
      }),
      placeholder: 'HH:MM (e.g., 09:00)'
    }),
    defineField({
      name: 'endTime',
      title: 'End Time',
      type: 'string',
      validation: Rule => Rule.regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
        name: 'time',
        invert: false
      }),
      placeholder: 'HH:MM (e.g., 17:00)'
    }),
    defineField({
      name: 'duration',
      title: 'Duration Description',
      type: 'string',
      description: 'e.g., "2 hours", "3 weekends", "60 hours total"',
      placeholder: 'e.g., 2 hours, 3 weekends, 60 hours total'
    }),
    
    // Pricing
    defineField({
      name: 'price',
      title: 'Regular Price (BGN)',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'discountPrice',
      title: 'Early Bird / Discount Price (BGN)',
      type: 'number',
      validation: Rule => Rule.min(0)
    }),
    defineField({
      name: 'discountDeadline',
      title: 'Discount Deadline',
      type: 'date',
      description: 'Until when the discount price is valid',
      hidden: ({ document }) => !document?.discountPrice
    }),
    defineField({
      name: 'installments',
      title: 'Installment Options',
      type: 'object',
      fields: [
        {
          name: 'available',
          title: 'Installments Available',
          type: 'boolean',
          initialValue: false
        },
        {
          name: 'options',
          title: 'Payment Plans',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'payments',
                  title: 'Number of Payments',
                  type: 'number'
                },
                {
                  name: 'amount',
                  title: 'Amount per Payment',
                  type: 'number'
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'string'
                }
              ]
            }
          ],
          hidden: ({ parent }) => !parent?.available
        }
      ]
    }),
    
    // Location
    defineField({
      name: 'location',
      title: 'Location Type',
      type: 'string',
      options: {
        list: [
          { title: '💻 Online (Zoom)', value: 'online' },
          { title: '🏢 Burgas', value: 'burgas' },
          { title: '🏛️ Plovdiv', value: 'plovdiv' },
          { title: '🏙️ Sofia', value: 'sofia' },
          { title: '📍 Other', value: 'other' },
        ],
      },
      validation: Rule => Rule.required(),
      initialValue: 'burgas'
    }),
    defineField({
      name: 'locationDetails',
      title: 'Location Details',
      type: 'object',
      fields: [
        {
          name: 'venue',
          title: 'Venue Name',
          type: 'string'
        },
        {
          name: 'address',
          title: 'Address',
          type: 'text',
          rows: 2
        },
        {
          name: 'instructions',
          title: 'Special Instructions',
          type: 'text',
          rows: 3,
          description: 'Parking, building access, etc.'
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
      name: 'language',
      title: 'Event Language',
      type: 'string',
      options: {
        list: [
          { title: 'Bulgarian', value: 'bg' },
          { title: 'English', value: 'en' },
          { title: 'Russian', value: 'ru' },
        ],
      },
      validation: Rule => Rule.required(),
      initialValue: 'bg'
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: '📚 Seminar', value: 'seminar' },
          { title: '🛠️ Workshop', value: 'workshop' },
          { title: '📖 Course', value: 'course' },
          { title: '💻 Webinar', value: 'webinar' },
          { title: '🎯 Conference', value: 'conference' },
          { title: '👥 Group Therapy', value: 'group-therapy' },
        ],
      },
      validation: Rule => Rule.required(),
      initialValue: 'seminar'
    }),
    defineField({
      name: 'capacity',
      title: 'Maximum Participants',
      type: 'number',
      validation: Rule => Rule.min(1).max(100),
      description: 'Leave empty for unlimited capacity'
    }),
    defineField({
      name: 'currentRegistrations',
      title: 'Current Registrations',
      type: 'number',
      validation: Rule => Rule.min(0),
      initialValue: 0,
      description: 'Keep track of registrations'
    }),
    
    // Target Audience
    defineField({
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: '🎓 Psychology Students', value: 'students' },
          { title: '🧠 Practicing Psychologists', value: 'psychologists' },
          { title: '💼 Psychotherapists', value: 'psychotherapists' },
          { title: '👥 General Public', value: 'general' },
          { title: '🏥 Medical Professionals', value: 'medical' },
          { title: '👨‍👩‍👧‍👦 Families', value: 'families' },
          { title: '👩‍🏫 Educators', value: 'educators' },
          { title: '💼 HR Professionals', value: 'hr' },
        ],
      },
      validation: Rule => Rule.required().min(1)
    }),
    
    // Prerequisites and Requirements
    defineField({
      name: 'prerequisites',
      title: 'Prerequisites',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'What participants need to know or have before attending'
    }),
    defineField({
      name: 'materials',
      title: 'Materials Provided',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'What materials are included in the price'
    }),
    defineField({
      name: 'requirements',
      title: 'What to Bring',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'What participants should bring'
    }),
    
    // Certification
    defineField({
      name: 'certificate',
      title: 'Certificate Information',
      type: 'object',
      fields: [
        {
          name: 'provided',
          title: 'Certificate Provided',
          type: 'boolean',
          initialValue: false
        },
        {
          name: 'type',
          title: 'Certificate Type',
          type: 'string',
          options: {
            list: [
              { title: 'Attendance Certificate', value: 'attendance' },
              { title: 'Completion Certificate', value: 'completion' },
              { title: 'Professional Certificate', value: 'professional' },
              { title: 'European Recognized', value: 'european' },
            ]
          },
          hidden: ({ parent }) => !parent?.provided
        },
        {
          name: 'hours',
          title: 'Training Hours',
          type: 'number',
          hidden: ({ parent }) => !parent?.provided
        },
        {
          name: 'issuingOrganization',
          title: 'Issuing Organization',
          type: 'string',
          hidden: ({ parent }) => !parent?.provided
        },
        {
          name: 'requirements',
          title: 'Requirements for Certificate',
          type: 'text',
          rows: 2,
          hidden: ({ parent }) => !parent?.provided,
          placeholder: 'e.g., 80% attendance, final assignment'
        }
      ]
    }),
    
    // Registration
    defineField({
      name: 'registrationDeadline',
      title: 'Registration Deadline',
      type: 'date'
    }),
    defineField({
      name: 'registrationLink',
      title: 'External Registration Link',
      type: 'url',
      description: 'Use if registration is handled externally'
    }),
    defineField({
      name: 'contactForRegistration',
      title: 'Registration Contact',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'email'
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string'
        },
        {
          name: 'instructions',
          title: 'Registration Instructions',
          type: 'text',
          rows: 3
        }
      ]
    }),
    
    // Status and Organization
    defineField({
      name: 'status',
      title: 'Event Status',
      type: 'string',
      options: {
        list: [
          { title: '📅 Upcoming', value: 'upcoming' },
          { title: '✅ Registration Open', value: 'open' },
          { title: '🔒 Registration Closed', value: 'closed' },
          { title: '❌ Cancelled', value: 'cancelled' },
          { title: '✅ Completed', value: 'completed' },
          { title: '⏳ In Progress', value: 'in-progress' },
        ],
      },
      initialValue: 'upcoming',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'featured',
      title: 'Featured Event',
      type: 'boolean',
      description: 'Featured events appear prominently on the homepage',
      initialValue: false
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }),
    
    // SEO
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
          validation: Rule => Rule.max(60),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: Rule => Rule.max(160),
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      startDate: 'startDate',
      eventType: 'eventType',
      status: 'status',
      media: 'image',
      featured: 'featured',
      language: 'language'
    },
    prepare({ title, startDate, eventType, status, media, featured, language }) {
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
      
      const formattedDate = startDate ? new Date(startDate).toLocaleDateString('en-GB') : 'No date'
      
      return {
        title: title,
        subtitle: `${formattedDate} • ${typeIcons[eventType as keyof typeof typeIcons] || ''} ${eventType} • ${statusIcons[status as keyof typeof statusIcons] || ''} ${status}${featured ? ' • ⭐' : ''} • ${language?.toUpperCase()}`,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Event Date, Upcoming First',
      name: 'dateAsc',
      by: [{ field: 'startDate', direction: 'asc' }]
    },
    {
      title: 'Event Date, Recent First',
      name: 'dateDesc',
      by: [{ field: 'startDate', direction: 'desc' }]
    },
    {
      title: 'Status Priority',
      name: 'statusPriority',
      by: [
        { field: 'status', direction: 'asc' },
        { field: 'startDate', direction: 'asc' }
      ]
    }
  ]
})