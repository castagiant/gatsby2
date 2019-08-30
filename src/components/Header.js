import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
       {/* <div className="logo">
            <span className="icon fa-diamond"></span>
</div> */}

<iframe
    src="https://www.instagram.com/p/B1Kre5mAUgX/embed" /*https://www.instagram.com/p/B04Mi4jAPUj/    https://instagram.com/p/BpKjlo-B4uI/embed*/
    frameborder="0"
    allowfullscreen
    scrolling="no"
    allowtransparency
    width="400"
    height="400"
  ></iframe>
        <div className="content">
            <div className="inner">
                <h1>David Sweetman</h1>
                <p>Actor | Stand-Up Comic | Voiceover Artist </p>
            </div>
</div> 
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('resume')}}>Resume</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('bio')}}>Bio</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
