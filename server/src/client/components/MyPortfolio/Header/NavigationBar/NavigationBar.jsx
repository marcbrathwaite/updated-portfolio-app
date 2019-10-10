import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// utils
import media from '../../../../utils/screenSizeHelper'

const NavBar = styled.nav`
  display: flex;
  position: fixed;
  top: ${props => (props.isClicked ? '0px' : '-100%')};
  left: 0;
  right: 0;
  background: #36454f;
  transition: all 0.3s ease-in-out;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  z-index: 90;
`

const NavList = styled.ul`
  display: flex;
  list-style: none;
  height: 100%;
  width: 70%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  ${media.md`
    flex-direction: column;
    & li {
      margin-bottom: 30px;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  `}
`

const NavLink = styled.a`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 1.8rem;
  text-transform: uppercase;
  line-height: 1.6;
  color: white;
  text-decoration: none;
  transition: border-bottom 0.2s;
  :hover,
  :active {
    border-bottom: 2px solid #242682;
  }
`

const NavigationBar = ({ content, isHamBurgerClicked, setSectionRef }) => {
  const handleClick = event => {
    event.preventDefault()
    const id = event.target.name
    setSectionRef(id.slice(1))
  }
  return (
    <NavBar isClicked={isHamBurgerClicked}>
      <NavList>
        {content.links
          ? content.links.map(link => {
              return (
                <li key={link._id}>
                  <NavLink
                    href={link.linkUrl}
                    onClick={handleClick}
                    name={link.linkUrl}
                  >
                    {link.linkText}
                  </NavLink>
                </li>
              )
            })
          : null}
      </NavList>
    </NavBar>
  )
}

NavigationBar.propTypes = {
  content: PropTypes.object.isRequired,
  isHamBurgerClicked: PropTypes.bool.isRequired,
  setSectionRef: PropTypes.func.isRequired
}

export default NavigationBar
