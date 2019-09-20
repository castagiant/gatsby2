import React from 'react'

import pic04 from '../images/pic04.jpg'
import pic06 from '../images/pic06.jpg'
import resume from '../images/David-Sweetman-Resume.jpg'

export const Bio = () => (
  <>
    <span className="image main">
      <img src={pic04} alt="" />
    </span>
    <p>
      Making people laugh has been one of David’s fundamental passions. Being
      raised on a staple diet of British comedy led him to perform in his early
      teens.
    </p>
    <p>
      Thirsty for knowledge, David completed an advanced diploma in stage and
      screen acting, meanwhile performing in various short films and with
      established improv companies.
    </p>
    <p>
      ​David has since walked the boards for musical theatre, Shakespeare and
      more. Now writing and filming his own pieces, David still enjoys
      spontaneously comic interactions with unsuspecting public audiences.
    </p>
  </>
)

export const Contact = () => (
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSe9i9L70fQtlB_ij3yB4B_yklEQH7Ly75iutAZaF6HwL5JBSA/viewform?embedded=true"
    width="640"
    height="1002"
    frameborder="0"
    marginheight="0"
    marginwidth="0"
  >
    Loading...
  </iframe>
)

export const Resume = () => (
  <span className="image main">
    <img src={resume} alt="" />
  </span>
)
