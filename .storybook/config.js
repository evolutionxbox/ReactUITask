import { configure } from '@storybook/react'
import { setDefaults } from '@storybook/addon-info'
import { setOptions } from '@storybook/addon-options'

// Options configure
// Option defaults:
setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'Jon Cousins Ltd',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: 'http://www.joncousins.co.uk/',
  /**
   * show addon panel as a vertical panel on the right
   * @type {Boolean}
   */
  addonPanelInRight: true,
})

// Stories configure
function loadStories() {
  require('../src/stories')
}
configure(loadStories, module)

// Info configure
setDefaults({
  /**
   * Toggles display of header with component name and description
   * @type {Boolean}
   */
  header: true,
  /**
   * Displays info inline vs click button to view
   * @type {Boolean}
   */
  inline: true,
  /**
   * Displays the source of story Component
   * @type {Boolean}
   */
  source: true,
  /**
   * Max props to display per line in source code
   * @type {Number}
   */
  maxPropsIntoLine: 1,
  /**
   * Displays the first 10 characters of the prop name
   * @type {Number}
   */
  maxPropObjectKeys: 10,
  /**
   * Displays the first 10 items in the default prop array
   * @type {Number}
   */
  maxPropArrayLength: 10,
  /**
   * Displays the first 100 characters in the default prop string
   * @type {Number}
   */
  maxPropStringLength: 100,
})
