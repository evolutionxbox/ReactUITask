import React from 'react'
import PropTypes from 'prop-types'
import sprite from './sprite.min.svg'

const Icon = ({
  name,
  colour = 'white',
  width = 20,
  height = 20,
}) => {
  return (
    <svg className='tooltip__icon' xmlns='http://www.w3.org/2000/svg' width={width} height={height}>
      <use xlinkHref={`${sprite}#${name}-${colour}`} />
    </svg>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
}

export default Icon