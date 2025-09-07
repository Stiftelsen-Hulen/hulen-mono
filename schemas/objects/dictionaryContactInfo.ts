export default {
  type: 'object',
  title: 'Kontaktinformasjon (Contact info)',
  name: 'contactInfo',
  fields: [
    {
      title: 'Tittel (Title)',
      name: 'title',
      type: 'localeString',
    },
    {
      title: 'Navn (Name)',
      name: 'name',
      type: 'string',
    },
    {
      type: 'string',
      name: 'email',
      title: 'Epost (email)',
    },
    {
      title: 'Telefon (Phone)',
      name: 'phone',
      type: 'string',
    },
  ],
}
