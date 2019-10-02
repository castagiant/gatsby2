import React from 'react';
import PropTyps from 'prop-types';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

import pic06 from '../../images/pic06.jpg';
import americancommercial from '../../images/american-commercial.mp3';


const IMAGES =
[{
        src: "https://live.staticflickr.com/65535/48801824983_417fb43dbe_h.jpg", 
        thumbnail: "https://live.staticflickr.com/65535/48801824983_417fb43dbe_h.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        //isSelected: true,
        //tags: [{value: "", title: ""},]
        //caption: ""
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
 
{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]




class WorkSection extends React.Component {/*{
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
  } */



  render() {
   // const { selectedPictureIndex } = this.state

    return (
      <div>
        {/*{selectedPictureIndex >= 0
          ? this.renderSelectedPicture(selectedPictureIndex)
        : this.renderPictureGrid()}*/}

        <div>
          
        <Gallery images={IMAGES}/>
        </div>

        <div>
          <audio ref="audio_tag" src={americancommercial} controls autoPlay/>
        </div>



        <iframe
          width="560px"
          height="400px"
          src="https://www.youtube.com/embed/Co64Qnle2uQ?autoplay=1"
          frameborder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" //autoplay
          allowfullscreen
        />
      </div>
    )
  }
}

export default WorkSection
