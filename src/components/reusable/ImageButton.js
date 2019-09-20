import React from 'react'
import PropTypes from 'prop-types'

const ImageButton = props => {
  const { alt, buttonClass, imageClass, onClick, src } = this.props

  return (
    <div className={buttonClass} onClick={onClick}>
      <img
        {...{
          alt,
          className: imageClass,
          src,
        }}
      ></img>
    </div>
  )
}

ImageButton.propTypes = {
  alt: PropTypes.string,
  buttonClass: PropTypes.string,
  imageClass: PropTypes.string,
  onClick: PropTypes.func,
  src: PropTypes.string,
}
