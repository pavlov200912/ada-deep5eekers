import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container1 ${props.rootClassName} `}>
      <div className="component-container2">
        <div className="component-container3">
          <span className="component-text10">
            {props.text7 ?? (
              <Fragment>
                <span className="component-text32">NUMBER OF MOVIES</span>
              </Fragment>
            )}
          </span>
          <span>
            {props.text15 ?? (
              <Fragment>
                <span className="component-text24">88K</span>
              </Fragment>
            )}
          </span>
          <span className="component-text12">
            {props.text25 ?? (
              <Fragment>
                <span className="component-text22">
                  The number of movies in the CMU dataset.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="component-container4">
          <span className="component-text13">
            {props.text32 ?? (
              <Fragment>
                <span className="component-text23">PERIOD OF TIME</span>
              </Fragment>
            )}
          </span>
          <span className="component-text14">
            {props.text112 ?? (
              <Fragment>
                <span className="component-text33">1888-2016</span>
              </Fragment>
            )}
          </span>
          <span className="component-text15">
            {props.text212 ?? (
              <Fragment>
                <span className="component-text30">
                  The movies in the CMU dataset were released between 1888 and
                  2016. 
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="component-container5">
          <span className="component-text16">
            {props.text42 ?? (
              <Fragment>
                <span className="component-text26">NUMBER OF IMDB VOTES</span>
              </Fragment>
            )}
          </span>
          <span className="component-text17">
            {props.text122 ?? (
              <Fragment>
                <span className="component-text27">635M</span>
              </Fragment>
            )}
          </span>
          <span className="component-text18">
            {props.text222 ?? (
              <Fragment>
                <span className="component-text28">
                  The number of ratings retrieved from IMDB.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="component-container6">
          <span className="component-text19">
            {props.text52 ?? (
              <Fragment>
                <span className="component-text25">
                  NUMBER OF OSCAR NOMINATIONS
                </span>
              </Fragment>
            )}
          </span>
          <span>
            {props.text132 ?? (
              <Fragment>
                <span className="component-text29">11K</span>
              </Fragment>
            )}
          </span>
          <span className="component-text21">
            {props.text232 ?? (
              <Fragment>
                <span className="component-text31">
                  The number of Oscar nominations retrieved.
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  text25: undefined,
  text32: undefined,
  text15: undefined,
  text52: undefined,
  text42: undefined,
  text122: undefined,
  text222: undefined,
  text132: undefined,
  text212: undefined,
  text232: undefined,
  text7: undefined,
  text112: undefined,
  rootClassName: '',
}

AppComponent.propTypes = {
  text25: PropTypes.element,
  text32: PropTypes.element,
  text15: PropTypes.element,
  text52: PropTypes.element,
  text42: PropTypes.element,
  text122: PropTypes.element,
  text222: PropTypes.element,
  text132: PropTypes.element,
  text212: PropTypes.element,
  text232: PropTypes.element,
  text7: PropTypes.element,
  text112: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default AppComponent
