import React from 'react'
import Item from './Item'
import './tooltip.css'

const View = ({
  buttonText = '',
  arrowLeft = false,
  items = [],
  width = 0,
  expanded = false,
  onClick = () => {}
}) => {
  // style and classes
  const expandedClass = expanded ? 'tooltip--expanded' : ''
  const arrowClass = arrow === 'left' ? 'tooltip--arrow-left' : ''
  const style = {
    width: parseInt(width, 10) || ''
  }

  return (
    <div className={['tooltip', expandedClass].join(' ')} style={style}>
      <button className='tooltip__button' onClick={onClick}>{buttonText}</button>
      <div className='tooltip__frame'>
        <span className={['tooltip__arrow', arrowClass].join(' ')}></span>
        <ul className='tooltip__list'>
          {
            items && items.map((item, i) => <Item key={`item${i}`} {...item} />)
          }
        </ul>
      </div>
    </div>
  )
}

export default View
