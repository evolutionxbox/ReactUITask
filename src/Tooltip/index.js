import React, { Component } from 'react'
import PropTypes from 'prop-types'
import View from './View'
import OutsideClick from './OutsideClick'

/**
 * Tooltip component.
 *
 * Renders a button, when clicked, opens a list of
 * user definable links with optional icons.
 *
 * ```jsx
 * const item = [
 *   {
 *     text: 'Item Text',
 *     url: '#',
 *     icon: {
 *       name: 'icon-name',
 *       colour: 'icon-color'
 *     }
 *   }
 * ]
 *
 * <Tooltip buttonText='Button Text' items={item} arrow='left' expanded={true} />
 * ```
 */
export default class Tooltip extends Component {
  constructor(props) {
    super(props)

    // Set default state to be whatever `props.expanded` is
    this.state = {
      expanded: !!this.props.expanded
    }

    this.onOutsideClick = this.onOutsideClick.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  /**
   * Set expanded to false if clicked outside
   */
  onOutsideClick = event => {
    this.setState({
      expanded: false
    })
  }

  /**
   * On click invert the expanded state
   */
  onClick = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  /**
   * Render the Tooltop component view wrapping it in a OutsideClick component
   */
  render() {
    return (
      <OutsideClick onClick={this.onOutsideClick}>
        <View {...this.props} onClick={this.onClick} onOutsideClick={this.onOutsideClick} {...this.state}>{this.props.children}</View>
      </OutsideClick>
    )
  }
}

Tooltip.propTypes = {
  buttonText: PropTypes.string.isRequired,
  arrow: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.PropTypes.string.isRequired,
    icon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      colour: PropTypes.string.isRequired,
      width: PropTypes.number,
      height: PropTypes.number
    })
  })).isRequired,
  width: PropTypes.number,
  expanded: PropTypes.bool
}
