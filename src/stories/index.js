import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number, object, array, selectV2 } from '@storybook/addon-knobs/react'
import { checkA11y } from '@storybook/addon-a11y'

// Component related
import Tooltip from '../Tooltip'
import Button from '../Button'
import Icon from '../Icon'
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
const iconNames = {
  'Account': 'account',
  'Audio off': 'audiooff',
  'Audio on': 'audioon',
  // 'Close': 'close',
  'Confirmation': 'confirmation',
  'Delete': 'delete',
  'Delivery': 'delivery',
  'Designers': 'designers',
  'Discover': 'discover',
  // 'Down arrow': 'down_arrow',
  'Edit': 'edit',
  'Error': 'error',
  'Exit fullscreen': 'exit_fullscreen',
  'Favourites': 'favourites',
  'Favourites overlay': 'favourites_overlay',
  // 'Favourites on': 'favouriteson',
  'Filter': 'filter',
  'Fullscreen': 'fullscreen',
  'Gift cards': 'giftcards',
  'Home': 'home',
  'Information': 'information',
  // 'Left arrow': 'left_arrow',
  // 'Minus': 'minus',
  'Mrpbag': 'mrpbag',
  'Mrpbag overlay': 'mrpbag_overlay',
  'Napbag': 'napbag',
  'Napbag overlay': 'napbag_overlay',
  'Packaging': 'packaging',
  'Pause': 'pause',
  'Play': 'play',
  // 'Plus': 'plus',
  'Returns': 'returns',
  // 'Right arrow': 'right_arrow',
  'Search': 'search',
  'Shop': 'shop',
  // 'Up arrow': 'up_arrow',
  'Warning': 'warning',
  'Whatsnew': 'whatsnew',
}


storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add('default',
    withInfo(`
      A simple primary button component which can have custom text, custom CSS classname, and a custom click handler method applied to it.
    `)
    (() =>
      <Button />
    )
  )
  .add('custom button text',
    withInfo(`
      The button text can be customised.
    `)
    (() =>
      <Button>{text('Button text', 'Custom button text')}</Button>
    )
  )
  .add('custom classname',
    withInfo(`
      Custom class name can be added.
    `)
    (() =>
      <Button className={text('Classname', 'classA')}></Button>
    )
  )
  .add('custom classnames',
    withInfo(`
      Custom class names can be added.
    `)
    (() =>
      <Button className={array('Classnames', ['classA', 'classB'])}></Button>
    )
  )
  .add('handle clicks',
    withInfo(`
      Clicks can be handled by passing a callback function.
    `)
    (() =>
      <Button onClick={(e) => alert(`${e.target.textContent} click!`)}></Button>
    )
  )

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add('default',
      withInfo(`
        A simple icon component which serves an svg icon from a svg spritesheet.
      `)
      (() =>
        <Icon />
      )
  )
  .add('icons',
    withInfo(`
      Any icon from the svg spritesheet can be show, just by changing the name.
    `)
    (() =>
      <Icon name={selectV2('Name', iconNames, 'home')} />
    )
  )
  .add('custom classname',
    withInfo(`
      Custom class name can be added.
    `)
    (() =>
      <Icon className={text('Classname', 'classA')} />
    )
  )
  .add('custom classnames',
    withInfo(`
      Custom class names can be added.
    `)
    (() =>
      <Icon className={array('Classnames', ['classA', 'classB'])} />
    )
  )
  .add('colour',
    withInfo(`
      Two colours can be chosen from.
    `)
    (() =>
      <Icon colour={selectV2('Colour', { 'Black': 'black', 'White': 'white'}, 'black')} />
    )
  )


storiesOf('Tooltip', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add('default',
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
  .add('expanded',
    withInfo(`
      The panel can be expanded manually via a prop.
    `)
    (() =>
      <Tooltip buttonText={text('Button Text', 'Button CTA')} expanded={boolean('Expanded', true)} items={object('Items', items)} />
    )
  )
  .add('custom button text',
    withInfo(`
      The button text can be customised.
    `)
    (() =>
      <Tooltip buttonText={text('Button Text', 'Custom Button Text')} items={object('Items', items)} />
    )
  )
  .add('items with icons',
    withInfo(`
      The items can have icons.
    `)
    (() =>
      <Tooltip buttonText={text('Button Text', 'Button CTA')} items={object('Items', itemsWithIcons)} />
    )
  )
  .add('arrow positioned left',
    withInfo(`
      The panel arrow can be positioned on the left.
    `)
    (() =>
      <Tooltip buttonText={text('Button Text', 'Button CTA')} arrowLeft={boolean('Arrow Left', true)} items={object('Items', items)} />
    )
  )
  .add('thin',
    withInfo(`
      By default it fills it's container, you can restrict the width, in this case it's 200px.
    `)
    (() =>
      <Tooltip width={number('Width', 200)} buttonText={text('Button Text', 'Button CTA')} items={object('Items', items)} />
    )
  )
