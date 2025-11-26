export default {
  title: 'Tech Kategori (Tech Category)',
  name: 'techCategory',
  type: 'object',
  fields: [
    {
      type: 'string',
      title: 'Kategori (Category)',
      name: 'category',
      description: 'For grouping equipment, name your category here. ',
    },
    {
      type: 'array',
      title: 'Oppføringer (Entries)',
      name: 'entries',
      description: 'Insert whatever you need here',
      of: [{ type: 'string' }],
    },
  ],
}
