import { Rule } from 'sanity'

export default {
  type: 'object',
  title: 'Bli Med Epostskjema (Join Us email form)',
  name: 'joinEmailForm',
  fields: [
    {
      type: 'localeString',
      name: 'emailFormTitle',
      title: 'Skjematittel (Form Title)',
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'localeString',
      name: 'emailFormLabel',
      title: 'Epostetikett (Email Label)',
      validation: (rule: Rule) => rule.required(),

    },
    {
      type: 'localeString',
      name: 'nameFormLabel',
      title: 'Navnetikett (Name Label)',
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'localeString',
      name: 'ageFormLabel',
      title: 'Aldersetikett (Age Label)',
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'localeString',
      name: 'jobFormLabel',
      title: 'Stillingsetikett (Position Label)',
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'localeString',
      name: 'relevantInfoFormLabel',
      title: 'Relevant-info-etikett (Relevant Info Label)',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
