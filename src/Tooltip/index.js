import React, { Component } from 'react'
import PropTypes from 'prop-types'
import View from './View'
import OutsideClick from './OutsideClick'
import Link from './Link'

export default class Tooltip extends Component {
  constructor() {
    super()

    this.state = {
      expanded: false
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
   * Invert the active state
   */
  onClick = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    return (
      <OutsideClick onClick={this.onOutsideClick}>
        <View {...this.props} onClick={this.onClick} onOutsideClick={this.onOutsideClick} {...this.state}>{this.props.children}</View>
      </OutsideClick>
    )
  }
}

Tooltip.propTypes = {
  width: PropTypes.number,
  expanded: PropTypes.bool,
  children: PropTypes.node.isRequired
}

// Components used for options
export const TooltipButton = () => {}
export const TooltipArrow = () => {}
export const TooltipLink = Link
