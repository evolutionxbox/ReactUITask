import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Component that fires a function if you click outside of it
 */
export default class OutsideClick extends Component {
  constructor() {
    super()

    this.onClick = this.onClick.bind(this)
  }

  componentDidMount() {
    document.addEventListener('click', this.onClick)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick)
  }

  onClick(event) {
    const {container} = this.refs
    const callback = this.props.onClick
    const {target} = event

    if (typeof callback !== 'function') {
      return
    }

    if (target !== container && !container.contains(target)) {
      callback(event)
    }
  }

  render() {
    return <div ref="container">{this.props.children}</div>
  }
}

OutsideClick.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
