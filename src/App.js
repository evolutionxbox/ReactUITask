import React from 'react'
import Tooltip from './Tooltip'

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

const App = () => (
  <div>
    <p>Normal</p>
    <Tooltip buttonText='Button CTA' items={items} />
    <p>Normal with icons</p>
    <Tooltip buttonText='Button CTA' items={itemsWithIcons} />
    <p>Arrow positioned left</p>
    <Tooltip buttonText='Button CTA' arrow='left' items={items} />
    <p>200px width</p>
    <Tooltip width={200} buttonText='Button CTA' items={items} />
    <p>500px width</p>
    <Tooltip width={500} buttonText='Button CTA' items={items} />
    <p>Custom button text</p>
    <Tooltip buttonText='Custom Button Text' items={items} />
    <p>Inititally expanded</p>
    <Tooltip buttonText='Button CTA' expanded={true} items={items} />
  </div>
)

export default App
