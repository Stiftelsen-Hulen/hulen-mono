import { Rule } from 'sanity'

export default {
  title: 'Fordeler (Benefits)',
  type: 'object',
  name: 'benefitsSection',
  description: 'List out the benefits of Hulen here',
  fields: [
    { title: 'Tittel (Header)', name: 'header', type: 'localeString', validation: (rule: Rule) => rule.required() },
    {
      title: 'Ikon (Icon)',
      type: 'image',
      image: 'icon',
      name: 'descImage',
      description: 'The icon to display. Please only upload svg icons here',
    },
    {
      type: 'localeBlock',
      name: 'content',
      title: 'Innhold (Content)',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
