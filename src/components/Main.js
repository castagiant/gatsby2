import React from 'react'
import PropTypes from 'prop-types'

import Article from './reusable/Article'
import BioSection from './sections/BioSection'
import ContactSection from './sections/ContactSection'
import ResumeSection from './sections/ResumeSection'
import WorkSection from './sections/WorkSection'

class Main extends React.Component {
  render() {
    const { article, articleTimeout, onCloseArticle } = this.props
    const sections = [
      { Content: BioSection, name: 'bio' },
      {
        Content: ContactSection,
        name: 'contact',
      },
      {
        Content: ResumeSection,
        name: 'resume',
      },
      {
        Content: WorkSection,
        name: 'work',
      },
    ]

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {sections.map(({ Content, name }) => (
          <Article
            {...{
              id: name,
              isActive: article === name,
              isTimedout: articleTimeout,
              key: name,
              onClose: onCloseArticle,
              title: name,
            }}
          >
            <Content />
          </Article>
        ))}
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
