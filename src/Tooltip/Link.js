import React from 'react'
import PropTypes from 'prop-types'

const Link = ({
  icon,
  href,
  className,
  children
}) => {
  return <a href={href} className={className}>
    { children }
  </a>
}

Link.propTypes = {
  icon: PropTypes.string,
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

Link.defaultProps = {
  className: 'tooltip__link'
}

export default Link