import { defineType } from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'cardImage',
      title: 'Card image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: "string"
    },
    {
      name: 'slug',
      title: 'Slug',
      type: "string"
    },
    {
      name: 'tech',
      title: 'Tech',
      type: "string"
    },
    {
      name: 'mobileHeaderImage',
      title: 'Mobile header image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tabletHeaderImage',
      title: 'Tablet header image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'desktopHeaderImage',
      title: 'Desktop header image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: "string"
    },
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text'
    },
    {
      name: 'coffee',
      title: 'cups of coffee',
      type: 'number'
    },
    {
      name: 'workHours',
      title: 'hours of work',
      type: 'number'
    }
  ],
})
