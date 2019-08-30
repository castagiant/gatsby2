import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        {/*<p className="copyright">&copy; Gatsby Starter - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p> */}
        <div>
  <iframe
   src="https://calendar.google.com/calendar/embed?src=g9s0fjlgq5settfdb8ret1vvp8%40group.calendar.google.com&ctz=America%2FLos_Angeles"
    frameborder="0"
    allowfullscreen
    scrolling="no"
    allowtransparency
    width="800"
    height="600"
  ></iframe>
</div>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
