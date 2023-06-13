import { defineType } from "sanity"

export default defineType({
    name: 'aboutPage',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'avatar',
            title: 'Avatar',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'title',
            title: 'Title heading',
            type: 'string'
        },
        {
            name: 'paragraph',
            title: 'Paragraph',
            type: 'text'
        },
    ]
})