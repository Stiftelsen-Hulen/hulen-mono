export default {
  title: 'Side Ikke Funnet (Page Not found)',
  name: 'notFoundPage',
  type: 'document',
  description:
    'Information display when page is not found. Only the latest updated document will be used',
  fields: [
    {
      title: 'Ikke Funnet Bilde (Not Found Image)',
      type: 'imageWithLocaleAlt',
      name: 'notFoundImage',
      description: 'The image that appears when not found',
    },

    {
      type: 'localeString',
      title: 'Info Tekst (Info Text)',
      name: 'infotext',
      description: 'The information text provided if the page is not found',
    },
    {
      type: 'localeString',
      title: 'Tilbakeknappstittel (Back Button Label)',
      name: 'backbuttonlabel',
      description: 'The label of the back button',
    },
  ],
}
