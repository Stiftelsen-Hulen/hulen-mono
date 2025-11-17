import { Rule } from 'sanity'

export default {
  title: 'Bli Frivillig (Join Us)',
  name: 'joinUsPage',
  type: 'document',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'title',
      description: 'title of object, for storage purposes onsly',
    },
    {
      type: 'localeString',
      name: 'pageTitle',
      title: 'Tittel (Page Header)',
      description: 'This is the top header of the page',
      validation: (rule: Rule) => rule.required(),
    },
    {
      description: 'The ingress of the page. The introductory text at the top',
      type: 'localeBlock',
      title: 'Ingress',
      name: 'ingress',
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: 'Navigeringsknapper (Navigation Buttons)',
      name: 'navigationButtons',
      description: 'Clickable navigation button, be careful when touching these',
      type: 'array',
      of: [{ type: 'joinUsNavButton' }],
    },
    {
      type: 'joinUsSection',
      name: 'joinSection',
      title: 'Bli Med! (Join! section)',
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: 'Stillings-Forord (Position preface)',
      type: 'positionPreface',
      description: 'Info text before positions are listed',
      name: 'positionPreface',
    },
    {
      type: 'array',
      title: 'Stillinger (Positions)',
      description: 'Each available position',
      name: 'positions',
      of: [{ type: 'positionEl' }],
    },
    {
      type: 'benefitsSection',
      name: 'benefitsSection',
      title: 'Fordeler (Benefits)',
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'joinEmailForm',
      name: 'joinEmailForm',
      title: 'Epostskjema (Email Form)',
      description: 'Email form to apply for positions at Hulen',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
