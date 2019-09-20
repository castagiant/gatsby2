import React from 'react'
import PropTypes from 'prop-types'

import CloseButton from './CloseButton'

class Article extends React.Component {
  render() {
    const { children, id, isActive, isTimedout, onClose, title } = this.props

    const className = `${isActive ? 'active' : ''} ${
      isTimedout ? 'timeout' : ''
    }`

    return (
      <article id={id} className={className} style={{ display: 'none' }}>
        <h2 className="major">{title}</h2>
        {children}
        <CloseButton onClick={onClose} />
      </article>
    )
  }
}

Article.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  isActive: PropTypes.bool,
  isTimedout: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
}

export default Article
