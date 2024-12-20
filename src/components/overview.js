import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './overview.css'

const Overview = (props) => {
  return (
    <div className={`overview-container1 ${props.rootClassName} `}>
      <div className="overview-overview">
        <div className="overview-container2">
          <span className="overview-text10">
            {props.text ?? (
              <Fragment>
                <span className="overview-text23">
                  Key Question of our Research
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="overview-container3">
          <div className="overview-container4">
            <button
              type="button"
              disabled={false}
              className="overview-button1 button"
            >
              <svg width="48" height="48" viewBox="0 0 48 48">
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M24 19V4M12 22l12-3l12-3m-8 14l8-14m8 14l-8-14M20 36l-8-14M4 36l8-14"></path>
                  <path
                    d="M12 44a8 8 0 0 0 8-8H4a8 8 0 0 0 8 8m24-6a8 8 0 0 0 8-8H28a8 8 0 0 0 8 8"
                    fill="currentColor"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </g>
              </svg>
            </button>
            <span className="overview-text11">
              {props.text13 ?? (
                <Fragment>
                  <span className="overview-text25">GENDER IMBALANCES</span>
                </Fragment>
              )}
            </span>
            <span className="overview-text12">
              {props.text12 ?? (
                <Fragment>
                  <span className="overview-text27">
                    What gender imbalances exist in acting roles, and how do
                    these differences vary over time, across genres, and between
                    countries?
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="overview-container5">
            <button type="button" className="overview-button2 button">
              <svg width="50" height="50" viewBox="0 0 24 24">
                <g
                  fill="none"
                  color="currentColor"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4.222 21.995v-3.55c0-1.271-.333-1.932-.987-3.037A8.888 8.888 0 0 1 10.889 2a8.89 8.89 0 0 1 8.889 8.887c0 .58 0 .87.024 1.032c.058.388.24.722.417 1.068L22 16.441l-1.4.7c-.405.202-.608.303-.749.49s-.181.399-.26.82l-.008.042c-.183.968-.384 2.036-.95 2.71c-.2.237-.448.43-.727.567c-.461.225-1.028.225-2.162.225c-.525 0-1.051.012-1.576 0c-1.243-.031-2.168-1.077-2.168-2.29"></path>
                  <path d="M14.388 10.532c-.426 0-.815-.162-1.11-.427m1.11.426c0 1.146-.664 2.235-1.942 2.235S10.504 13.854 10.504 15m3.884-4.469c2.15 0 2.15-3.35 0-3.35q-.294.001-.557.095c.105-2.498-3.496-3.176-4.312-.836m.985 1.857c0-.774-.39-1.456-.985-1.857m0 0c-1.852-1.25-4.32.993-3.146 2.993c-1.97.295-1.76 3.333.247 3.333a1.66 1.66 0 0 0 1.362-.712"></path>
                </g>
              </svg>
            </button>
            <span className="overview-text13">
              {props.text131 ?? (
                <Fragment>
                  <span className="overview-text29">GENDER STEREOTYPES</span>
                </Fragment>
              )}
            </span>
            <span className="overview-text14">
              {props.text121 ?? (
                <Fragment>
                  <span className="overview-text26">
                    What stereotypical character types are associated with each
                    gender?
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="overview-container6">
            <button type="button" className="overview-button3 button">
              <svg width="50" height="50" viewBox="0 0 32 32">
                <circle r="2" cx="20" cy="4" fill="currentColor"></circle>
                <circle r="2" cx="8" cy="16" fill="currentColor"></circle>
                <circle r="2" cx="28" cy="12" fill="currentColor"></circle>
                <circle r="2" cx="11" cy="7" fill="currentColor"></circle>
                <circle r="2" cx="16" cy="24" fill="currentColor"></circle>
                <path
                  d="M30 3.413L28.586 2L4 26.585V2H2v26a2 2 0 0 0 2 2h26v-2H5.413Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <span className="overview-text15">
              {props.text1311 ?? (
                <Fragment>
                  <span className="overview-text31">PLOT ANALYSIS</span>
                </Fragment>
              )}
            </span>
            <span className="overview-text16">
              {props.text1211 ?? (
                <Fragment>
                  <span className="overview-text21">
                    Are male and female characters typically assigned different
                    actions and portrayals? Do the words used in each case
                    convey positive or negative connotations?
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="overview-container7">
            <button type="button" className="overview-button4 button">
              <svg width="50" height="50" viewBox="0 0 32 32">
                <path
                  d="M26 7h-2V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v1H6a2 2 0 0 0-2 2v3a4.005 4.005 0 0 0 4 4h.322A8.17 8.17 0 0 0 15 21.934V26h-5v2h12v-2h-5v-4.069A7.97 7.97 0 0 0 23.74 16H24a4.005 4.005 0 0 0 4-4V9a2 2 0 0 0-2-2M8 14a2 2 0 0 1-2-2V9h2Zm18-2a2 2 0 0 1-2 2V9h2Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <span className="overview-text17">
              {props.text13111 ?? (
                <Fragment>
                  <span className="overview-text24">
                    REPRESENTATION &amp; SUCCESS
                  </span>
                </Fragment>
              )}
            </span>
            <span className="overview-text18">
              {props.text12111 ?? (
                <Fragment>
                  <span className="overview-text28">
                    Is unequal gender representation in films linked to a
                    movie&apos;s failure or success? Are Oscar nominations
                    balanced across both genders?
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="overview-container8">
            <button type="button" className="overview-button5 button">
              <svg width="50" height="50" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                >
                  <path
                    d="M19 12L5 21M5 3v9m14-9v9M5 12l14 9M4 12h16"
                    stroke-linecap="round"
                  ></path>
                  <path d="M5 4h14M5 7h14"></path>
                </g>
              </svg>
            </button>
            <span className="overview-text19">
              {props.text131111 ?? (
                <Fragment>
                  <span className="overview-text22">BEHIND THE CAMERA</span>
                </Fragment>
              )}
            </span>
            <span className="overview-text20">
              {props.text121111 ?? (
                <Fragment>
                  <span className="overview-text30">
                    Does gender inequality exist in production roles as well?
                    Does a director&apos;s gender influence the portrayal of
                    male and female characters in films?
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Overview.defaultProps = {
  text1211: undefined,
  text131111: undefined,
  text: undefined,
  text13111: undefined,
  text13: undefined,
  text121: undefined,
  text12: undefined,
  text12111: undefined,
  text131: undefined,
  text121111: undefined,
  rootClassName: '',
  text1311: undefined,
}

Overview.propTypes = {
  text1211: PropTypes.element,
  text131111: PropTypes.element,
  text: PropTypes.element,
  text13111: PropTypes.element,
  text13: PropTypes.element,
  text121: PropTypes.element,
  text12: PropTypes.element,
  text12111: PropTypes.element,
  text131: PropTypes.element,
  text121111: PropTypes.element,
  rootClassName: PropTypes.string,
  text1311: PropTypes.element,
}

export default Overview
