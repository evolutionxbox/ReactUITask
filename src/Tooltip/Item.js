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
  newWindow,
  icon
}) => {
  const target = newWindow ? '_blank' : ''

  return (
    <li className='tooltip__item'>
      <a href={url} className='tooltip__link' target={target}>
        {RenderIcon(icon)}
        {text}
      </a>
    </li>
  )
}

Item.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  newWindow: PropTypes.bool,
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
  }),
}

Item.defaultProps = {
  text: '',
  url: '#',
  newWindow: false
}

export default Item
