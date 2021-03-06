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
 *     newWindow: true,
 *     icon: {
 *       name: 'icon-name',
 *       colour: 'icon-color',
 *       width: 64,
 *       height: 64
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
    this.setState((state, props) => {
      const expanded = state ? state.expanded : props.expanded

      return {
        expanded: !expanded
      }
    })
  }

  /**
   * Render the Tooltop component view wrapping it in a OutsideClick component
   */
  render() {
    return (
      <OutsideClick onClick={this.onOutsideClick}>
        <View {...this.props} {...this.state} onClick={this.onClick} onOutsideClick={this.onOutsideClick}>{this.props.children}</View>
      </OutsideClick>
    )
  }
}

Tooltip.propTypes = {
  /**
   * Text to display in the button
   */
  buttonText: PropTypes.string.isRequired,
  /**
   * Left align the tooltip arrow.
   */
  arrowLeft: PropTypes.bool,
  /**
   * Items to become links in the tooltip panel
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    newWindow: PropTypes.bool,
    icon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      colour: PropTypes.string.isRequired,
      width: PropTypes.number,
      height: PropTypes.number
    })
  })).isRequired,
  /**
   * Restrict the width of the button and tooltip panel
   */
  width: PropTypes.number,
  /**
   * Expand the tooltip panel (this does not affect clicking)
   */
  expanded: PropTypes.bool
}


Tooltip.defaultProps = {
  buttonText: '',
  arrowLeft: false,
  items: [],
  width: 0,
  expanded: false
}
