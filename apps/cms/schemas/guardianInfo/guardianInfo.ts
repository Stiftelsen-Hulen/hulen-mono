export default {
  type: 'document',
  name: 'guardianInfo',
  title: 'Verge (Guardian)',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'title',
      description: 'title of object, for storage purposes only',
    }, {
      type: 'localeString',
      name: 'header',
      title: 'Tittel (Page header)',
      description: 'The big bold letters at the top',
    }, {
      type: 'localeBlock',
      name: 'intro',
      title: 'Introtekst (Intro Text)',
      description: 'The text below the big bold letters at the top'
    }, {
      type: 'localeString',
      name: 'subHeading',
      title: "Undertittel (Subheader)",
      description: 'The subheading beside the image'
    }, {
      type: 'localeBlock',
      name: 'description',
      title: 'Beskrivelse (Description)',
      description: 'The text below the subheading and beside the image'
    }, {
      type: 'imageWithLocaleAlt',
      name: 'guardianImage',
      title: 'Bilde (Image)',
      description: 'The image beside the text',
    }
  ],
}
