import React from 'react'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div className="faq1-faq7 thq-section-padding">
      <div className="faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <p className="faq1-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="thq-flex-column faq1-list">
          <div className="faq1-list-item1">
            <p className="faq1-faq1-question thq-body-large">
              {props.faq1Question}
            </p>
            <span className="thq-body-small">{props.faq1Answer}</span>
          </div>
          <div className="faq1-list-item2">
            <p className="faq1-faq2-question thq-body-large">
              {props.faq2Question}
            </p>
            <span className="thq-body-small">{props.faq2Answer}</span>
          </div>
          <div className="faq1-list-item3">
            <p className="faq1-faq3-question thq-body-large">
              {props.faq3Question}
            </p>
            <span className="thq-body-small">{props.faq3Answer}</span>
          </div>
          <div className="faq1-list-item4">
            <p className="faq1-faq4-question thq-body-large">
              {props.faq4Question}
            </p>
            <span className="thq-body-small">{props.faq4Answer}</span>
          </div>
          <div className="faq1-list-item5">
            <p className="faq1-faq5-question thq-body-large">
              {props.faq5Question}
            </p>
            <span className="thq-body-small">{props.faq5Answer}</span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq1-content1">
            <h2 className="thq-heading-2">{props.heading2}</h2>
            <p className="faq1-text3 thq-body-large">{props.content2}</p>
          </div>
          <div className="faq1-container">
            <button className="thq-button-outline faq1-button">
              <span className="thq-body-small">{props.action1}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ1.defaultProps = {
  faq4Answer:
    'Setting realistic goals, finding a workout buddy, varying your routine, and tracking your progress can help you stay motivated.',
  faq5Question:
    'Is it necessary to consult a healthcare professional before starting a new fitness regimen?',
  action1: 'Contact',
  faq1Question: 'What are the benefits of regular exercise?',
  faq4Question: 'How can I stay motivated to exercise regularly?',
  faq3Answer:
    'A balanced meal containing carbohydrates and protein is ideal before a workout to provide energy and support muscle recovery.',
  faq3Question: 'What should I eat before a workout?',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  heading2: 'Still have a question?',
  heading1: 'FAQs',
  faq5Answer:
    'It is advisable to consult a healthcare professional, especially if you have any underlying health conditions or concerns.',
  faq1Answer:
    'Regular exercise can help improve cardiovascular health, boost metabolism, increase energy levels, and promote overall well-being.',
  faq2Answer:
    'It is recommended to engage in at least 150 minutes of moderate-intensity exercise per week, spread out over several days.',
  faq2Question: 'How often should I exercise?',
}

FAQ1.propTypes = {
  faq4Answer: PropTypes.string,
  faq5Question: PropTypes.string,
  action1: PropTypes.string,
  faq1Question: PropTypes.string,
  faq4Question: PropTypes.string,
  faq3Answer: PropTypes.string,
  faq3Question: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
  heading2: PropTypes.string,
  heading1: PropTypes.string,
  faq5Answer: PropTypes.string,
  faq1Answer: PropTypes.string,
  faq2Answer: PropTypes.string,
  faq2Question: PropTypes.string,
}

export default FAQ1
