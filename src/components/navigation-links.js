import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-home">
        {props.text}
      </Link>
      <Link to="/artworks" className="navigation-links-navlink">
        {props.text1}
      </Link>
      <Link to="/about" className="navigation-links-navlink1">
        {props.text2}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  text2: 'About',
  text: 'Home',
  text1: 'Artworks',
  text4: 'Blog',
  text3: 'Team',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks
