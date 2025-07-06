import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
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
      ],
    }),
    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'date',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'time',
      title: 'Event Time',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., "2 hours", "3 weekends", "60 hours"'
    }),
    defineField({
      name: 'price',
      title: 'Price (BGN)',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'discountPrice',
      title: 'Discount Price (BGN)',
      type: 'number',
      validation: Rule => Rule.min(0)
    }),
    defineField({
      name: 'discountDeadline',
      title: 'Discount Deadline',
      type: 'date',
      description: 'Until when the discount price is valid'
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        list: [
          { title: 'Online (Zoom)', value: 'online' },
          { title: 'Burgas', value: 'burgas' },
          { title: 'Plovdiv', value: 'plovdiv' },
          { title: 'Sofia', value: 'sofia' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'locationDetails',
      title: 'Location Details',
      type: 'string',
      description: 'Specific address or platform details'
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
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Seminar', value: 'seminar' },
          { title: 'Workshop', value: 'workshop' },
          { title: 'Course', value: 'course' },
          { title: 'Webinar', value: 'webinar' },
          { title: 'Conference', value: 'conference' },
        ],
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Psychology Students', value: 'students' },
          { title: 'Practicing Psychologists', value: 'psychologists' },
          { title: 'Psychotherapists', value: 'psychotherapists' },
          { title: 'General Public', value: 'general' },
          { title: 'Medical Professionals', value: 'medical' },
        ],
      }
    }),
    defineField({
      name: 'certificate',
      title: 'Certificate Details',
      type: 'text',
      description: 'Information about certificates provided'
    }),
    defineField({
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
      description: 'External registration link if needed'
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Registration Open', value: 'open' },
          { title: 'Registration Closed', value: 'closed' },
          { title: 'Completed', value: 'completed' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
      initialValue: 'upcoming',
      validation: Rule => Rule.required()
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'image'
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : 'No date set'
      }
    }
  },
  orderings: [
    {
      title: 'Date, New',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }]
    },
    {
      title: 'Date, Old',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }]
    }
  ]
})