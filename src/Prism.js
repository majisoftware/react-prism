import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import prism from 'prismjs'

class Prism extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    language: PropTypes.string
  }

  render () {
    const className = cx({
      'react-prism': true,
      [`language-${this.props.language}`]: !!this.props.language
    })

    return (
      <pre ref={ref => (this.el = ref)} className={className}>
        <code>
          {this.props.children}
        </code>
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
