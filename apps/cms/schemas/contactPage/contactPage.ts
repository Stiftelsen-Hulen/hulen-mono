import { Rule } from 'sanity'

//This is the schema for the contact page. There is only this, so we bundle everything into it
export default {
  title: 'Kontakt Oss (Contacts)',
  name: 'contactPage',
  type: 'document',
  description: 'Contact page information. Only the newest published version will be available',
  fields: [
    {
      type: 'string',
      title: 'Title',
      name: 'title',
    },
    {
      type: 'localeBlock',
      title: 'Toppinfo (Header Info)',
      name: 'headerInfoBlock',
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'object',
      title: 'Booking Info',
      name: 'booking',
      fields: [
        {
          name: 'title',
          type: 'localeString',
          title: 'Title',
        },
        {
          type: 'string',
          name: 'email',
          title: 'Epost (Email)',
        },
      ],
    },
    {
      type: 'array',
      title: 'Kontaktinfo (Contact Info)',
      name: 'contactList',
      of: [{ type: 'contactInfo' }],
      options: {
        modal: { type: 'dialog', width: '80%' }, //Makes the modal type a popover
      },
    },
  ],
}
