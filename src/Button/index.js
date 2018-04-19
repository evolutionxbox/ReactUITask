import React from 'react'
import PropTypes from 'prop-types'
import { classNames } from '../utils'
import './button.css'

const Button = ({
  className,
  children,
  onClick
}) => {
  return (
    <button className={classNames(['button', 'button--primary', className])} onClick={onClick}>{children}</button>
  )
}

Button.propTypes = {
  /**
   * Custom classname(s)
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  /**
   * The button text
   */
  children: PropTypes.string.isRequired,
  /**
   * The button click handler
   */
  onClick: PropTypes.func,
}

Button.defaultProps = {
  children: 'Button text',
  className: '',
  onClick: () => {}
}

export default Button