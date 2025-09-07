import { Rule } from 'sanity'

export default {
  title: 'Stillings-Forord (Position preface)',
  type: 'object',
  name: 'positionPreface',
  description: 'Introduction before positions',
  fields: [
    {
      title: 'Tittel (Header)',
      name: 'header',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'localeBlock',
      name: 'content',
      title: 'Innhold (Content)',
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: 'Bilde (Image)',
      type: 'image',
      image: 'icon',
      name: 'descImage',
      description: 'The icon to display. Please only upload svg icons here',
    },
  ],
}
