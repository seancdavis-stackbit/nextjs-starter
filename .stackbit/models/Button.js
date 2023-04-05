export const Button = {
  type: 'object',
  name: 'Button',
  label: 'Button',
  labelField: 'label',
  fields: [
    { type: 'string', name: 'label', default: 'Click Me', required: true },
    {
      type: 'string',
      name: 'url',
      label: 'URL',
      default: '/',
      required: true,
    },
    {
      type: 'enum',
      name: 'theme',
      controlType: 'button-group',
      label: 'Color Scheme',
      default: 'primary',
      options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
      ],
    },
  ],
};