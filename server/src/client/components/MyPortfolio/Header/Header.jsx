import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Wrapper from '../../Common/Wrapper'
import Heading from '../../Common/Heading'
import Paragraph from '../../Common/Paragraph'
import NavigationBar from './NavigationBar'

const HeaderContainer = styled.header`
  height: 105vh;
  background: linear-gradient(to bottom, #242682e0, #242682e0),url('${props =>
    props.backgroundImage}');
  background-size: cover;
`

const Hamburger = styled.label`
  position: fixed;
  top: 19px;
  right: 30px;
  font-size: 2.5rem;
  color: #2ec4b6;
  z-index: 100;
  cursor: pointer;
`

const SubContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 85%;
`
const MyName = styled.span`
  color: #2ec4b6;
`

const Header = ({ content }) => {
  const {
    backgroundImage,
    navigationBar,
    headerTitle,
    myName,
    headerSubtitle
  } = content

  const [isHamBurgerClicked, setIsHamBurgerClicked] = useState(false)

  const handleClick = () => {
    setIsHamBurgerClicked(!isHamBurgerClicked)
  }
  return (
    <React.Fragment>
      {backgroundImage && (
        <HeaderContainer backgroundImage={backgroundImage.url}>
          <Hamburger onClick={handleClick}>
            <i className="fas fa-bars"></i>
          </Hamburger>
          <NavigationBar
            content={navigationBar}
            isHamBurgerClicked={isHamBurgerClicked}
          />
          <SubContainer>
            <Wrapper>
              <Heading level="h1">
                {headerTitle} <MyName>{myName}</MyName>
              </Heading>
              <Paragraph inverted={true}>{headerSubtitle}</Paragraph>
            </Wrapper>
          </SubContainer>
        </HeaderContainer>
      )}
    </React.Fragment>
  )
}

Header.propTypes = {
  content: PropTypes.object.isRequired
}

export default Header
