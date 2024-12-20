import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './slider-genders.css'

const SliderGenders = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`slider-genders-container10 ${props.rootClassName} `}>
      <div className="slider-genders-container11">
        <button
          type="button"
          onClick={() => setSlideNumber(1)}
          className="slider-genders-button1 button"
        >
          <span className="slider-genders-text10">
            {props.button ?? (
              <Fragment>
                <span className="slider-genders-text64">Time</span>
              </Fragment>
            )}
          </span>
        </button>
        <button
          type="button"
          onClick={() => setSlideNumber(2)}
          className="slider-genders-button2 button"
        >
          <span className="slider-genders-text11">
            {props.button2 ?? (
              <Fragment>
                <span className="slider-genders-text36">Geography</span>
              </Fragment>
            )}
          </span>
        </button>
        <button
          type="button"
          onClick={() => setSlideNumber(3)}
          className="slider-genders-button3 button"
        >
          <span className="slider-genders-text12">
            {props.button1 ?? (
              <Fragment>
                <span className="slider-genders-text37">Genres</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
      {slideNumber === 1 && (
        <div className="slider-genders-slide1">
          <div className="slider-genders-container12">
            <div className="slider-genders-container13">
              <span className="slider-genders-text13">
                {props.text14 ?? (
                  <Fragment>
                    <span className="slider-genders-text38">
                      <span className="slider-genders-text39">Time</span>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="slider-genders-text14">
                {props.text15 ?? (
                  <Fragment>
                    <span className="slider-genders-text59">
                      Over the decades, male characters have consistently
                      outnumbered female characters in movies. In earlier years,
                      women had fewer roles, with men dominating the screen. By
                      the 2000s, the number of roles grew significantly, but the
                      gender gap remained large. In recent years, female
                      representation has started to increase, reflecting gradual
                      progress toward greater inclusivity in film.&quot;
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <iframe
              src="https://scanton-epfl.github.io/ada-figures/plot_decades.html"
              className="slider-genders-iframe1"
            ></iframe>
          </div>
          <div className="slider-genders-container14">
            <span className="slider-genders-text15">
              {props.text16 ?? (
                <Fragment>
                  <span className="slider-genders-text60">
                    <span className="slider-genders-text61">
                      From the regression line in this plot, we see that the
                      male ratio in movies is decreasing. That said, the ratio
                      of male roles is still 0.69.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="slider-genders-text62"></br>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
            <iframe
              src="https://scanton-epfl.github.io/ada-figures/male_ratio_time.html"
              className="slider-genders-iframe2"
            ></iframe>
          </div>
          <div
            onClick={() => setSlideNumber(2)}
            className="slider-genders-rightbutton1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="slider-genders-icon10"
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
            onClick={() => setSlideNumber(3)}
            className="slider-genders-leftbutton1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="slider-genders-icon12"
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
        </div>
      )}
      {slideNumber === 2 && (
        <div className="slider-genders-slide2">
          <div
            onClick={() => setSlideNumber(3)}
            className="slider-genders-rightbutton2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="slider-genders-icon14"
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
          <div className="slider-genders-container15">
            <div className="slider-genders-container16">
              <span className="slider-genders-text16">
                {props.text141 ?? (
                  <Fragment>
                    <span className="slider-genders-text65">
                      <span className="slider-genders-text66">Geography</span>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="slider-genders-text17">
                {props.text151 ?? (
                  <Fragment>
                    <span className="slider-genders-text27">
                      <span>
                        How does this gender imbalance vary across the world?
                        Are some countries or continents more inclusive to
                        women?
                      </span>
                      <br className="slider-genders-text29"></br>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="slider-genders-container17">
            <span className="slider-genders-text18">
              {props.text17 ?? (
                <Fragment>
                  <span className="slider-genders-text55">
                    <span className="slider-genders-text56">
                      This plot shows that generally, no matter the region, the
                      gender gap is clear for films. The majority of our data
                      can be seen in the North America, Europe, and Asia plots.
                      In these continents, there is a fairly similar
                      distribution of gender roles. In the more sparse
                      distributions, in Africa and South America, we can still
                      see that film is male dominated. These distributions are
                      generalized to continents, but maybe there is more
                      diversity at the country level.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="slider-genders-text57"></br>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
            <iframe
              src="https://scanton-epfl.github.io/ada-figures/gender_distribution_by_continent.html"
              className="slider-genders-iframe3"
            ></iframe>
          </div>
          <div
            onClick={() => setSlideNumber(1)}
            className="slider-genders-leftbutton2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="slider-genders-icon16"
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
          <div className="slider-genders-container18">
            <iframe
              src="https://scanton-epfl.github.io/ada-figures/world_plot.html"
              className="slider-genders-iframe4"
            ></iframe>
            <span className="slider-genders-text19">
              {props.text18 ?? (
                <Fragment>
                  <span className="slider-genders-text23">
                    <span className="slider-genders-text24">
                      As shown in the map, the majority of countries are a
                      darker color, symbolizing that the percentage of men is
                      higher than women. The most extreme examples are the
                      United States, India, and the United Kingdom. Only a few
                      countries such as Peru and Libya appear to have a balanced
                      amount of characters. However, there is only one movie
                      entry for both countries, so these shouldn’t be considered
                      representative of the country’s film industry.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="slider-genders-text25"></br>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      )}
      {slideNumber === 3 && (
        <div className="slider-genders-slide3">
          <div
            onClick={() => setSlideNumber(1)}
            className="slider-genders-rightbutton3"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="slider-genders-icon18"
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
          <div className="slider-genders-container19">
            <div className="slider-genders-container20">
              <span className="slider-genders-text20">
                {props.text1411 ?? (
                  <Fragment>
                    <span className="slider-genders-text47">
                      <span>Genres</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="slider-genders-text21">
                {props.text1511 ?? (
                  <Fragment>
                    <span className="slider-genders-text31">
                      <span>
                        We have explored gender representation across time and
                        geography, now let’s see if there are certain genres
                        that women are more represented in. With the wide range
                        of genres represented in the dataset, we will focus on
                        the top ten genres with the most overall
                        actors/actresses. The first plot shows the average ratio
                        of female actresses in films by genre. The second plot
                        shows the count of each gender by genre.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br className="slider-genders-text33"></br>
                      <br></br>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="slider-genders-container21">
            <div className="slider-genders-container22">
              <iframe
                src="https://scanton-epfl.github.io/ada-figures/top_genres_gender_counts.html"
                className="slider-genders-iframe5"
              ></iframe>
              <iframe
                src="https://scanton-epfl.github.io/ada-figures/genders_genres.html"
                className="slider-genders-iframe6"
              ></iframe>
            </div>
            <span className="slider-genders-text22">
              {props.text181 ?? (
                <Fragment>
                  <span className="slider-genders-text50">
                    <span className="slider-genders-text51">
                      With these two plots we get a sense of the popularity of
                      the genre and the female representation in each. Women
                      have the highest representation in romance films, while
                      the lowest in action/adventure films.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="slider-genders-text52"></br>
                    <br className="slider-genders-text53"></br>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div
            onClick={() => setSlideNumber(2)}
            className="slider-genders-leftbutton3"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="slider-genders-icon20"
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
        </div>
      )}
    </div>
  )
}

SliderGenders.defaultProps = {
  text18: undefined,
  text151: undefined,
  text1511: undefined,
  button2: undefined,
  button1: undefined,
  text14: undefined,
  text1411: undefined,
  text181: undefined,
  rootClassName: '',
  text17: undefined,
  text15: undefined,
  text16: undefined,
  button: undefined,
  text141: undefined,
}

SliderGenders.propTypes = {
  text18: PropTypes.element,
  text151: PropTypes.element,
  text1511: PropTypes.element,
  button2: PropTypes.element,
  button1: PropTypes.element,
  text14: PropTypes.element,
  text1411: PropTypes.element,
  text181: PropTypes.element,
  rootClassName: PropTypes.string,
  text17: PropTypes.element,
  text15: PropTypes.element,
  text16: PropTypes.element,
  button: PropTypes.element,
  text141: PropTypes.element,
}

export default SliderGenders
