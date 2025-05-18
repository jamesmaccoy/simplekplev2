import type { Block } from 'payload'

export const StayDuration: Block = {
  slug: 'stayDuration',
  interfaceName: 'StayDurationBlock',
  fields: [
    {
      name: 'baseRate',
      type: 'number',
      defaultValue: 150,
      required: true,
      min: 0,
      admin: {
        description: 'The base rate per night in Rands',
      },
    },
  ],
} 