import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list2.css'

const ContentList2 = (props) => {
  return (
    <div className="content-list2-container thq-section-padding">
      <div className="content-list2-max-width thq-section-max-width thq-flex-column">
        <div className="content-list2-content10 thq-flex-column">
          <ul>
            <li className="content-list2-li1 thq-flex-column list-item">
              <h2 className="content-list2-heading1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="content-list2-text10">Cinema</span>
                  </Fragment>
                )}
              </h2>
              <p className="content-list2-content1 thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="content-list2-text25">
                      Explore the latest trends and news in the world of cinema.
                    </span>
                  </Fragment>
                )}
              </p>
              <ul className="content-list2-ul2 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading2 ?? (
                      <Fragment>
                        <span className="content-list2-text12">
                          Gendered Lens
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content2 ?? (
                      <Fragment>
                        <span className="content-list2-text22">
                          Discover insights on looking at topics through a
                          gendered perspective.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading3 ?? (
                      <Fragment>
                        <span className="content-list2-text15">
                          Deep Seekers
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content3 ?? (
                      <Fragment>
                        <span className="content-list2-text19">
                          Join a community of deep seekers who explore profound
                          questions and seek meaning.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading4 ?? (
                      <Fragment>
                        <span className="content-list2-text20">
                          Customer Validation in Product Development
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content4 ?? (
                      <Fragment>
                        <span className="content-list2-text11">
                          Learn about the importance of customer validation in
                          shaping successful products.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading5 ?? (
                      <Fragment>
                        <span className="content-list2-text13">Metaverse</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content5 ?? (
                      <Fragment>
                        <span className="content-list2-text21">
                          Dive into the concept of the metaverse and its
                          implications for the future.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading6 ?? (
                      <Fragment>
                        <span className="content-list2-text18">Ecosystems</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content6 ?? (
                      <Fragment>
                        <span className="content-list2-text17">
                          Understand the interconnectedness of ecosystems and
                          how they impact businesses.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="content-list2-content11 thq-flex-column">
          <ul>
            <li className="content-list2-li7 thq-flex-column list-item">
              <h2 className="content-list2-heading7 thq-heading-2">
                {props.heading7 ?? (
                  <Fragment>
                    <span className="content-list2-text14">Development</span>
                  </Fragment>
                )}
              </h2>
              <p className="content-list2-content7 thq-body-small">
                {props.content7 ?? (
                  <Fragment>
                    <span className="content-list2-text26">
                      Stay updated on the latest developments in various
                      industries.
                    </span>
                  </Fragment>
                )}
              </p>
              <ul className="content-list2-ul4 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading8 ?? (
                      <Fragment>
                        <span className="content-list2-text23">
                          Integration
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content2 ?? (
                      <Fragment>
                        <span className="content-list2-text22">
                          Discover insights on looking at topics through a
                          gendered perspective.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading9 ?? (
                      <Fragment>
                        <span className="content-list2-text16">Growth</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content9 ?? (
                      <Fragment>
                        <span className="content-list2-text24">
                          Optimize growth strategies and unlock potential for
                          your business.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList2.defaultProps = {
  heading1: undefined,
  content4: undefined,
  heading2: undefined,
  heading5: undefined,
  heading7: undefined,
  heading3: undefined,
  heading9: undefined,
  content6: undefined,
  heading6: undefined,
  content3: undefined,
  heading4: undefined,
  content5: undefined,
  content2: undefined,
  heading8: undefined,
  content9: undefined,
  content1: undefined,
  content7: undefined,
}

ContentList2.propTypes = {
  heading1: PropTypes.element,
  content4: PropTypes.element,
  heading2: PropTypes.element,
  heading5: PropTypes.element,
  heading7: PropTypes.element,
  heading3: PropTypes.element,
  heading9: PropTypes.element,
  content6: PropTypes.element,
  heading6: PropTypes.element,
  content3: PropTypes.element,
  heading4: PropTypes.element,
  content5: PropTypes.element,
  content2: PropTypes.element,
  heading8: PropTypes.element,
  content9: PropTypes.element,
  content1: PropTypes.element,
  content7: PropTypes.element,
}

export default ContentList2
