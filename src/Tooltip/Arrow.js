import React from 'react'
import PropTypes from 'prop-types'

const Arrow = ({
  className
}) => <span className={['tooltip__arrow', className].join(' ')}></span>

Arrow.propTypes = {
  className: PropTypes.string
}

export default Arrow