import React from 'react'

import PropTypes from 'prop-types'

import './feature-card2.css'

const FeatureCard2 = (props) => {
  return (
    <div className={`feature-card2-feature-card ${props.rootClassName} `}>
      <div className="feature-card2-container">
        <h2 className="feature-card2-text">{props.title}</h2>
        <span>{props.description}</span>
      </div>
    </div>
  )
}

FeatureCard2.defaultProps = {
  description:
    'Proficient in web development technologies such as ASP.NET, HTML, CSS, Bootstrap, and JavaScript. Skilled in mobile application development using React Native. Knowledgeable in programming languages including C and Java.',
  rootClassName: '',
  title: 'Technical Skills',
}

FeatureCard2.propTypes = {
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard2
