import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  className,
  onClick,
  View,
  children
}) => {
  if (View) {
    return <View className={['tooltip__button', className].join(' ')} onClick={onClick}>{children}</View>
  }
  return <button className={['tooltip__button', className].join(' ')} onClick={onClick}>{children}</button>
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  component: PropTypes.func
}

export default Button