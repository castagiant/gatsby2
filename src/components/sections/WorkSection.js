import React from 'react'

import pic06 from '../../images/pic06.jpg'

class WorkSection extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      pictures: [
        { alt: '', src: pic06 },
        { alt: '', src: pic06 },
        { alt: '', src: pic06 },
        { alt: '', src: pic06 },
      ],
      selectedPictureIndex: -1,
    }
    this.handleBackClick = this.handleFocusPictureClick.bind(this)
  }

  handleBackClick() {
    this.setState({ selectedPictureIndex: -1 })
  }

  handleFocusPictureClick(selectedPictureIndex) {
    this.setState({ selectedPictureIndex })
  }

  renderSelectedPicture(selectedPictureIndex) {
    const { alt, src } = this.state.pictures[selectedPictureIndex]
    return (
      <div className="focused-picture-container">
        <div className="back-button" onClick={this.handleBackClick}>
          &larr;
        </div>
        <img className="work-picture" src={src} alt={alt} />
      </div>
    )
  }

  renderPictureGrid() {
    const { pictures = [] } = this.state

    return (
      <div className="work-picture-grid">
        {pictures.map(({ alt, src }, index) => (
          <div onClick={() => this.handleFocusPictureClick(index)}>
            <img alt={alt} className="work-picture" src={src} />
          </div>
        ))}
      </div>
    )
  }

  render() {
    const { selectedPictureIndex } = this.state

    return (
      <div>
        {selectedPictureIndex >= 0
          ? this.renderSelectedPicture(selectedPictureIndex)
          : this.renderPictureGrid()}
        <iframe
          width="560px"
          height="400px"
          src="https://www.youtube.com/embed/Co64Qnle2uQ?autoplay=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    )
  }
}

export default WorkSection
