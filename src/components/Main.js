import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'
import pic06 from '../images/pic06.jpg'
import resume from '../images/David-Sweetman-Resume.jpg'


class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="resume" className={`${this.props.article === 'resume' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Resume</h2>
          <span className="image main"><img src={resume} alt="" /></span>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic06} alt="" /></span>
          <iframe width="560" height="400" src="https://www.youtube.com/embed/Co64Qnle2uQ?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          {/* <ul>
            <li><a href="../images/american-commercial.mp3">American Commercial Demo</a></li>
            <li><a href="../images/australian-commercial.mp3">Australian Commercial Demo</a></li>
            <li><a href="../images/cartoon-demo.mp3">Cartoon Demo</a></li>
          </ul> */}
           {close}
        </article>

        <article id="bio" className={`${this.props.article === 'bio' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">David</h2>
          <span className="image main"><img src={pic04} alt="" /></span>
          <p>Making people laugh has been one of David’s fundamental passions. Being raised on a staple diet of British comedy led him to perform in his early teens.</p>
          <p>Thirsty for knowledge, David completed an advanced diploma in stage and screen acting, meanwhile performing in various short films and with established improv companies.</p>
          <p>​David has since walked the boards for musical theatre, Shakespeare and more. Now writing and filming his own pieces, David still enjoys spontaneously comic interactions with unsuspecting public audiences.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
           <h2 className="major">Contact</h2>
        {/*  <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>

            <div className="label">
            <ul>
              <li><label>Would You like to receive news and Updates From David?</label></li>
              <li><input type="checkbox" name="choice" checked="false"/></li>
              
            </ul>
            </div>  
            

            <div className="field">
              <label htmlFor="message">Comments/Questions</label>
              <textarea name="message" id="message" rows="4" disabled ="true"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Submit" className="special" disabled="true" /></li>
              <li><input type="reset" value="Reset" disabled="true" /></li>
            </ul>

           
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/thesweetmandavid/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="https://forms.gle/2DX8eBtRPEaZJa8U6" className="icon fa-github"><span className="label">Contact Form</span></a></li>

        </ul> */}

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe9i9L70fQtlB_ij3yB4B_yklEQH7Ly75iutAZaF6HwL5JBSA/viewform?embedded=true" width="640" height="1002" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>




          {close}
          
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main