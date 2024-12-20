import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './wordclouds.css'

const Wordclouds = (props) => {
  const [slideNo, setSlideNo] = useState(1)
  return (
    <div className={`wordclouds-check ${props.rootClassName} `}>
      {slideNo === 1 && (
        <div className="wordclouds-container1">
          <iframe
            src="https://scanton-epfl.github.io/ada-figures/wordclouds/agent_events_word_cloud.html"
            className="wordclouds-iframe1"
          ></iframe>
          <span className="wordclouds-text10">
            {props.text2 ?? (
              <Fragment>
                <span className="wordclouds-text13">
                  <span className="wordclouds-text14">
                    The agent event words across the genres tend to show men
                    displaying more aggressive and initiative actions while
                    women are involved in more evasive and responsive actions.
                    For example we can look at the top genre, thrillers. In this
                    genre, men do acts of killing, following, sending, leading,
                    and using. These actions are strong in nature. Women do acts
                    of living, running, dying, and hearing. These are actions
                    taken as a response.
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </Fragment>
            )}
          </span>
          <div onClick={() => setSlideNo(3)} className="wordclouds-leftbutton1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="wordclouds-icon10"
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
          <div
            onClick={() => setSlideNo(2)}
            className="wordclouds-rightbutton1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="wordclouds-icon12"
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
        </div>
      )}
      {slideNo === 2 && (
        <div className="wordclouds-container2">
          <span className="wordclouds-text11">
            {props.text4 ?? (
              <Fragment>
                <span className="wordclouds-text16">
                  <span className="wordclouds-text17">
                    The patient event words tend to show men being the recipient
                    of aggressive acts and confrontational events. Women tend to
                    be recipients of acts of rescue. Four of the five top genres
                    have the word ‘save’ as one of the most frequent patient
                    event words for women.
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </Fragment>
            )}
          </span>
          <div onClick={() => setSlideNo(1)} className="wordclouds-leftbutton2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="wordclouds-icon14"
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
          <iframe
            src="https://scanton-epfl.github.io/ada-figures/wordclouds/patient_events_word_cloud.html"
            className="wordclouds-iframe2"
          ></iframe>
          <div
            onClick={() => setSlideNo(3)}
            className="wordclouds-rightbutton2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="wordclouds-icon16"
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
        </div>
      )}
      {slideNo === 3 && (
        <div className="wordclouds-container3">
          <iframe
            src="https://scanton-epfl.github.io/ada-figures/wordclouds/possesive_events_word_cloud.html"
            className="wordclouds-iframe3"
          ></iframe>
          <span className="wordclouds-text12">
            {props.text211 ?? (
              <Fragment>
                <span className="wordclouds-text19">
                  <span className="wordclouds-text20">
                    The possessive event words don’t show as clear of a
                    difference between genders as the previous events do. Both
                    genders have words associated with family, spouses, and
                    friends. One difference is that men tend to be associated
                    with ownership of weapons more than women. However
                  </span>
                  <span>
                    , adventure films display distinct gendered patterns. Men
                    are frequently associated with terms like &quot;wife,&quot;
                    &quot;girlfriend,&quot; &quot;gang,&quot; &quot;crew,&quot;
                    &quot;mission,&quot; and &quot;team,&quot; emphasizing
                    action-driven roles and group dynamics. In contrast, women
                    are more commonly linked to words such as
                    &quot;husband,&quot; &quot;children,&quot; &quot;love,&quot;
                    &quot;home,&quot; &quot;parent,&quot; and &quot;room,&quot;
                    reflecting familial roles and emotional connections. These
                    patterns suggest a narrative tendency to portray men in
                    external and action-oriented contexts while associating
                    women with relational and domestic domains.
                  </span>
                </span>
              </Fragment>
            )}
          </span>
          <div onClick={() => setSlideNo(2)} className="wordclouds-leftbutton3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="wordclouds-icon18"
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
          <div
            onClick={() => setSlideNo(1)}
            className="wordclouds-rightbutton3"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="wordclouds-icon20"
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
        </div>
      )}
    </div>
  )
}

Wordclouds.defaultProps = {
  rootClassName: '',
  text2: undefined,
  text4: undefined,
  text211: undefined,
}

Wordclouds.propTypes = {
  rootClassName: PropTypes.string,
  text2: PropTypes.element,
  text4: PropTypes.element,
  text211: PropTypes.element,
}

export default Wordclouds
