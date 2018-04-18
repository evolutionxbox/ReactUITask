import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Arrow from './Arrow'
import './tooltip.css'

const View = ({
  width,
  expanded,
  onClick,
  ...props
}) => {
  // children rendering
  const children = React.Children.toArray(props.children)
  const buttonOpts = children.filter(child => child.type.name === 'TooltipButton').map(({props}) => ({ ...props }))[0]
  const arrowOpts = children.filter(child => child.type.name === 'TooltipArrow').map(({props}) => ({ ...props }))[0]

  // throw errors
  if (!buttonOpts) {
    throw new Error('Warning: TooltipButton cannot be undefined')
  }

  // style and classes
  const expandedClass = expanded ? 'tooltip--expanded' : ''
  const style = {
    width: parseInt(width, 10) || ''
  }

  return (
    <div className={['tooltip', expandedClass].join(' ')} style={style}>
      {Button({ ...buttonOpts, onClick})}
      <div className="tooltip__frame">
        {Arrow(arrowOpts)}
        <ul className="tooltip__list">
          {
            children
              .filter(child => child.type.name === 'Link')
              .map(child => <li key={child.key} className="tooltip__item">{child}</li>)
          }
        </ul>
      </div>
    </div>
  )
}

View.propTypes = {
  width: PropTypes.number,
  expanded: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default View
