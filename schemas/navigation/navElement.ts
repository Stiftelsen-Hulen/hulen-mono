import { Rule } from 'sanity'

export default {
  title: 'Navigeringsknapp (Navigation Button)',
  name: 'navElement',
  type: 'object',
  fields: [
    {
      type: 'localeString',
      name: 'title',
      description: 'The title of the navigation element',
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'string',
      name: 'subUrl',
      title: 'Url-sti (Url Path)',
      description:
        "the relative path to this button navigates to. Relative here means that for 'hulen/people', just add 'people' as value. For further chaining, add 'people/somePerson'.",
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'array',
      name: 'subNavElements',
      title: 'Rullegardinsmeny (Dropdown List)',
      description:
        'Navigation elements that should be present in a dropdown menu under the current element. Note that we only support one level of dropdown elements.',
      of: [{ type: 'navElement' }],
    },
  ],
}
