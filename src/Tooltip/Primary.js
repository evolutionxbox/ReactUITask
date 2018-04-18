import React from 'react'
import PropTypes from 'prop-types'

const Primary = ({
  text,
  className,
  onClick
}) => <button className={className} onClick={onClick}>{text}</button>

Primary.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Primary