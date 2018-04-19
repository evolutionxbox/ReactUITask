/** @module Tooltip/Icon */

import React from 'react'
import PropTypes from 'prop-types'
import sprite from './sprite.min.svg'

const Icon = ({
  name,
  colour,
  width,
  height,
}) => {
  return (
    <svg className='tooltip__icon' xmlns='http://www.w3.org/2000/svg' width={width} height={height}>
      <use xlinkHref={`${sprite}#${name}-${colour}`} />
    </svg>
  )
}

Icon.propTypes = {
  /**
   * Name of the icon
   */
  name: PropTypes.string.isRequired,
  /**
   * Colour of the icon
   */
  colour: PropTypes.string.isRequired,
  /**
   * Width of the icon
   */
  width: PropTypes.number,
  /**
   * Height of the icon
   */
  height: PropTypes.number
}

Icon.defaultProps = {
  name: 'home',
  colour: 'white',
  width: 20,
  height: 20
}

export default Icon