import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number, object, array } from '@storybook/addon-knobs/react'
import { checkA11y } from '@storybook/addon-a11y'

// Component related
import Tooltip from '../Tooltip'
import '../normalize.css'
import '../index.css'

// Data
const items = [
  {
    text: 'Button Call To Action',
    url: '#'
  },
  {
    text: 'Button Call To Action',
    url: '#'
  },
  {
    text: 'Button Call To Action',
    url: '#'
  },
  {
    text: 'Button Call To Action',
    url: '#'
  },
  {
    text: 'Button Call To Action',
    url: '#'
  }
]
const itemsWithIcons = [
  {
    text: 'Button Call To Action',
    url: '#',
    icon: {
      name: 'favourites',
      colour: 'white'
    }
  },
  {
    text: 'Button Call To Action',
    url: '#',
    icon: {
      name: 'giftcards',
      colour: 'white'
    }
  },
  {
    text: 'Button Call To Action',
    url: '#',
    icon: {
      name: 'delivery',
      colour: 'white'
    }
  },
  {
    text: 'Button Call To Action',
    url: '#',
    icon: {
      name: 'audioon',
      colour: 'white'
    }
  },
  {
    text: 'Button Call To Action',
    url: '#',
    icon: {
      name: 'edit',
      colour: 'white'
    }
  }
]

storiesOf('Tooltip', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add('Normal',
    withInfo(`
      A simple Tooltip component which opens a list of links when the button is
      clicked.

      The links can be supplied through the \`items\` prop using an array of
      \`item\` prop objects. Each \`item\` can be supplied with an icon.

      In this example the items have no icons.
    `)
    (() =>
      <Tooltip buttonText={text('ButtonText', 'Button CTA')} items={object('Items', items)} />
    )
  )
  .add('Normal with icons',
    withInfo(`
      Same as "Normal" except supplied items have icons.
    `)
    (() =>
      <Tooltip buttonText={text('ButtonText', 'Button CTA')} items={object('Items', itemsWithIcons)} />
    )
  )
  .add('Arrow positioned left',
    withInfo(`
      Same as "Normal" except the Tooltip arrow is now left aligned.
    `)
    (() =>
      <Tooltip buttonText={text('ButtonText', 'Button CTA')} arrowLeft={boolean('ArrowLeft', true)} items={object('Items', items)} />
    )
  )
  .add('200px width',
    withInfo(`
      Same as "Normal" except the Tooltip is now 200px wide.
    `)
    (() =>
      <Tooltip width={number('Width', 200)} buttonText={text('ButtonText', 'Button CTA')} items={object('Items', items)} />
    )
  )
  .add('500px width',
    withInfo(`
      Same as "Normal" except the Tooltip is now 500px wide.
    `)
    (() =>
      <Tooltip width={number('Width', 500)} buttonText={text('ButtonText', 'Button CTA')} items={object('Items', items)} />
    )
  )
  .add('Custom button text',
    withInfo(`
      Same as "Normal" except the Tooltip button has custom text.
    `)
    (() =>
      <Tooltip buttonText={text('ButtonText', 'Custom Button Text')} items={object('Items', items)} />
    )
  )
  .add('Initially expanded',
    withInfo(`
      Same as "Normal" except the Tooltip links are expanded initially.
    `)
    (() =>
      <Tooltip buttonText={text('ButtonText', 'Button CTA')} expanded={boolean('Expanded', true)} items={object('Items', items)} />
    )
  )
