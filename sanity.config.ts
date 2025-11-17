import { defineConfig, Rule } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export const supportedLanguages = [
  { id: 'en', title: 'English', longTitle: 'Engelsk (English)', },
  { id: 'no', title: 'Norwegian', longTitle: 'Norsk (Norwegian)', isDefault: true },
]

const localeString = {
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Oversettelser (Translations)',
      name: 'translations'
    }
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map(lang => ({
    title: lang.longTitle,
    name: lang.id,
    type: 'string',
    fieldset: lang.isDefault ? null : 'translations',
    validation: (rule: Rule) => rule.required()
  }))
}

const localeBlock = {
  title: 'Localized BlockContent',
  name: 'localeBlock',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Oversettelser (Translations)',
      name: 'translations'
    }
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map(lang => ({
    title: lang.longTitle,
    name: lang.id,
    type: 'array',
    of: [{ type: 'block' }, { type: 'localeImage' }],
    fieldset: lang.isDefault ? null : 'translations',
    validation: (rule: Rule) => rule.required()
  }))
}

const localeImage = {
  title: "Localized Image",
  name: 'localeImage',
  type: 'object',
  fields: [{
    title: 'image',
    name: 'Image',
    type: 'image',
  }, {
    title: 'Alternativ Tekst (Alt Text)',
    type: "string",
    name: "altText",
    description: "Accessabillity text describing the image in case the image is missing or doesn't render"
  },
  {
    type: 'string',
    description: 'Adding a url here will transform the entire image into a clickable link. If linking internally (at hulen.no), you only need to add f.ex "/contactUs". If linking externally, you need the full https://google.com type link',
    name: "linkUrl",
  }]

}

const imageWithLocaleAlt = {
  type: 'image',
  name: 'imageWithLocaleAlt',
  title: 'Bilde (Image)',
  fields: [{
    title: 'Alternativ Tekst (Alt Text)',
    name: "altText",
    type: "localeString",
    description: "Accessabillity text describing the image in case the image is missing or doesn't render"
  }]
}

export default defineConfig({
  name: 'default',
  title: 'hulen_sanity_studio',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool()
  ],

  schema: {
    types: [
      localeString,
      localeBlock,
      localeImage,
      imageWithLocaleAlt,
      ...schemaTypes
    ]
  }
})