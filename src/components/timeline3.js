import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './timeline3.css'

const Timeline3 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="timeline3-max-width thq-section-max-width">
        <div className="timeline3-container11">
          <h2 className="timeline3-text10 thq-heading-2">
            {props.title1 ?? (
              <Fragment>
                <span className="timeline3-text28">
                  Long heading going here
                </span>
              </Fragment>
            )}
          </h2>
          <span className="timeline3-text11 thq-body-small">
            {props.heading1 ?? (
              <Fragment>
                <span className="timeline3-text33">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </span>
              </Fragment>
            )}
          </span>
          <div className="timeline3-container12">
            <button type="button" className="thq-button-filled">
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="timeline3-text24">Primary action</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button type="button" className="thq-button-outline">
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="timeline3-text29">Seconday action</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="timeline3-timeline-container">
          <div className="timeline3-step1">
            <div className="timeline3-container13">
              <div className="timeline3-progress010"></div>
              <div className="timeline3-container14"></div>
              <div className="timeline3-progress011"></div>
            </div>
            <div className="timeline3-container15">
              <h3 className="thq-heading-3">
                {props.card1Date ?? (
                  <Fragment>
                    <span className="timeline3-text26">23/04/2023</span>
                  </Fragment>
                )}
              </h3>
              <span className="timeline3-text15 thq-body-small">
                {props.card1Content ?? (
                  <Fragment>
                    <span className="timeline3-text30">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="timeline3-step2">
            <div className="timeline3-container16">
              <div className="timeline3-progress012"></div>
              <div className="timeline3-container17"></div>
              <div className="timeline3-progress013"></div>
            </div>
            <div className="timeline3-container18">
              <h3 className="thq-heading-3">
                {props.card2Date ?? (
                  <Fragment>
                    <span className="timeline3-text31">12/05/2023</span>
                  </Fragment>
                )}
              </h3>
              <span className="timeline3-text17 thq-body-small">
                {props.card2Content ?? (
                  <Fragment>
                    <span className="timeline3-text32">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="timeline3-step3">
            <div className="timeline3-container19">
              <div className="timeline3-progress014"></div>
              <div className="timeline3-container20"></div>
              <div className="timeline3-progress015"></div>
            </div>
            <div className="timeline3-container21">
              <h3 className="thq-heading-3">
                {props.card3Date ?? (
                  <Fragment>
                    <span className="timeline3-text35">07/08/2023</span>
                  </Fragment>
                )}
              </h3>
              <span className="timeline3-text19 thq-body-small">
                {props.card3Content ?? (
                  <Fragment>
                    <span className="timeline3-text36">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="timeline3-step4">
            <div className="timeline3-container22">
              <div className="timeline3-progress016"></div>
              <div className="timeline3-container23"></div>
              <div className="timeline3-progress017"></div>
            </div>
            <div className="timeline3-container24">
              <h3 className="thq-heading-3">
                {props.card4Date ?? (
                  <Fragment>
                    <span className="timeline3-text25">02/11/2023</span>
                  </Fragment>
                )}
              </h3>
              <span className="timeline3-text21 thq-body-small">
                {props.card4Content ?? (
                  <Fragment>
                    <span className="timeline3-text34">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="timeline3-step5">
            <div className="timeline3-container25">
              <div className="timeline3-progress018"></div>
              <div className="timeline3-container26"></div>
              <div className="timeline3-progress019"></div>
            </div>
            <div className="timeline3-container27">
              <h3 className="thq-heading-3">
                {props.card5Date ?? (
                  <Fragment>
                    <span className="timeline3-text27">09/02/2024</span>
                  </Fragment>
                )}
              </h3>
              <span className="timeline3-text23 thq-body-small">
                {props.card5Content ?? (
                  <Fragment>
                    <span className="timeline3-text37">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Timeline3.defaultProps = {
  action1: undefined,
  card4Date: undefined,
  card1Date: undefined,
  card5Date: undefined,
  title1: undefined,
  action2: undefined,
  card1Content: undefined,
  card2Date: undefined,
  card2Content: undefined,
  heading1: undefined,
  card4Content: undefined,
  card3Date: undefined,
  card3Content: undefined,
  card5Content: undefined,
}

Timeline3.propTypes = {
  action1: PropTypes.element,
  card4Date: PropTypes.element,
  card1Date: PropTypes.element,
  card5Date: PropTypes.element,
  title1: PropTypes.element,
  action2: PropTypes.element,
  card1Content: PropTypes.element,
  card2Date: PropTypes.element,
  card2Content: PropTypes.element,
  heading1: PropTypes.element,
  card4Content: PropTypes.element,
  card3Date: PropTypes.element,
  card3Content: PropTypes.element,
  card5Content: PropTypes.element,
}

export default Timeline3
