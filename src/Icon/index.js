import React from 'react'
import PropTypes from 'prop-types'
import { classNames } from '../utils'
import sprite from './sprite.min.svg'
import './icon.css'

const Icon = ({
  name,
  colour,
  width,
  height,
  className
}) => {
  return (
    <svg className={classNames(['icon', className])} xmlns='http://www.w3.org/2000/svg' width={width} height={height}>
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
  colour: PropTypes.oneOf(['white', 'black']).isRequired,
  /**
   * Width of the icon
   */
  width: PropTypes.number,
  /**
   * Height of the icon
   */
  height: PropTypes.number,
  /**
   * Custom classname(s)
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
}

Icon.defaultProps = {
  name: 'home',
  colour: 'black',
  width: 64,
  height: 64,
  className: ''
}

export default Icon