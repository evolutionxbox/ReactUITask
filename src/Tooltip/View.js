import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import './tooltip.css'

const View = ({
  buttonText,
  arrow,
  items,
  width,
  expanded,
  onClick
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

View.propTypes = {
  buttonText: PropTypes.string.isRequired,
  arrow: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.PropTypes.string.isRequired,
    icon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      colour: PropTypes.string.isRequired,
      width: PropTypes.number,
      height: PropTypes.number
    })
  })).isRequired,
  width: PropTypes.number,
  expanded: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default View
