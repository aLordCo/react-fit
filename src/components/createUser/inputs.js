export const inputs = [
  {
    label: 'First Name',
    name: 'firstName',
    rules: {
      required: true
    },
    type: 'ínput'
  },
  {
    label: 'Last Name',
    name: 'lastName',
    rules: {
      required: true
    },
    type: 'ínput'
  },
  {
    label: 'Email',
    name: 'email',
    rules: {
      required: true
    },
    type: 'email'
  },
  {
    label: 'Gender',
    name: 'gender',
    rules: {
      required: false
    },
    type: 'select',
    select: true,
    options: [
      {
        label: 'Male',
        value: 'male'
      },
      {
        label: 'Female',
        value: 'female'
      },
      {
        label: 'Other',
        value: 'other'
      }
    ]
  }
];