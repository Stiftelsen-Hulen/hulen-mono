export default {
  type: 'object',
  title: 'Position Type',
  name: 'positionType',
  fields: [
    {
      title: 'Tittel (Title)',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Nøkkel (Key)',
      name: 'key',
      type: 'string',
    },
    {
      type: 'string',
      name: 'en',
      title: 'Engelsk (English)',
    },
    {
      title: 'Norsk (Norwegian)',
      name: 'no',
      type: 'string',
    },
  ],
}
