import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container1">
      <div className="component1-container2">
        <div className="component1-container3">
          <span>
            {props.text1 ?? (
              <Fragment>
                <span className="component1-text23">NUMBER OF MOVIES</span>
              </Fragment>
            )}
          </span>
          <span>
            {props.text2 ?? (
              <Fragment>
                <span className="component1-text18">PERIOD OF TIME</span>
              </Fragment>
            )}
          </span>
          <span>
            {props.text3 ?? (
              <Fragment>
                <span className="component1-text22">NUMBER OF REVIEWS</span>
              </Fragment>
            )}
          </span>
          <span>
            {props.text4 ?? (
              <Fragment>
                <span className="component1-text21">idkkkkkk</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="component1-container4">
          <span className="component1-text14">
            {props.text11 ?? (
              <Fragment>
                <span className="component1-text19">88K</span>
              </Fragment>
            )}
          </span>
          <span>
            {props.text21 ?? (
              <Fragment>
                <span className="component1-text20">1888-2016</span>
              </Fragment>
            )}
          </span>
          <span className="component1-text16">
            {props.text31 ?? (
              <Fragment>
                <span className="component1-text24">IDK K</span>
              </Fragment>
            )}
          </span>
          <span>
            {props.text41 ?? (
              <Fragment>
                <span className="component1-text25">????</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="component1-container5">
          <div className="component1-container6"></div>
          <div className="component1-container7"></div>
          <div className="component1-container8"></div>
          <div className="component1-container9"></div>
        </div>
      </div>
    </div>
  )
}

Component1.defaultProps = {
  text2: undefined,
  text11: undefined,
  text21: undefined,
  text4: undefined,
  text3: undefined,
  text1: undefined,
  text31: undefined,
  text41: undefined,
}

Component1.propTypes = {
  text2: PropTypes.element,
  text11: PropTypes.element,
  text21: PropTypes.element,
  text4: PropTypes.element,
  text3: PropTypes.element,
  text1: PropTypes.element,
  text31: PropTypes.element,
  text41: PropTypes.element,
}

export default Component1
