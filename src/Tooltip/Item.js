import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'

const RenderIcon = icon => {
  if (icon) {
    return <Icon {...icon} />
  }
}

const Item = ({
  text,
  url,
  icon
}) => {
  return (
    <li className='tooltip__item'>
      <a href={url} className='tooltip__link'>
        {RenderIcon(icon)}
        {text}
      </a>
    </li>
  )
}

Item.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
  }),
}

export default Item