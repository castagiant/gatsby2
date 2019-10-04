import React from 'react';
import PropTyps from 'prop-types';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

import pic06 from '../../images/pic06.jpg';
import americancommercial from '../../images/american-commercial.mp3';
import australiancommercial from '../../images/australian-commercial.mp3';
import cartoondemo from '../../images/cartoon-demo.mp3';




const IMAGES =
[{
    src: "https://live.staticflickr.com/65535/48802172366_82a43f862c_k.jpg", 
    thumbnail: "https://live.staticflickr.com/65535/48802172366_82a43f862c_k.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},

{
        src: "https://live.staticflickr.com/65535/48801824983_417fb43dbe_h.jpg", 
        thumbnail: "https://live.staticflickr.com/65535/48801824983_417fb43dbe_h.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48802172576_ca47c96074_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48802172576_ca47c96074_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48802172596_5822e15827_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48802172596_5822e15827_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48802313237_99a36f8174_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48802313237_99a36f8174_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48802172621_93c4822e12_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48802172621_93c4822e12_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48802313447_0a42b4e335_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48802313447_0a42b4e335_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48802313477_7f42dfe5fb_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48802313477_7f42dfe5fb_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48802172661_7a72a9ffd4_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48802172661_7a72a9ffd4_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48802313537_d2192726d1_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48802313537_d2192726d1_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48802313557_0009fed5b4_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48802313557_0009fed5b4_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48802313597_4b7d341605_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48802313597_4b7d341605_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48802313642_c26de6d1f2_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48802313642_c26de6d1f2_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48802313727_2344e325cb_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48802313727_2344e325cb_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48802313292_cab50f4a8e_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48802313292_cab50f4a8e_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48802172501_0ff9d28cff_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48802172501_0ff9d28cff_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48802172941_562e36a280_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48802172941_562e36a280_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48801825758_7c6fcff36b_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48801825758_7c6fcff36b_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48802173611_78656db7d2_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48802173611_78656db7d2_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48801826388_896410367c_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48801826388_896410367c_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48802314807_4529af2c99_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48802314807_4529af2c99_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48802172536_96f3d68274_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48802172536_96f3d68274_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

{
  src: "https://live.staticflickr.com/65535/48802314872_e6b498d8c3_b.jpg", 
  thumbnail: "https://live.staticflickr.com/65535/48802314872_e6b498d8c3_b.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
},

/*{
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
}*/]




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

        <div>
          <audio ref="audio_tag" src={australiancommercial} controls autoPlay/>
        </div>

        <div>
          <audio ref="audio_tag" src={cartoondemo} controls autoPlay/>
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
