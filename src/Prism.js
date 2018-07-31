import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import prism from 'prismjs'

class Prism extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    language: PropTypes.string
  };

  setRef = ref => {
    this.el = ref
  };

  render () {
    const { language, children } = this.props
    let className = 'react-prism'
    if (language) {
      className += ` language-${language}`
    }

    return (
      <pre ref={this.setRef} className={className}>
        <code>{children}</code>
      </pre>
    )
  }

  componentDidMount () {
    this.highlightCode()
  }

  componentDidUpdate () {
    this.highlightCode()
  }

  highlightCode () {
    prism.highlightElement(this.el)
  }
}

export default Prism
