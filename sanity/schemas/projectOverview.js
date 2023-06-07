import { defineType } from 'sanity'

export default defineType({
  name: 'projectOverview',
  title: 'Project overview',
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
        name: 'tech',
        title: 'Tech',
        type: "string"
    },
  ],
})
