import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './sliderclusters.css'

const Sliderclusters = (props) => {
  const [slideNo, setSlideNo] = useState(1)
  return (
    <div className={`sliderclusters-container ${props.rootClassName} `}>
      {slideNo === 1 && (
        <div className="sliderclusters-slide1">
          <div
            onClick={() => setSlideNo(2)}
            className="sliderclusters-rightbutton1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="sliderclusters-icon10"
            >
              <path
                d="m9 5l7 7l-7 7"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setSlideNo(3)}
            className="sliderclusters-leftbutton1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="sliderclusters-icon12"
            >
              <path
                d="m15 19l-7-7l7-7"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <span className="sliderclusters-text10">
            {props.text ?? (
              <Fragment>
                <span className="sliderclusters-text16">
                  <span className="sliderclusters-text17">
                    Top traits of both genders
                  </span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </span>
          <iframe
            src="https://scanton-epfl.github.io/ada-figures/top_clusters_both_genders.html"
            className="sliderclusters-iframe1"
          ></iframe>
        </div>
      )}
      {slideNo === 2 && (
        <div className="sliderclusters-slide2">
          <div
            onClick={() => setSlideNo(3)}
            className="sliderclusters-rightbutton2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="sliderclusters-icon14"
            >
              <path
                d="m9 5l7 7l-7 7"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setSlideNo(1)}
            className="sliderclusters-leftbutton2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="sliderclusters-icon16"
            >
              <path
                d="m15 19l-7-7l7-7"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <span className="sliderclusters-text11">
            {props.text4 ?? (
              <Fragment>
                <span className="sliderclusters-text19">
                  <span className="sliderclusters-text20">
                    Top traits of males
                  </span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </span>
          <iframe
            src="https://scanton-epfl.github.io/ada-figures/top_clusters_for_males.html"
            className="sliderclusters-iframe2"
          ></iframe>
        </div>
      )}
      {slideNo === 3 && (
        <div className="sliderclusters-slide3">
          <div
            onClick={() => setSlideNo(1)}
            className="sliderclusters-rightbutton3"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="sliderclusters-icon18"
            >
              <path
                d="m9 5l7 7l-7 7"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setSlideNo(2)}
            className="sliderclusters-leftbutton3"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="sliderclusters-icon20"
            >
              <path
                d="m15 19l-7-7l7-7"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <span className="sliderclusters-text12">
            {props.text41 ?? (
              <Fragment>
                <span className="sliderclusters-text13">
                  <span className="sliderclusters-text14">
                    Top traits of females
                  </span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </span>
          <iframe
            src="https://scanton-epfl.github.io/ada-figures/top_clusters_females.html"
            className="sliderclusters-iframe3"
          ></iframe>
        </div>
      )}
    </div>
  )
}

Sliderclusters.defaultProps = {
  text41: undefined,
  text: undefined,
  text4: undefined,
  rootClassName: '',
}

Sliderclusters.propTypes = {
  text41: PropTypes.element,
  text: PropTypes.element,
  text4: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Sliderclusters
