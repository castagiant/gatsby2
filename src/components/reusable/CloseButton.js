import React from 'react'

const CloseButton = ({ onClick }) => (
  <div
    {...{
      className: 'close',
      onClick,
    }}
  />
)

export default CloseButton
