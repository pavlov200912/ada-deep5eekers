import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './sliderclusters.css'

const Sliderclusters = (props) => {
  const [slideNo, setSlideNo] = useState(1)
  return (
    <div className={`sliderclusters-container1 ${props.rootClassName} `}>
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
          <div className="sliderclusters-container2">
            <div className="sliderclusters-container3">
              <div className="sliderclusters-container4">
                <span className="sliderclusters-text10">
                  {props.text6 ?? (
                    <Fragment>
                      <span className="sliderclusters-text16">
                        Stereotypes across both genders
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="sliderclusters-text11">
                  {props.text5 ?? (
                    <Fragment>
                      <span className="sliderclusters-text21">
                        <span className="sliderclusters-text22">
                          Since the dataset is heavily tailed towards male
                          characters, the top clusters across both genders is
                          mainly dominated by stereotypical male roles. To get a
                          better idea of the stereotypical roles played, we can
                          look at each genders’ character clusters individually.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br className="sliderclusters-text23"></br>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <iframe
              src="https://scanton-epfl.github.io/ada-figures/top_clusters_both_genders.html"
              className="sliderclusters-iframe1"
            ></iframe>
          </div>
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
          <div className="sliderclusters-container5"></div>
          <div className="sliderclusters-container6">
            <div className="sliderclusters-container7">
              <div className="sliderclusters-container8">
                <span className="sliderclusters-text12">
                  {props.text62 ?? (
                    <Fragment>
                      <span className="sliderclusters-text25">
                        Stereotypes across Males
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="sliderclusters-text13">
                  {props.text52 ?? (
                    <Fragment>
                      <span className="sliderclusters-text17">
                        <span className="sliderclusters-text18">
                          Each figure gives us an idea of the stereotypical
                          roles played by both genders. Women are more
                          associated with dumb, beautiful characters while men
                          are more associated with manic, corrupt, and heroic
                          characters. Both cases present harmful views of women
                          and men. In general, the character types are not
                          exactly something you want to be associated with.
                          Interestingly, the stereotypes are mainly negative for
                          both genders but in very different ways. Women are
                          seen as unintelligent beauties, but men are seen as
                          threatening.
                        </span>
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <iframe
              src="https://scanton-epfl.github.io/ada-figures/top_clusters_for_males.html"
              className="sliderclusters-iframe2"
            ></iframe>
          </div>
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
          <div className="sliderclusters-container9">
            <span className="sliderclusters-text14">
              {props.text611 ?? (
                <Fragment>
                  <span className="sliderclusters-text30">
                    Stereotypes across Females
                  </span>
                </Fragment>
              )}
            </span>
            <span className="sliderclusters-text15">
              {props.text511 ?? (
                <Fragment>
                  <span className="sliderclusters-text26">
                    <span className="sliderclusters-text27">
                      Each figure gives us an idea of the stereotypical roles
                      played by both genders. Women are more associated with
                      dumb, beautiful characters while men are more associated
                      with manic, corrupt, and heroic characters. Both cases
                      present harmful views of women and men. In general, the
                      character types are not exactly something you want to be
                      associated with. Interestingly, the stereotypes are mainly
                      negative for both genders but in very different ways.
                      Women are seen as unintelligent beauties, but men are seen
                      as threatening.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="sliderclusters-text28"></br>
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
        </div>
      )}
    </div>
  )
}

Sliderclusters.defaultProps = {
  text6: undefined,
  text52: undefined,
  text5: undefined,
  text62: undefined,
  text511: undefined,
  text611: undefined,
  rootClassName: '',
}

Sliderclusters.propTypes = {
  text6: PropTypes.element,
  text52: PropTypes.element,
  text5: PropTypes.element,
  text62: PropTypes.element,
  text511: PropTypes.element,
  text611: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Sliderclusters
