import { Rule } from 'sanity'

export default {
  title: 'Bli Med (Join! section)',
  type: 'object',
  name: 'joinUsSection',
  fields: [
    {
      title: 'Tittel (Header)',
      name: 'header',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'image',
      name: 'icon',
      title: 'Ikon (Icon)',
      description: 'The icon to display. Please only upload svg icons here',
    },
    {
      type: 'localeBlock',
      name: 'content',
      title: 'Innhold (Content)',
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'localeString',
      name: 'emailPreface',
      title: 'Epost-Forord (Preface Email)',
      description: 'Preface before email. Excluded from locale text',
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: 'Konaktaddresse (Contact Address)',
      name: 'email',
      type: 'string',
      description: 'Contact adress. Only put in the mail here',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
