import React, { useState, useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Components
import Header from './Header'
import About from './About'
import Projects from './Projects'
import TechSkills from './TechSkills'
import Contact from './Contact'
import Footer from './Footer'

const AboutSection = styled.section`
  padding-top: 50px;
  position: relative;
  padding-bottom: 200px;
  ::after {
    z-index: 10;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    transform: skewY(-5deg);
    transform-origin: top left;
  }
`

const ProjectSection = styled.section`
  padding-top: 100px;
  padding-bottom: 200px;
  position: relative;
  background: #eaedf4;
  ::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    transform: skewY(-5deg);
    transform-origin: top left;
  }
`

const SkillsSection = styled.section`
  padding-top: 50px;
  padding-bottom: 200px;
  background: white;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    transform: skewY(5deg);
    transform-origin: top right;
  }
`

const ContactSection = styled.section`
  padding-top: 50px;
  padding-bottom: 75px;
  background: #36454f;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    transform: skewY(5deg);
    transform-origin: top right;
  }
`

const FooterSection = styled.footer`
  padding: 5px 0;
  background: #eaedf4;
`

const MyPortfolio = ({ data, urlHash }) => {
  const renderHead = () => {
    return (
      <Helmet>
        <title>Marc Brathwaite | Developer</title>
      </Helmet>
    )
  }

  const { headerSection, sections, footerSection } = data

  const aboutRef = useRef(null)
  const projectRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)

  const refMap = {
    about: aboutRef,
    work: projectRef,
    skills: skillsRef,
    contact: contactRef
  }

  const [sectionRef, setSectionRef] = useState(urlHash)

  useEffect(() => {
    if (refMap[sectionRef]) {
      setSectionRef(urlHash)
    }
  }, [urlHash])

  useEffect(() => {
    if (sectionRef) {
      const { offsetTop } = refMap[sectionRef].current
      window.scrollTo({
        top: offsetTop,
        left: 0,
        behavior: 'smooth'
      })
      setSectionRef(undefined)
    }
  }, [sectionRef])

  return (
    <>
      {renderHead()}
      {headerSection && (
        <Header content={headerSection} setSectionRef={setSectionRef} />
      )}
      <main>
        {sections &&
          sections.map(section => {
            switch (section._type) {
              case 'aboutSection':
                return (
                  <AboutSection
                    key={section._id}
                    id={section.htmlId}
                    ref={aboutRef}
                  >
                    <About content={section} />
                  </AboutSection>
                )
              case 'projectSection':
                return (
                  <ProjectSection
                    key={section._id}
                    ref={projectRef}
                    id={section.htmlId}
                  >
                    <Projects content={section} />
                  </ProjectSection>
                )
              case 'skillsSection':
                return (
                  <SkillsSection
                    key={section._id}
                    ref={skillsRef}
                    id={section.htmlId}
                  >
                    <TechSkills content={section} />
                  </SkillsSection>
                )
              case 'contactSection':
                return (
                  <ContactSection
                    key={section._id}
                    ref={contactRef}
                    id={section.htmlId}
                  >
                    <Contact content={section} />
                  </ContactSection>
                )
              default:
                return null
            }
          })}
      </main>
      <FooterSection>
        {footerSection && <Footer content={footerSection} />}
      </FooterSection>
    </>
  )
}

MyPortfolio.defaultProps = {
  urlHash: ''
}

MyPortfolio.propTypes = {
  data: PropTypes.object.isRequired,
  urlHash: PropTypes.string
}

export default MyPortfolio
